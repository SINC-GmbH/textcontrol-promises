import { chromium, Browser, Page } from 'playwright';
import { ScrapedClass, ScrapedMethod, ScrapedClassProperty, ScrapedEvent } from './types';

const SEED_URL =
    'https://docs.textcontrol.com/textcontrol/asp-dotnet/ref.javascript.txtextcontrol.object.htm';

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

    async scrapeAll(): Promise<{ classes: ScrapedClass[]; events: ScrapedEvent[] }> {
        if (!this.browser) throw new Error('Call launch() before scrapeAll()');

        const page = await this.browser.newPage();
        const classes: ScrapedClass[] = [];
        let allEvents: ScrapedEvent[] = [];

        const visited = new Set<string>();
        const queue: string[] = [SEED_URL];

        while (queue.length > 0) {
            const url = queue.shift()!;
            if (visited.has(url)) continue;
            visited.add(url);

            console.log(`  Scraping class page: ${url}`);
            try {
                const result = await this.scrapeClassPage(page, url);
                if (result) {
                    classes.push(result.cls);
                    if (result.events.length > 0) {
                        allEvents = result.events;
                    }
                    for (const objUrl of result.linkedObjectUrls) {
                        if (!visited.has(objUrl)) queue.push(objUrl);
                    }
                }
            } catch (err) {
                console.warn(`  Failed to scrape ${url}: ${err}`);
            }
        }

        await page.close();
        return { classes, events: allEvents };
    }

    // ─── Single-class page ──────────────────────────────────────────────────

    private async scrapeClassPage(page: Page, url: string): Promise<ScrapeClassPageResult | null> {
        await page.goto(url, { waitUntil: 'networkidle' });

        const name = await this.parseClassName(page);
        if (!name) return null;

        const description = await page
            .$eval('p', (el) => el.textContent?.replace(/​/g, '').trim() ?? '')
            .catch(() => '');

        const deprecated = await this.isPageDeprecated(page);

        const sections = await this.findSections(page);

        // Collect method links from the Methods section
        const methodLinks = sections.methods;
        const methods: ScrapedMethod[] = [];
        for (const link of methodLinks) {
            try {
                const m = await this.scrapeMethodPage(page, link);
                if (m) methods.push({ ...m, className: name });
            } catch (err) {
                console.warn(`    Failed method page ${link}: ${err}`);
            }
        }

        // Parse properties inline from the Properties section table
        const { properties, linkedObjectUrls } = await this.parsePropertiesSection(page, sections.propertiesTableSelector);

        // Parse events inline from the Events section (only present on seed page)
        const events = await this.parseEventsSection(page, sections.eventsTableSelector, url);

        const cls: ScrapedClass = { name, description, methods, properties, sourceUrl: url, deprecated };
        return { cls, linkedObjectUrls, events };
    }

    // ─── Section discovery ──────────────────────────────────────────────────

    /**
     * Finds section tables by scanning for headings that contain known keywords.
     * Returns CSS selectors or null for sections that don't exist on this page.
     */
    private async findSections(page: Page): Promise<{
        methods: string[];
        propertiesTableSelector: string | null;
        eventsTableSelector: string | null;
    }> {
        return page.evaluate(() => {
            const result = {
                methods: [] as string[],
                propertiesTableSelector: null as string | null,
                eventsTableSelector: null as string | null,
            };

            // Walk all headings and find their nearest following sibling table
            const headings = Array.from(document.querySelectorAll('h2, h3, h4'));
            for (const heading of headings) {
                const text = heading.textContent?.toLowerCase().trim() ?? '';
                let next: Element | null = heading.nextElementSibling;
                // Skip non-table siblings (e.g. <p> intro text) up to 3 elements
                let tries = 0;
                while (next && next.tagName !== 'TABLE' && tries < 3) {
                    next = next.nextElementSibling;
                    tries++;
                }
                if (!next || next.tagName !== 'TABLE') continue;

                if (text.includes('method')) {
                    // Collect all links from the first column of the methods table
                    const links = Array.from(next.querySelectorAll('td:first-child a[href]')).map(
                        (a) => (a as HTMLAnchorElement).href,
                    );
                    result.methods = links;
                } else if (text.includes('propert')) {
                    // Mark with a data attribute so we can find it after evaluate()
                    (next as HTMLElement).dataset['scraperSection'] = 'properties';
                    result.propertiesTableSelector = 'table[data-scraper-section="properties"]';
                } else if (text.includes('event')) {
                    (next as HTMLElement).dataset['scraperSection'] = 'events';
                    result.eventsTableSelector = 'table[data-scraper-section="events"]';
                }
            }

            // Fallback: if no heading-based detection worked, try positional (original logic).
            // This preserves behaviour for the TXTextControl main page.
            if (result.methods.length === 0 && result.propertiesTableSelector === null) {
                const tables = document.querySelectorAll('table');
                if (tables[1]) {
                    result.methods = Array.from(
                        tables[1].querySelectorAll('td:first-child a[href]'),
                    ).map((a) => (a as HTMLAnchorElement).href);
                }
                if (tables[2]) {
                    (tables[2] as HTMLElement).dataset['scraperSection'] = 'properties';
                    result.propertiesTableSelector = 'table[data-scraper-section="properties"]';
                }
                if (tables[3]) {
                    (tables[3] as HTMLElement).dataset['scraperSection'] = 'events';
                    result.eventsTableSelector = 'table[data-scraper-section="events"]';
                }
            }

            return result;
        });
    }

    // ─── Properties ─────────────────────────────────────────────────────────

    private async parsePropertiesSection(
        page: Page,
        selector: string | null,
    ): Promise<{ properties: ScrapedClassProperty[]; linkedObjectUrls: string[] }> {
        if (!selector) return { properties: [], linkedObjectUrls: [] };

        return page.evaluate((sel) => {
            const table = document.querySelector(sel);
            if (!table) return { properties: [], linkedObjectUrls: [] };

            const properties: Array<{
                name: string;
                typeText: string;
                description: string;
                readonly: boolean;
                deprecated: boolean;
                typePageUrl?: string;
            }> = [];
            const linkedObjectUrls: string[] = [];

            const rows = Array.from(table.querySelectorAll('tr')).slice(1); // skip header row
            for (const row of rows) {
                const cells = Array.from(row.querySelectorAll('td'));
                if (cells.length < 2) continue;

                const nameCell = cells[0];
                const typeCell = cells[1];
                const descCell = cells[2];

                const name = nameCell.textContent?.replace(/​/g, '').trim() ?? '';
                const typeLink = typeCell.querySelector('a[href]') as HTMLAnchorElement | null;
                const typeText = typeCell.textContent?.replace(/​/g, '').trim() ?? 'any';
                const typePageUrl = typeLink?.href;
                const description = descCell?.textContent?.replace(/​/g, '').trim() ?? '';

                const rowText = row.textContent?.toLowerCase() ?? '';
                const deprecated = rowText.includes('obsolete') || rowText.includes('deprecated');
                // Infer read-only from description (heuristic)
                const readonly = description.toLowerCase().includes('read-only') ||
                    description.toLowerCase().includes('readonly') ||
                    description.toLowerCase().includes('gets ') && !description.toLowerCase().includes('sets ');

                if (name) {
                    properties.push({ name, typeText, description, readonly, deprecated, typePageUrl });
                    if (typePageUrl && typePageUrl.endsWith('.object.htm')) {
                        linkedObjectUrls.push(typePageUrl);
                    }
                }
            }

            return { properties, linkedObjectUrls };
        }, selector);
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
        await page.goto(url, { waitUntil: 'networkidle' });

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

    // ─── Helpers ────────────────────────────────────────────────────────────

    private async parseClassName(page: Page): Promise<string> {
        const rawH1 = await page.$eval('h1', (el) => el.textContent?.trim() ?? '').catch(() => '');
        return rawH1.replace(/​/g, '').replace(/\s+(Object|Class|Collection)$/i, '').trim();
    }

    private async isPageDeprecated(page: Page): Promise<boolean> {
        const bodyText = await page
            .$eval('body', (el) => el.textContent?.toLowerCase() ?? '')
            .catch(() => '');
        return bodyText.includes('obsolete') || bodyText.includes('deprecated');
    }
}
