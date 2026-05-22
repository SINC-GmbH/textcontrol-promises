import { chromium, Browser, Page } from 'playwright';
import { ScrapedMethod } from './types';

const TXTEXTCONTROL_OBJECT_URL =
    'https://docs.textcontrol.com/textcontrol/asp-dotnet/ref.javascript.txtextcontrol.object.htm';

/**
 * Crawls the TX TextControl JS API documentation and extracts all TXTextControl
 * method signatures and descriptions from the TXTextControl Object reference page.
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

        // Step 1: Load the TXTextControl Object page and collect method links from the Methods table
        await page.goto(TXTEXTCONTROL_OBJECT_URL, { waitUntil: 'networkidle' });
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
        // The TXTextControl Object page has 3 tables: Enumerations, Methods, Properties.
        // Each table is in its own <section>, so nth-of-type doesn't work across sections.
        // We select the second table by index (index 1 = Methods).
        return page.evaluate(() => {
            const tables = document.querySelectorAll('table');
            const methodTable = tables[1];
            if (!methodTable) return [];
            return Array.from(methodTable.querySelectorAll('td:first-child a[href]')).map(
                (a) => (a as HTMLAnchorElement).href,
            );
        });
    }

    private async scrapeMethodPage(page: Page, url: string): Promise<ScrapedMethod | null> {
        await page.goto(url, { waitUntil: 'networkidle' });

        // Method name is in H1, e.g. "beginUndoAction Method" → strip " Method" suffix
        const rawH1 = await page.$eval('h1', (el) => el.textContent?.trim() ?? '').catch(() => '');
        // Strip zero-width space (U+200B) and " Method" / " Property" suffix
        const name = rawH1.replace(/​/g, '').replace(/\s+(Method|Property)$/, '').trim();
        if (!name) return null;

        // Signature is in the first <pre> element:
        // "​<void> TXTextControl.beginUndoAction(<string> actionName, [<EmptyRequestCallback> callback], [<ErrorCallback> errorCallback])"
        const rawSig = await page.$eval('pre', (el) => el.textContent?.trim() ?? '').catch(() => '');
        const sig = rawSig.replace(/​/g, '').trim();

        // Extract just the params portion: everything between the first '(' and last ')'
        const paramsMatch = sig.match(/\(([^]*)\)$/);
        const rawParams = paramsMatch ? paramsMatch[1].trim() : '';

        // First <p> is the method description
        const description = await page.$eval('p', (el) => el.textContent?.replace(/​/g, '').trim() ?? '').catch(() => '');

        // Check for deprecation/obsolescence
        const bodyText = await page.$eval('body', (el) => el.textContent?.toLowerCase() ?? '').catch(() => '');
        const deprecated = bodyText.includes('obsolete') || bodyText.includes('deprecated');

        return { name, rawParams, description, sourceUrl: url, deprecated };
    }
}
