import { chromium, Browser, Page } from 'playwright';
import { ScrapedClass, ScrapedMethod, ScrapedClassProperty, ScrapedEvent, ScrapedEnumMember } from './types';

/** Retries an async operation with exponential backoff. */
async function withRetry<T>(
    fn: () => Promise<T>,
    retries = 3,
    baseDelayMs = 1000,
): Promise<T> {
    let lastErr: unknown;
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            return await fn();
        } catch (err) {
            lastErr = err;
            if (attempt < retries) {
                const wait = baseDelayMs * 2 ** attempt;
                await new Promise(r => setTimeout(r, wait));
            }
        }
    }
    throw lastErr;
}

/** Full alphabetical API index — source of truth for all Object pages. */
const API_INDEX_URL =
    'https://docs.textcontrol.com/textcontrol/asp-dotnet/ref.javascript.api.htm';

/** The TXTextControl object page — scraped first so we can parse its Events table. */
const SEED_URL =
    'https://docs.textcontrol.com/textcontrol/asp-dotnet/ref.javascript.txtextcontrol.object.htm';

interface QueueEntry {
    url: string;
    /** The class that linked to this URL, used to set parentName on the discovered type. */
    parentName?: string;
}

interface ScrapeClassPageResult {
    cls: ScrapedClass;
    /** Object-page URLs to enqueue for BFS (discovered from Properties type links). */
    linkedObjectUrls: string[];
    /** Events scraped from this page (only present on the TXTextControl seed page). */
    events: ScrapedEvent[];
}

/**
 * Crawls the TX TextControl JS API documentation using BFS class discovery.
 *
 * Starting from the TXTextControl object page, it discovers all linked sub-objects
 * via Property type links (URLs ending in .object.htm) and visits each one.
 * The TXTextControl seed page is also parsed for the Events table.
 */
export class DocsScraper {
    private browser: Browser | null = null;

    async launch(headless = true): Promise<void> {
        this.browser = await chromium.launch({ headless });
    }

    async close(): Promise<void> {
        await this.browser?.close();
    }

    /**
     * Fast URL-only discovery: BFS visits each object page just to read the class
     * name from h1. No method sub-pages are visited, so this runs in seconds rather
     * than ~20 minutes. Use with `--refresh-urls` to keep the cache URL map current
     * without waiting for a full re-scrape.
     */
    async scrapeUrlsOnly(concurrency = 5): Promise<{ name: string; sourceUrl: string }[]> {
        if (!this.browser) throw new Error('Call launch() before scrapeUrlsOnly()');

        const indexPage = await this.browser.newPage();
        await indexPage.goto(API_INDEX_URL, { waitUntil: 'networkidle' });
        const indexObjectUrls: string[] = await indexPage.evaluate(() =>
            Array.from(document.querySelectorAll('a[href]'))
                .map(a => (a as HTMLAnchorElement).href)
                .filter(href => href.includes('/ref.javascript.') && href.endsWith('.htm')),
        );
        await indexPage.close();
        console.log(`  API index: ${indexObjectUrls.length} type pages — ${concurrency} workers`);

        const results: { name: string; sourceUrl: string }[] = [];
        const visited = new Set<string>();
        const queue: string[] = [SEED_URL, ...indexObjectUrls];
        const baseTotal = queue.length;
        let done = 0;

        const pages = await Promise.all(
            Array.from({ length: concurrency }, () => this.browser!.newPage()),
        );

        const worker = async (page: Page): Promise<void> => {
            while (queue.length > 0) {
                const url = queue.shift()!;
                if (visited.has(url)) continue;
                visited.add(url);

                done++;
                const urlSlug = url.replace(/^.*\/ref\.javascript\./, '').replace(/\.[^.]+\.htm$/, '');
                const total = Math.max(baseTotal, done + queue.length);

                try {
                    await withRetry(() => page.goto(url, { waitUntil: 'networkidle' }));
                    const name = await this.parseClassName(page);
                    if (name) {
                        results.push({ name, sourceUrl: url });
                        process.stdout.write(`  [${String(done).padStart(3)}/${total}] \x1b[32m✓\x1b[0m ${name}\n`);
                    } else {
                        process.stdout.write(`  [${String(done).padStart(3)}/${total}] \x1b[33m-\x1b[0m ${urlSlug}\n`);
                    }
                } catch (err) {
                    process.stdout.write(`  [${String(done).padStart(3)}/${total}] \x1b[31m✗\x1b[0m ${urlSlug}: ${err}\n`);
                }
            }
        };

        await Promise.all(pages.map(p => worker(p)));
        await Promise.all(pages.map(p => p.close()));

        return results;
    }

