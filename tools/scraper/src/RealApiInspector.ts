import * as fs from 'fs';
import * as path from 'path';
import { chromium } from 'playwright';
import { RealMethod, DeclaredMethod, DiffEntry } from './types';

const DEFAULT_DEMO_URL = 'http://localhost:8080';
const INIT_TIMEOUT_MS = 30_000;

// ─── Extended tree types ──────────────────────────────────────────────────────

export interface RealApiEntry {
    /** Full dotted path, e.g. "tables.add" or "append" */
    path: string;
    /** Leaf name, e.g. "add" */
    name: string;
    /** Sub-object key on TXTextControl, or "" for root-level */
    objectPath: string;
    kind: 'function' | 'property' | 'object';
}

export interface RealApiTreeReport {
    entries: RealApiEntry[];
    /** Names of direct sub-objects on TXTextControl (e.g. ["tables","selection",...]) */
    subObjects: string[];
}

export interface RealCrossCheckReport {
    /** Functions present in the real API but declared in no d.ts file */
    missingFromDts: RealApiEntry[];
    /** Total real functions checked */
    totalFunctions: number;
}

// ─── Inspector ────────────────────────────────────────────────────────────────

/**
 * Navigates to the running TX TextControl demo app via Playwright (headless Chrome),
 * waits for TXTextControl to fully initialize, and enumerates all methods/properties
 * on TXTextControl and its sub-objects recursively.
 *
 * Requires the demo app to be running: cd demo && npx live-server --port=8080
 */
export class RealApiInspector {
    constructor(private readonly demoUrl: string = DEFAULT_DEMO_URL) {}

    // ── New: recursive tree walk ──────────────────────────────────────────────

    async fetchAndInspectTree(): Promise<RealApiTreeReport> {
        console.log(`Connecting to demo at: ${this.demoUrl}`);
        const browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();

        try {
            await page.goto(this.demoUrl, { waitUntil: 'networkidle' });

            await page.waitForFunction(
                () => {
                    const tx = (window as unknown as Record<string, unknown>)['TXTextControl'];
                    if (!tx || typeof tx !== 'object') return false;
                    return Object.keys(tx as object).length > 20;
                },
                { timeout: INIT_TIMEOUT_MS },
            );

            // Run in-browser: recursively walk TXTextControl and all sub-objects.
            // Uses prototype-chain traversal so methods defined on a class prototype
            // are also captured.
            const treeData = await page.evaluate((): { entries: RealApiEntry[]; subObjects: string[] } => {
                const tx = (window as unknown as Record<string, unknown>)['TXTextControl'];
                if (!tx || typeof tx !== 'object') return { entries: [], subObjects: [] };

                const entries: RealApiEntry[] = [];
                const subObjects: string[] = [];
                const visitedObjs = new WeakSet<object>();

                function collectKeys(obj: object): string[] {
                    const keys = new Set<string>();
                    let proto: object | null = obj;
                    let protoDepth = 0;
                    while (proto && proto !== Object.prototype && protoDepth < 5) {
                        for (const k of Object.getOwnPropertyNames(proto)) keys.add(k);
                        proto = Object.getPrototypeOf(proto) as object | null;
                        protoDepth++;
                    }
                    return [...keys];
                }

                // No hard depth limit — WeakSet prevents cycles. Every reachable
                // sub-object in the static tree will be visited exactly once.
                function walk(obj: object, objectPath: string, isRoot: boolean): void {
                    if (visitedObjs.has(obj)) return;
                    visitedObjs.add(obj);

                    for (const key of collectKeys(obj)) {
                        if (key.startsWith('_') || key === 'constructor') continue;
                        let val: unknown;
                        try { val = (obj as Record<string, unknown>)[key]; } catch { continue; }

                        const fullPath = objectPath ? `${objectPath}.${key}` : key;

                        if (typeof val === 'function') {
                            entries.push({ path: fullPath, name: key, objectPath, kind: 'function' });
                        } else if (val !== null && val !== undefined && typeof val === 'object' && !Array.isArray(val)) {
                            entries.push({ path: fullPath, name: key, objectPath, kind: 'object' });
                            if (isRoot) subObjects.push(key);
                            walk(val as object, fullPath, false);
                        } else if (val !== undefined) {
                            entries.push({ path: fullPath, name: key, objectPath, kind: 'property' });
                        }
                    }
                }

                walk(tx as object, '', true);
                return { entries, subObjects };
            });

            return {
                entries: treeData.entries as RealApiEntry[],
                subObjects: treeData.subObjects,
            };
        } finally {
            await browser.close();
        }
    }

    // ── Cross-check against all d.ts files ───────────────────────────────────

