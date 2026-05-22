import { chromium, Browser, Page } from 'playwright';
import { ScrapedMethod } from './types';

const DOCS_INDEX_URL =
    'https://docs.textcontrol.com/textcontrol/asp-dotnet/ref.javascript.api.htm';

/**
 * Crawls the TX TextControl JS API documentation and extracts all method
 * signatures and descriptions.
 *
 * The docs site renders with JavaScript, so we use Playwright (headless Chrome)
 * rather than a plain HTTP fetch.
 */
export class DocsScraper {
    private browser: Browser | null = null;

    async launch(headless = true): Promise<void> {
        this.browser = await chromium.launch({ headless });
    }

    async close(): Promise<void> {
        await this.browser?.close();
    }

    async scrapeAll(): Promise<ScrapedMethod[]> {
        if (!this.browser) throw new Error('Call launch() before scrapeAll()');

        const page = await this.browser.newPage();
        const methods: ScrapedMethod[] = [];

        // Step 1: Load the index page and collect links to individual method pages
        await page.goto(DOCS_INDEX_URL, { waitUntil: 'networkidle' });
        const methodLinks = await this.collectMethodLinks(page);
        console.log(`Found ${methodLinks.length} method page links`);

        // Step 2: Visit each method page and extract the signature
        for (const link of methodLinks) {
            try {
                const method = await this.scrapeMethodPage(page, link);
                if (method) methods.push(method);
            } catch (err) {
                console.warn(`Failed to scrape ${link}: ${err}`);
            }
        }

        await page.close();
        return methods;
    }

    private async collectMethodLinks(page: Page): Promise<string[]> {
        // TODO: Inspect actual docs site structure to find the correct selectors.
        // The index page likely has a list/tree of method links.
        // Placeholder implementation — adjust selectors after inspecting the real page.
        const links = await page.$$eval('a[href]', (anchors) =>
            anchors
                .map((a) => (a as HTMLAnchorElement).href)
                .filter((href) => href.includes('ref.javascript') && href !== window.location.href),
        );
        return [...new Set(links)];
    }

    private async scrapeMethodPage(page: Page, url: string): Promise<ScrapedMethod | null> {
        await page.goto(url, { waitUntil: 'networkidle' });

        // TODO: Adjust these selectors to match the actual TX docs HTML structure.
        // Common patterns: method name in an <h1>/<h2>, signature in a <pre> or <code>,
        // description in the first <p> after the heading.
        const name = await page.$eval('h1, h2', (el) => el.textContent?.trim() ?? '').catch(() => '');
        const rawParams = await page.$eval('pre, code.signature', (el) => el.textContent?.trim() ?? '').catch(() => '');
        const description = await page.$eval('p', (el) => el.textContent?.trim() ?? '').catch(() => '');
        const deprecated = await page.$eval('*', (el) =>
            el.textContent?.toLowerCase().includes('deprecated') ?? false,
        ).catch(() => false);

        if (!name) return null;

        return { name, rawParams, description, sourceUrl: url, deprecated };
    }
}