    async scrapeAll(options?: {
        /** Classes already fully scraped (from cache). Their sourceUrls are skipped. */
        resume?: ScrapedClass[];
        /** Called after each class is successfully scraped — use for incremental saves. */
        onClassScraped?: (cls: ScrapedClass, done: number, total: number) => void;
        /** Number of concurrent browser pages. Default: 5. */
        concurrency?: number;
        /** Milliseconds to wait between page navigations per worker (rate-limit guard). Default: 0. */
        delayMs?: number;
    }): Promise<{ classes: ScrapedClass[]; events: ScrapedEvent[] }> {
        if (!this.browser) throw new Error('Call launch() before scrapeAll()');

        const concurrency = options?.concurrency ?? 5;
        const delayMs = options?.delayMs ?? 0;

        // Build skip-set from already-fully-scraped cache entries
        const skipUrls = new Set<string>(
            (options?.resume ?? [])
                .filter(c => c.fullyScraped)
                .map(c => c.sourceUrl),
        );
        const resumeByUrl = new Map<string, ScrapedClass>(
            (options?.resume ?? []).map(c => [c.sourceUrl, c]),
        );

        // Seed the queue from the full API index (objects, enumerations, functions/callbacks)
        const indexPage = await this.browser.newPage();
        await indexPage.goto(API_INDEX_URL, { waitUntil: 'networkidle' });
        const indexObjectUrls: string[] = await indexPage.evaluate(() =>
            Array.from(document.querySelectorAll('a[href]'))
                .map(a => (a as HTMLAnchorElement).href)
                .filter(href => href.includes('/ref.javascript.') && href.endsWith('.htm')),
        );
        await indexPage.close();

        const cachedCount = [...skipUrls].filter(u => indexObjectUrls.includes(u) || u === SEED_URL).length;
        console.log(`  API index: ${indexObjectUrls.length} type pages — ${cachedCount} cached, ~${indexObjectUrls.length - cachedCount} to scrape — ${concurrency} workers`);

        // Shared state (safe: JS is single-threaded, mutations between awaits are atomic)
        const classes: ScrapedClass[] = [...(options?.resume ?? []).filter(c => c.fullyScraped)];
        let allEvents: ScrapedEvent[] = [];
        const visited = new Set<string>();
        const queue: QueueEntry[] = [
            { url: SEED_URL },
            ...indexObjectUrls.map(url => ({ url })),
        ];
        const baseTotal = queue.length;
        let completedCount = 0;
        let activeWorkers = 0;

        // Create the page pool
        const pages = await Promise.all(
            Array.from({ length: concurrency }, () => this.browser!.newPage()),
        );

        const worker = async (page: Page): Promise<void> => {
            while (true) {
                if (queue.length === 0) {
                    // Queue is empty — exit only when no other worker is mid-scrape
                    // (they might push new URLs via linkedObjectUrls)
                    if (activeWorkers === 0) return;
                    await new Promise(r => setTimeout(r, 20));
                    continue;
                }

                const entry = queue.shift()!;
                const { url, parentName } = entry;
                if (visited.has(url)) continue;
                visited.add(url);

                const urlSlug = url.replace(/^.*\/ref\.javascript\./, '').replace(/\.[^.]+\.htm$/, '');

                if (skipUrls.has(url)) {
                    completedCount++;
                    const total = Math.max(baseTotal, completedCount + queue.length + activeWorkers);
                    const cached = resumeByUrl.get(url)!;
                    process.stdout.write(`  [${String(completedCount).padStart(3)}/${total}] \x1b[2m(cached)\x1b[0m ${cached.name}\n`);
                    continue;
                }

                activeWorkers++;
                if (delayMs > 0) await new Promise(r => setTimeout(r, delayMs));
                try {
                    const result = await this.scrapeClassPage(page, url, parentName);
                    completedCount++;
                    const finalTotal = Math.max(baseTotal, completedCount + queue.length + activeWorkers);
                    if (result) {
                        result.cls.fullyScraped = true;
                        process.stdout.write(`  [${String(completedCount).padStart(3)}/${finalTotal}] \x1b[32m✓\x1b[0m ${result.cls.name}\n`);
                        classes.push(result.cls);
                        if (result.events.length > 0) allEvents = result.events;
                        options?.onClassScraped?.(result.cls, completedCount, finalTotal);
                        for (const objUrl of result.linkedObjectUrls) {
                            if (!visited.has(objUrl)) {
                                queue.push({ url: objUrl, parentName: result.cls.name });
                            }
                        }
                    } else {
                        process.stdout.write(`  [${String(completedCount).padStart(3)}/${finalTotal}] \x1b[33m-\x1b[0m ${urlSlug}\n`);
                    }
                } catch (err) {
                    completedCount++;
                    const finalTotal = Math.max(baseTotal, completedCount + queue.length + activeWorkers);
                    process.stdout.write(`  [${String(completedCount).padStart(3)}/${finalTotal}] \x1b[31m✗\x1b[0m ${urlSlug}: ${err}\n`);
                } finally {
                    activeWorkers--;
                }
            }
        };

        // Run all workers concurrently
        await Promise.all(pages.map(p => worker(p)));
        await Promise.all(pages.map(p => p.close()));

        return { classes, events: allEvents };
    }