    /**
     * Checks every real API function against all d.ts files in the given dirs.
     * Returns functions present at runtime but declared in none of the type files.
     */
    static crossCheckAll(
        report: RealApiTreeReport,
        ...searchDirs: string[]
    ): RealCrossCheckReport {
        // Collect all declared identifiers from all d.ts files in searchDirs.
        // Four patterns are checked so that all declaration forms are covered:
        //
        //   1. Interface/class method:  `  methodName<T>(` (indented, with optional generics)
        //   2. Top-level export fn:     `export function methodName(`
        //   3. Top-level export const:  `export const name` (covers sub-objects like `selection`)
        //   4. Exported class/interface:`export class ClassName` / `export interface IfaceName`
        //      (covers constructor names like ApplicationField, IfField, IncludeTextField)
        //   5. Exported namespace/enum: `export namespace Name` / `export enum Name`
        //      (covers Color and other enum-namespace types)
        //
        // Pattern 1 is the same as parseMethodsFromContent in Differ.ts.
        // Patterns 2–5 cover top-level declarations missed by pattern 1.
        const allDeclaredNames = new Set<string>();

        // Also scan the flat TXTextControl.d.ts which lives one level above the search dirs
        const scanFiles: string[] = [];
        for (const dir of searchDirs) {
            if (!dir || !fs.existsSync(dir)) continue;
            for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.d.ts'))) {
                scanFiles.push(path.join(dir, file));
            }
        }
        // Include the flat TXTextControl.d.ts (parent of the first searchDir)
        if (searchDirs.length > 0 && searchDirs[0] && fs.existsSync(searchDirs[0])) {
            const parentDir = path.dirname(searchDirs[0]);
            for (const f of fs.readdirSync(parentDir).filter(f => f.endsWith('.d.ts'))) {
                scanFiles.push(path.join(parentDir, f));
            }
        }

        for (const filePath of scanFiles) {
            const content = fs.readFileSync(filePath, 'utf-8');

            const patterns = [
                // 1. Indented interface/class methods (same as parseMethodsFromContent)
                /^\s+(?:\/\*\*[\s\S]*?\*\/\s*)?(\w+)(?:<[^>]+>)?\s*\(/gm,
                // 2. Top-level export function
                /^export\s+(?:async\s+)?function\s+(\w+)/gm,
                // 3. Top-level export const / let / var
                /^export\s+(?:const|let|var)\s+(\w+)/gm,
                // 4. Exported class / abstract class / interface
                /^export\s+(?:abstract\s+)?(?:class|interface)\s+(\w+)/gm,
                // 5. Exported namespace / enum / type alias
                /^export\s+(?:namespace|enum|type)\s+(\w+)/gm,
            ];

            for (const re of patterns) {
                let m: RegExpExecArray | null;
                while ((m = re.exec(content)) !== null) {
                    allDeclaredNames.add(m[1]);
                }
            }
        }

        const functions = report.entries.filter(e => e.kind === 'function');
        const missingFromDts = functions.filter(e => !allDeclaredNames.has(e.name));

        return { missingFromDts, totalFunctions: functions.length };
    }

    static printTreeReport(treeReport: RealApiTreeReport, crossCheck: RealCrossCheckReport): void {
        const C = {
            reset: '\x1b[0m', green: '\x1b[32m', yellow: '\x1b[33m',
            red: '\x1b[31m', cyan: '\x1b[36m',
        };

        console.log('\n' + '='.repeat(70));
        console.log('REAL API INSPECTION REPORT');
        console.log('='.repeat(70));

        const functions = treeReport.entries.filter(e => e.kind === 'function');
        const byPath = new Map<string, string[]>();
        for (const e of functions) {
            const list = byPath.get(e.objectPath) ?? [];
            list.push(e.name);
            byPath.set(e.objectPath, list);
        }

        console.log(`\nSub-objects on TXTextControl (${treeReport.subObjects.length}):`);
        console.log(`  ${treeReport.subObjects.join(', ')}`);

        console.log('\nFunction counts per object path:');
        const rootFns = byPath.get('') ?? [];
        console.log(`  TXTextControl (root) : ${rootFns.length} functions`);
        for (const [p, fns] of byPath) {
            if (p === '') continue;
            console.log(`  TXTextControl.${p.padEnd(30)} : ${fns.length} functions`);
        }

        console.log(`\nTotal real API functions: ${crossCheck.totalFunctions}`);

        if (crossCheck.missingFromDts.length === 0) {
            console.log(`\n${C.green}✓ All real API functions are declared somewhere in d.ts files${C.reset}`);
        } else {
            console.log(`\n${C.yellow}Functions in real API but missing from ALL d.ts files (${crossCheck.missingFromDts.length}):${C.reset}`);
            // Group by object path for readability
            const grouped = new Map<string, string[]>();
            for (const e of crossCheck.missingFromDts) {
                const label = e.objectPath ? `TXTextControl.${e.objectPath}` : 'TXTextControl';
                const list = grouped.get(label) ?? [];
                list.push(e.name);
                grouped.set(label, list);
            }
            for (const [label, names] of grouped) {
                console.log(`\n  ${C.cyan}${label}${C.reset}`);
                for (const n of names) console.log(`    ${C.yellow}+ ${n}${C.reset}`);
            }
        }

        console.log('\n' + '-'.repeat(70));
    }

    // ── Legacy: flat root-level inspect (kept for backward compat) ────────────

    /** @deprecated Use fetchAndInspectTree() for full coverage */
    async fetchAndInspect(): Promise<RealMethod[]> {
        console.log(`Connecting to demo at: ${this.demoUrl}`);
        const browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();

        try {
            await page.goto(this.demoUrl, { waitUntil: 'networkidle' });

            await page.waitForFunction(
                () => {
                    const tx = (window as unknown as Record<string, unknown>)['TXTextControl'];
                    if (!tx || typeof tx !== 'object') return false;
                    return Object.keys(tx as object).length > 20;
                },
                { timeout: INIT_TIMEOUT_MS },
            );

            return page.evaluate((): RealMethod[] => {
                const tx = (window as unknown as Record<string, unknown>)['TXTextControl'];
                if (!tx || typeof tx !== 'object') return [];
                const results: RealMethod[] = [];
                for (const key of Object.keys(tx as object)) {
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
        } finally {
            await browser.close();
        }
    }

    /** @deprecated Use crossCheckAll() for full coverage */
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
