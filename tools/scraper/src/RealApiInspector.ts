import * as https from 'https';
import * as vm from 'vm';
import { RealMethod, DeclaredMethod, DiffEntry } from './types';

/**
 * Fetches the minified TX TextControl JS file, executes it in a Node.js VM
 * sandbox, and enumerates all properties/methods on the resulting TXTextControl
 * global object.
 *
 * This lets us cross-check the real API against what is declared in the d.ts.
 */
export class RealApiInspector {
    constructor(private readonly txJsUrl: string) {}

    async fetchAndInspect(): Promise<RealMethod[]> {
        console.log(`Fetching: ${this.txJsUrl}`);
        const js = await this.fetchJs(this.txJsUrl);
        return this.inspectInSandbox(js);
    }

    private fetchJs(url: string): Promise<string> {
        return new Promise((resolve, reject) => {
            https.get(url, res => {
                if (res.statusCode !== 200) {
                    reject(new Error(`HTTP ${res.statusCode} for ${url}`));
                    return;
                }
                const chunks: Buffer[] = [];
                res.on('data', c => chunks.push(c));
                res.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
                res.on('error', reject);
            }).on('error', reject);
        });
    }

    private inspectInSandbox(js: string): RealMethod[] {
        // The TX JS expects a browser environment. We provide minimal stubs so
        // the module-level setup code doesn't throw, then enumerate the object.
        const sandbox: Record<string, unknown> = {
            window: {},
            document: { createElement: () => ({ style: {} }), getElementById: () => null },
            navigator: { userAgent: '' },
            TXTextControl: {},
        };
        sandbox['window'] = sandbox; // self-reference like a browser window

        try {
            vm.runInNewContext(js, sandbox, { timeout: 10_000 });
        } catch {
            // Many TX versions throw during init because WebSocket / DOM is missing.
            // That is expected; TXTextControl may still be partially populated.
        }

        const tx = sandbox['TXTextControl'];
        if (!tx || typeof tx !== 'object') {
            throw new Error('TXTextControl was not defined after running the JS. The sandbox may need additional browser stubs.');
        }

        return this.enumerateMethods(tx as Record<string, unknown>);
    }

    private enumerateMethods(obj: Record<string, unknown>, prefix = ''): RealMethod[] {
        const results: RealMethod[] = [];
        for (const key of Object.getOwnPropertyNames(obj)) {
            if (key.startsWith('_') || key === 'prototype') continue;
            const val = obj[key];
            const name = prefix ? `${prefix}.${key}` : key;
            if (typeof val === 'function') {
                results.push({ name, kind: 'function' });
            } else if (val && typeof val === 'object') {
                results.push({ name, kind: 'object' });
                // Recurse one level for sub-objects (collections, enums)
                if (!prefix) {
                    results.push(...this.enumerateMethods(val as Record<string, unknown>, name));
                }
            } else {
                results.push({ name, kind: 'property' });
            }
        }
        return results;
    }

    /** Cross-check real methods against declared d.ts methods, returns gap entries. */
    static crossCheck(real: RealMethod[], declared: DeclaredMethod[]): DiffEntry[] {
        const declaredNames = new Set(declared.map(d => d.name));
        const realFunctions = real.filter(r => r.kind === 'function' && !r.name.includes('.'));

        return realFunctions
            .filter(r => !declaredNames.has(r.name))
            .map(r => ({ name: r.name, kind: 'only-in-real' as const, real: r }));
    }
}