    // ─── Single-class page ──────────────────────────────────────────────────

    private async scrapeClassPage(page: Page, url: string, parentName?: string): Promise<ScrapeClassPageResult | null> {
        await withRetry(() => page.goto(url, { waitUntil: 'networkidle' }));

        const name = await this.parseClassName(page);
        if (!name) return null;

        const isEnum = url.endsWith('.enumeration.htm');

        const description = await page
            .$eval('p', (el) => el.textContent?.replace(/​/g, '').trim() ?? '')
            .catch(() => '');

        const deprecated = await this.isPageDeprecated(page);

        const sections = await this.findSections(page);

        // Parse DOM-dependent sections while still on the class page.
        // parseEventsSection and parseConstructorSection rely on data-scraper-section
        // attributes and page structure set by findSections.
        const events = await this.parseEventsSection(page, sections.eventsTableSelector, url);
        const { isClass, constructorParams } = await this.parseConstructorSection(page);

        // Phase 2: navigate to property and method sub-pages.
        // Each call navigates the shared page instance away from the class page,
        // so all DOM-dependent reads above must be done before reaching this point.

        const properties: ScrapedClassProperty[] = [];
        for (const { name: propName, detailUrl } of sections.propertyLinks) {
            if (!detailUrl) {
                properties.push({ name: propName, typeText: 'any', description: '', readonly: false, deprecated: false });
                continue;
            }
            try {
                const propData = await this.scrapePropertyPage(page, detailUrl);
                if (propData) properties.push({ name: propName, ...propData });
            } catch (err) {
                console.warn(`    Failed property page ${detailUrl}: ${err}`);
                properties.push({ name: propName, typeText: 'any', description: '', readonly: false, deprecated: false });
            }
        }

        const methods: ScrapedMethod[] = [];
        for (const link of sections.methods) {
            try {
                const m = await this.scrapeMethodPage(page, link);
                if (m) methods.push({ ...m, className: name });
            } catch (err) {
                console.warn(`    Failed method page ${link}: ${err}`);
            }
        }

        const cls: ScrapedClass = {
            name, description, methods, properties, sourceUrl: url, deprecated, isClass, constructorParams,
            isEnum,
            enumMembers: isEnum ? sections.enumMembers : undefined,
            parentName,
        };
        return { cls, linkedObjectUrls: sections.linkedTypeUrls, events };
    }

    // ─── Section discovery ──────────────────────────────────────────────────

