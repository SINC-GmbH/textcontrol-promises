import { chromium } from 'playwright';
import { RealMethod, DeclaredMethod, DiffEntry } from './types';

const DEFAULT_DEMO_URL = 'http://localhost:8080';
const INIT_TIMEOUT_MS = 30_000;

/**
 * Navigates to the running TX TextControl demo app via Playwright (headless Chrome),
 * waits for TXTextControl to fully initialize (WebSocket + all methods populated),
 * and enumerates all methods/properties on the TXTextControl global object.
 *
 * Requires the demo app to be running: cd demo && npx live-server --port=8080
 */
export class RealApiInspector {
    constructor(private readonly demoUrl: string = DEFAULT_DEMO_URL) {}

    async fetchAndInspect(): Promise<RealMethod[]> {
        console.log(`Connecting to demo at: ${this.demoUrl}`);
        const browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();

        try {
            await page.goto(this.demoUrl, { waitUntil: 'networkidle' });

            // Wait for TX to fully initialize — editor div must have non-zero height
            // and TXTextControl must expose more than just the WebSocket layer (init + addEventListener)
            await page.waitForFunction(
                () => {
                    const tx = (window as unknown as Record<string, unknown>)['TXTextControl'];
                    if (!tx || typeof tx !== 'object') return false;
                    const keys = Object.keys(tx as Record<string, unknown>);
                    // The WebSocket-only shell has ~5 keys; full API has 100+
                    return keys.length > 20;
                },
                { timeout: INIT_TIMEOUT_MS },
            );

            const methods = await page.evaluate((): RealMethod[] => {
                const tx = (window as unknown as Record<string, unknown>)['TXTextControl'];
                if (!tx || typeof tx !== 'object') return [];
                const results: RealMethod[] = [];
                for (const key of Object.keys(tx as Record<string, unknown>)) {
                    if (key.startsWith('_')) continue;
                    const val = (tx as Record<string, unknown>)[key];
                    if (typeof val === 'function') {
                        results.push({ name: key, kind: 'function' });
                    } else if (val && typeof val === 'object') {
                        results.push({ name: key, kind: 'object' });
                    } else {
                        results.push({ name: key, kind: 'property' });
                    }
                }
                return results;
            });

            return methods;
        } finally {
            await browser.close();
        }
    }

    /** Cross-check real methods against declared d.ts methods, returns gap entries.
     *  Only checks camelCase names (lowercase first letter) — skips PascalCase
     *  names which are namespace constructors/enums, not callable API methods. */
    static crossCheck(real: RealMethod[], declared: DeclaredMethod[]): DiffEntry[] {
        const declaredNames = new Set(declared.map(d => d.name));
        const realMethods = real.filter(
            r => r.kind === 'function' && /^[a-z]/.test(r.name),
        );

        return realMethods
            .filter(r => !declaredNames.has(r.name))
            .map(r => ({ name: r.name, kind: 'only-in-real' as const, real: r }));
    }
}