    /**
     * Finds section tables by scanning for headings that contain known keywords.
     * Returns CSS selectors or null for sections that don't exist on this page.
     */
    private async findSections(page: Page): Promise<{
        methods: string[];
        propertyLinks: Array<{ name: string; detailUrl: string | null }>;
        eventsTableSelector: string | null;
        linkedTypeUrls: string[];
        enumMembers: Array<{ name: string; description: string }>;
    }> {
        return page.evaluate(() => {
            const result = {
                methods: [] as string[],
                propertyLinks: [] as Array<{ name: string; detailUrl: string | null }>,
                eventsTableSelector: null as string | null,
                linkedTypeUrls: [] as string[],
                enumMembers: [] as Array<{ name: string; description: string }>,
            };

            // Known suffixes that mark a top-level type page (not a method/property sub-page)
            const TYPE_SUFFIXES = new Set(['object', 'enumeration', 'function', 'property']);

            function tableHeaderType(table: Element): 'methods' | 'properties' | 'events' | 'enumerations' | null {
                const firstRow = table.querySelector('tr');
                if (!firstRow) return null;
                const text = (firstRow.textContent ?? '').toLowerCase();
                if (text.includes('method')) return 'methods';
                if (text.includes('propert')) return 'properties';
                if (text.includes('event')) return 'events';
                if (text.includes('enumeration')) return 'enumerations';
                return null;
            }

            // Method links: has 5+ dot-parts and the second-to-last part is NOT a known type suffix
            function isMethodLink(href: string): boolean {
                const filename = href.replace(/^.*\//, '');
                const parts = filename.split('.');
                return parts.length >= 5 && !TYPE_SUFFIXES.has(parts[parts.length - 2]);
            }

            // Type-page links: second-to-last part IS a known type suffix
            function isTypePage(href: string): boolean {
                const filename = href.replace(/^.*\//, '');
                const parts = filename.split('.');
                return parts.length >= 4 && TYPE_SUFFIXES.has(parts[parts.length - 2]);
            }

            // Events still use a DOM-selector approach (parseEventsSection uses it)
            function markTable(table: Element, section: string): string {
                (table as HTMLElement).dataset['scraperSection'] = section;
                return `table[data-scraper-section="${section}"]`;
            }

            function extractMethodLinks(table: Element): string[] {
                return Array.from(table.querySelectorAll('td:first-child a[href]'))
                    .map((a) => (a as HTMLAnchorElement).href)
                    .filter(isMethodLink);
            }

            // Extract property links directly from the table: each row gives a name and
            // an optional detail-page URL from the first cell's <a> element.
            // Rows marked "(Inherited from …)" are skipped — they belong to the parent class.
            function extractPropertyLinks(table: Element): Array<{ name: string; detailUrl: string | null }> {
                const links: Array<{ name: string; detailUrl: string | null }> = [];
                for (const row of Array.from(table.querySelectorAll('tr')).slice(1)) {
                    const rowText = (row.textContent ?? '').toLowerCase();
                    if (rowText.includes('inherited from')) continue;
                    const firstCell = row.querySelector('td:first-child');
                    if (!firstCell) continue;
                    const anchor = firstCell.querySelector('a[href]') as HTMLAnchorElement | null;
                    const name = (firstCell.textContent ?? '').replace(/​/g, '').trim();
                    if (name) links.push({ name, detailUrl: anchor?.href ?? null });
                }
                return links;
            }

            // Extract all type-page links from a table (e.g. Enumerations section)
            function extractTypePageLinks(table: Element): string[] {
                return Array.from(table.querySelectorAll('a[href]'))
                    .map((a) => (a as HTMLAnchorElement).href)
                    .filter(isTypePage);
            }

            // Extract enum member names and descriptions from a Members table
            function extractEnumMembers(table: Element): Array<{ name: string; description: string }> {
                const members: Array<{ name: string; description: string }> = [];
                for (const row of Array.from(table.querySelectorAll('tr')).slice(1)) {
                    const cells = Array.from(row.querySelectorAll('td'));
                    if (cells.length < 1) continue;
                    const name = (cells[0].textContent ?? '').replace(/​/g, '').trim();
                    const description = cells.length > 1
                        ? (cells[cells.length - 1].textContent ?? '').replace(/​/g, '').trim()
                        : '';
                    if (name) members.push({ name, description });
                }
                return members;
            }

            // Pass 1: heading-based detection
            for (const heading of Array.from(document.querySelectorAll('h2, h3, h4'))) {
                const text = (heading.textContent ?? '').toLowerCase().trim();
                let next: Element | null = heading.nextElementSibling;
                let tries = 0;
                while (next && next.tagName !== 'TABLE' && tries < 3) {
                    next = next.nextElementSibling;
                    tries++;
                }
                if (!next || next.tagName !== 'TABLE') continue;

                if (text.includes('method') && result.methods.length === 0) {
                    result.methods = extractMethodLinks(next);
                } else if (text.includes('propert') && result.propertyLinks.length === 0) {
                    result.propertyLinks = extractPropertyLinks(next);
                } else if (text.includes('event') && result.eventsTableSelector === null) {
                    result.eventsTableSelector = markTable(next, 'events');
                } else if (text.includes('enumeration')) {
                    result.linkedTypeUrls.push(...extractTypePageLinks(next));
                } else if (text.includes('member') && !text.includes('method') && !text.includes('parameter') && result.enumMembers.length === 0) {
                    result.enumMembers = extractEnumMembers(next);
                }
            }

            // Pass 2: table-header fallback
            if (result.methods.length === 0 || result.propertyLinks.length === 0 || result.eventsTableSelector === null) {
                for (const table of Array.from(document.querySelectorAll('table'))) {
                    if ((table as HTMLElement).dataset['scraperSection']) continue;
                    const type = tableHeaderType(table);
                    if (type === 'methods' && result.methods.length === 0) {
                        result.methods = extractMethodLinks(table);
                    } else if (type === 'properties' && result.propertyLinks.length === 0) {
                        result.propertyLinks = extractPropertyLinks(table);
                    } else if (type === 'events' && result.eventsTableSelector === null) {
                        result.eventsTableSelector = markTable(table, 'events');
                    } else if (type === 'enumerations' && result.linkedTypeUrls.length === 0) {
                        result.linkedTypeUrls.push(...extractTypePageLinks(table));
                    }
                }
            }

            return result;
        });
    }

    // ─── Events ─────────────────────────────────────────────────────────────

    private async parseEventsSection(
        page: Page,
        selector: string | null,
        sourceUrl: string,
    ): Promise<ScrapedEvent[]> {
        if (!selector) return [];

        return page.evaluate(
            ({ sel, url }) => {
                const table = document.querySelector(sel);
                if (!table) return [];

                const events: Array<{
                    name: string;
                    callbackType: string;
                    description: string;
                    deprecated: boolean;
                    sourceUrl: string;
                }> = [];

                const rows = Array.from(table.querySelectorAll('tr')).slice(1);
                for (const row of rows) {
                    const cells = Array.from(row.querySelectorAll('td'));
                    if (cells.length < 1) continue;

                    const nameCell = cells[0];
                    // Callback type may be in column 1 or 2 depending on layout
                    const callbackCell = cells[1];
                    const descCell = cells[cells.length - 1];

                    const name = nameCell.textContent?.replace(/​/g, '').trim() ?? '';
                    // Extract callback type: prefer link text, fall back to cell text
                    const callbackType = (callbackCell?.querySelector('a')?.textContent ??
                        callbackCell?.textContent ?? '')
                        .replace(/​/g, '').trim();
                    const description = descCell?.textContent?.replace(/​/g, '').trim() ?? '';
                    const rowText = row.textContent?.toLowerCase() ?? '';
                    const deprecated = rowText.includes('obsolete') || rowText.includes('deprecated');

                    if (name) {
                        events.push({ name, callbackType: callbackType || 'EventCallback', description, deprecated, sourceUrl: url });
                    }
                }

                return events;
            },
            { sel: selector, url: sourceUrl },
        );
    }

    // ─── Method page ────────────────────────────────────────────────────────

    private async scrapeMethodPage(page: Page, url: string): Promise<Omit<ScrapedMethod, 'className'> | null> {
        await withRetry(() => page.goto(url, { waitUntil: 'networkidle' }));

        const rawH1 = await page.$eval('h1', (el) => el.textContent?.trim() ?? '').catch(() => '');
        const name = rawH1.replace(/​/g, '').replace(/\s+(Method|Property|Event)$/i, '').trim();
        if (!name) return null;

        const rawSig = await page.$eval('pre', (el) => el.textContent?.trim() ?? '').catch(() => '');
        const sig = rawSig.replace(/​/g, '').trim();

        const paramsMatch = sig.match(/\(([^]*)\)$/);
        const rawParams = paramsMatch ? paramsMatch[1].trim() : '';

        const description = await page
            .$eval('p', (el) => el.textContent?.replace(/​/g, '').trim() ?? '')
            .catch(() => '');

        const bodyText = await page
            .$eval('body', (el) => el.textContent?.toLowerCase() ?? '')
            .catch(() => '');
        const deprecated = bodyText.includes('obsolete') || bodyText.includes('deprecated');

        return { name, rawParams, description, sourceUrl: url, deprecated };
    }

    // ─── Property page ───────────────────────────────────────────────────────

    private async scrapePropertyPage(
        page: Page,
        url: string,
    ): Promise<Omit<ScrapedClassProperty, 'name'> | null> {
        await withRetry(() => page.goto(url, { waitUntil: 'networkidle' }));

        return page.evaluate(() => {
            const zws = /​/g; // zero-width space

            // Syntax line: "<TypeName> ClassName.propertyName"
            const sig = (document.querySelector('pre')?.textContent ?? '').replace(zws, '').trim();
            const typeMatch = sig.match(/^<([^>]+)>/);
            const typeText = typeMatch ? typeMatch[1].trim() : 'any';

            const description = (document.querySelector('p')?.textContent ?? '').replace(zws, '').trim();

            // "Read Only." appears in the Limitations section
            const limHeading = Array.from(document.querySelectorAll('h2, h3, h4'))
                .find(h => (h.textContent ?? '').toLowerCase().includes('limitation'));
            const limText = (limHeading?.nextElementSibling?.textContent ?? '').toLowerCase();
            const readonly = limText.includes('read only') || limText.includes('read-only') || limText.includes('readonly');

            const bodyText = (document.body.textContent ?? '').toLowerCase();
            const deprecated = bodyText.includes('obsolete') || bodyText.includes('deprecated');

            return { typeText, description, readonly, deprecated };
        });
    }

    // ─── Constructor detection ───────────────────────────────────────────────

    /**
     * Detects whether a page has a Constructor section (making the type a constructable class).
     * Looks for headings containing "constructor" or a <pre> code block that includes "new ClassName".
     */
    private async parseConstructorSection(page: Page): Promise<{ isClass: boolean; constructorParams?: string }> {
        return page.evaluate(() => {
            // Check headings for "Constructor" or "Syntax"
            const headings = Array.from(document.querySelectorAll('h2, h3, h4'));
            for (const heading of headings) {
                const text = heading.textContent?.toLowerCase().trim() ?? '';
                if (!text.includes('constructor') && !text.includes('syntax')) continue;

                // Look for a <pre> sibling with a "new " call
                let next: Element | null = heading.nextElementSibling;
                let tries = 0;
                while (next && next.tagName !== 'PRE' && tries < 3) {
                    next = next.nextElementSibling;
                    tries++;
                }
                if (next && next.tagName === 'PRE') {
                    const sig = next.textContent?.replace(/​/g, '').trim() ?? '';
                    const newMatch = sig.match(/new\s+\w+\s*\(([^]*)\)/);
                    if (newMatch) {
                        return { isClass: true, constructorParams: newMatch[1].trim() };
                    }
                }
                // Heading found but no parseable params
                return { isClass: true };
            }

            // Fallback: check any <pre> on the page for "new ClassName(" pattern
            const pres = Array.from(document.querySelectorAll('pre'));
            for (const pre of pres) {
                const text = pre.textContent?.replace(/​/g, '').trim() ?? '';
                if (/^\s*new\s+\w/.test(text)) {
                    const newMatch = text.match(/new\s+\w+\s*\(([^]*)\)/);
                    return { isClass: true, constructorParams: newMatch ? newMatch[1].trim() : undefined };
                }
            }

            return { isClass: false };
        });
    }

    // ─── Helpers ────────────────────────────────────────────────────────────

    private async parseClassName(page: Page): Promise<string> {
        const rawH1 = await page.$eval('h1', (el) => el.textContent?.trim() ?? '').catch(() => '');
        const name = rawH1
            .replace(/​/g, '')
            .replace(/\s+(Object|Class|Collection|Enumeration|Function)$/i, '')
            .replace(/^TXTextControl\./, '')
            .trim();
        // Names with spaces are navigation pages (e.g. "JavaScript API"), not API types
        return /\s/.test(name) ? '' : name;
    }

    private async isPageDeprecated(page: Page): Promise<boolean> {
        const bodyText = await page
            .$eval('body', (el) => el.textContent?.toLowerCase() ?? '')
            .catch(() => '');
        return bodyText.includes('obsolete') || bodyText.includes('deprecated');
    }
}
