import * as fs from 'fs';
import * as path from 'path';
import {
    ScrapedClass, ScrapedMethod, DeclaredMethod, DeclaredInterface,
    SignatureChange, DeprecationChange,
} from '../types';
import { convertDocsParamsToTs } from '../DtsPatcher';

const C = {
    reset: '\x1b[0m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
    dim: '\x1b[2m',
};

// ─── Signature normalisation ─────────────────────────────────────────────────

interface NormParam { name: string; typeName: string; optional: boolean; }

function isCallbackParam(p: NormParam): boolean {
    return p.name.toLowerCase().includes('callback') ||
           p.typeName.toLowerCase().includes('callback');
}

function normalizeDocsParams(rawParams: string): NormParam[] {
    if (!rawParams.trim()) return [];
    return rawParams.split(',').map(part => {
        const trimmed = part.trim();
        const isOptional = trimmed.startsWith('[') && trimmed.endsWith(']');
        const inner = isOptional ? trimmed.slice(1, -1).trim() : trimmed;
        const m = inner.match(/^(?:<([^>]+)>\s+)?(\w+)$/);
        return { name: m ? m[2] : inner, typeName: m?.[1] ?? '', optional: isOptional };
    });
}

function normalizeDtsParams(dtsParams: string): NormParam[] {
    if (!dtsParams.trim()) return [];
    return dtsParams.split(',').map(part => {
        const trimmed = part.trim();
        const m = trimmed.match(/^(\w+)(\?)?:\s*(.+)$/);
        return { name: m ? m[1] : trimmed, typeName: m ? m[3].trim() : '', optional: !!m?.[2] };
    });
}

function signaturesMatch(docs: string, dts: string): boolean {
    // Filter callbacks first — the d.ts strips callback params (they become the Promise return type).
    // Comparing raw lengths before filtering would flag every method that has a callback param.
    const docsFiltered = normalizeDocsParams(docs).filter(p => !isCallbackParam(p));
    const dtsFiltered = normalizeDtsParams(dts).filter(p => !isCallbackParam(p));
    if (docsFiltered.length !== dtsFiltered.length) return false;
    // Only flag when d.ts makes a param optional that docs marks required
    return docsFiltered.every((p, i) => !(p.optional === false && dtsFiltered[i].optional === true));
}

// ─── d.ts reading ────────────────────────────────────────────────────────────

function parseMethodsFromContent(content: string): DeclaredMethod[] {
    const methods: DeclaredMethod[] = [];
    // [^)(] matches non-paren chars; \([^)]*\) allows one level of nested parens (e.g. inline function types)
    const methodRe = /^\s+(?:\/\*\*[^*]*(?:\*(?!\/)[^*]*)*\*\/\s*)?(\w+)(?:<[^>]+>)?\s*\(((?:[^)(]|\([^)]*\))*)\)\s*:\s*([^;]+);/gm;
    let m: RegExpExecArray | null;
    while ((m = methodRe.exec(content)) !== null) {
        const deprecated = /\*\s*@deprecated/.test(m[0]);
        const ignore = /\*\s*@scraper-ignore/.test(m[0]);
        methods.push({ name: m[1], params: m[2].trim(), returnType: m[3].trim(), deprecated, ignore });
    }
    return methods;
}

/** Simple edit-distance check — true when names are likely docs typos of each other. */
export function likelyTypo(a: string, b: string): boolean {
    if (Math.abs(a.length - b.length) > 3) return false;
    const m = a.length, n = b.length;
    const dp = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 1; i <= m; i++) {
        let prev = dp[0];
        dp[0] = i;
        for (let j = 1; j <= n; j++) {
            const tmp = dp[j];
            dp[j] = a[i - 1] === b[j - 1] ? prev : 1 + Math.min(prev, dp[j], dp[j - 1]);
            prev = tmp;
        }
    }
    return dp[n] <= 2;
}

/**
 * Reads a d.ts file and collects all methods including those from parent interfaces
 * (follows `extends` clauses recursively through searchDirs).
 */
export function readDeclaredInterface(
    filePath: string,
    name: string,
    searchDirs: string[] = [],
    visited: Set<string> = new Set(),
): DeclaredInterface {
    if (visited.has(filePath)) return { name, filePath, methods: [], properties: [] };
    visited.add(filePath);

    if (!fs.existsSync(filePath)) return { name, filePath, methods: [], properties: [] };
    const content = fs.readFileSync(filePath, 'utf-8');

    const ownMethods = parseMethodsFromContent(content);

    const inherited: DeclaredMethod[] = [];
    if (searchDirs.length > 0) {
        const extendsMatch = content.match(
            /(?:export\s+)?(?:interface|class)\s+\w+(?:<[^>]*>)?\s+extends\s+([^{]+)\{/,
        );
        if (extendsMatch) {
            const parentNames = extendsMatch[1]
                .split(',')
                .map(s => s.trim().replace(/<[^>]*>/g, '').trim())
                .filter(Boolean);

            for (const parentName of parentNames) {
                for (const dir of searchDirs) {
                    const parentPath = path.join(dir, `${parentName}.d.ts`);
                    if (fs.existsSync(parentPath)) {
                        const parent = readDeclaredInterface(parentPath, parentName, searchDirs, visited);
                        inherited.push(...parent.methods);
                        break;
                    }
                }
            }
        }
    }

    const ownNames = new Set(ownMethods.map(m => m.name));
    for (const m of inherited) {
        if (!ownNames.has(m.name)) ownMethods.push(m);
    }

    return { name, filePath, methods: ownMethods, properties: [] };
}

// ─── MethodExecuter ──────────────────────────────────────────────────────────

export interface MethodReport {
    className: string;
    filePath: string;
    newMethods: ScrapedMethod[];
    removedMethods: DeclaredMethod[];
    signatureChanges: SignatureChange[];
    deprecationChanges: DeprecationChange[];
}

export class MethodExecuter {
    static diff(
        scraped: ScrapedClass,
        filePath: string,
        searchDirs: string[] = [],
    ): MethodReport {
        const declared = readDeclaredInterface(filePath, scraped.name, searchDirs);
        const ignoredNames = new Set(declared.methods.filter(m => m.ignore).map(m => m.name));
        const scrapedMap = new Map(scraped.methods.filter(m => !ignoredNames.has(m.name)).map(m => [m.name, m]));
        const declaredMap = new Map(declared.methods.filter(m => !m.ignore).map(m => [m.name, m]));
        const allNames = new Set([...scrapedMap.keys(), ...declaredMap.keys()]);

        const newMethods: ScrapedMethod[] = [];
        const removedMethods: DeclaredMethod[] = [];
        const signatureChanges: SignatureChange[] = [];
        const deprecationChanges: DeprecationChange[] = [];

        for (const name of allNames) {
            const s = scrapedMap.get(name);
            const d = declaredMap.get(name);

            if (s && !d) {
                newMethods.push(s);
            } else if (!s && d) {
                removedMethods.push(d);
            } else if (s && d) {
                if (!signaturesMatch(s.rawParams, d.params)) {
                    signatureChanges.push({ methodName: name, docsSig: s.rawParams, dtsSig: d.params });
                }
                if (s.deprecated && !d.deprecated) {
                    deprecationChanges.push({ name, nowDeprecated: true });
                }
            }
        }

        return { className: scraped.name, filePath, newMethods, removedMethods, signatureChanges, deprecationChanges };
    }

    static patch(filePath: string, report: MethodReport, dryRun: boolean): void {
        if (!fs.existsSync(filePath)) {
            console.warn(`  Cannot patch (not found): ${filePath}`);
            return;
        }
        let content = fs.readFileSync(filePath, 'utf-8');
        let changed = false;

        for (const dep of report.deprecationChanges) {
            const methodLine = new RegExp(`(\\s+)(${dep.name}\\s*\\([^)]*\\)[^;]*;)`, 'g');
            content = content.replace(methodLine, (match, indent, sig) => {
                if (content.slice(0, content.indexOf(match)).slice(-50).includes('@deprecated')) return match;
                changed = true;
                return `${indent}/** @deprecated */\n${indent}${sig}`;
            });
        }

        for (const sig of report.signatureChanges) {
            const sigRe = new RegExp(`(\\s+)(${sig.methodName}\\s*\\([^)]*\\)[^;]*;)`);
            const sigMatch = sigRe.exec(content);
            if (sigMatch && !content.slice(0, sigMatch.index).slice(-200).includes('TODO: signature changed')) {
                const indent = sigMatch[1];
                content = content.replace(sigMatch[0],
                    `${indent}// TODO: signature changed — docs: (${sig.docsSig})\n${indent}${sigMatch[2]}`);
                changed = true;
            }
        }

        for (const removed of report.removedMethods) {
            const rmRe = new RegExp(`(\\s+)(${removed.name}\\s*\\([^)]*\\)[^;]*;)`);
            const rmMatch = rmRe.exec(content);
            if (rmMatch && !content.slice(0, rmMatch.index).slice(-100).includes('TODO: removed from docs')) {
                const indent = rmMatch[1];
                content = content.replace(rmMatch[0],
                    `${indent}// TODO: removed from docs\n${indent}${rmMatch[2]}`);
                changed = true;
            }
        }

        if (report.newMethods.length > 0) {
            const stubs = report.newMethods.map(m => buildMethodStub(m, '    ')).join('\n');
            const closingBrace = content.lastIndexOf('}');
            if (closingBrace !== -1) {
                content = content.slice(0, closingBrace) +
                    '\n    // --- SCRAPED METHOD STUBS (review and type properly) ---\n' +
                    stubs + '\n' + content.slice(closingBrace);
                changed = true;
            }
        }

        if (!changed) return;

        if (dryRun) {
            console.log(`  [DRY RUN] Would patch methods: ${filePath}`);
            return;
        }
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`  Patched methods: ${path.basename(filePath)}`);
    }

    static print(reports: MethodReport[]): void {
        for (const report of reports) {
            const hasChanges =
                report.newMethods.length > 0 ||
                report.removedMethods.length > 0 ||
                report.signatureChanges.length > 0 ||
                report.deprecationChanges.length > 0;
            if (!hasChanges) continue;

            const typoNewNames = new Set<string>();
            const typoRemovedNames = new Set<string>();
            for (const nm of report.newMethods) {
                for (const rm of report.removedMethods) {
                    if (likelyTypo(nm.name, rm.name)) {
                        typoNewNames.add(nm.name);
                        typoRemovedNames.add(rm.name);
                    }
                }
            }

            console.log(`\n${C.cyan}── ${report.className} (methods) ──${C.reset}`);
            for (const m of report.newMethods) {
                if (typoNewNames.has(m.name)) {
                    console.log(`  ${C.yellow}[TYPO IN DOCS?]${C.reset} ${m.name}(${m.rawParams})`);
                } else {
                    console.log(`  ${C.yellow}[NEW]${C.reset} ${m.name}(${m.rawParams})`);
                }
            }
            for (const m of report.removedMethods) {
                if (typoRemovedNames.has(m.name)) {
                    console.log(`  ${C.dim}[SKIPPED — possible docs typo]${C.reset} ${m.name}`);
                } else {
                    console.log(`  ${C.red}[REMOVED]${C.reset} ${m.name}`);
                }
            }
            for (const c of report.signatureChanges) {
                console.log(`  ${C.cyan}[SIG CHANGED]${C.reset} ${c.methodName}  docs: (${c.docsSig})  dts: (${c.dtsSig})`);
            }
            for (const d of report.deprecationChanges) {
                console.log(`  ${C.dim}[NOW DEPRECATED]${C.reset} ${d.name}`);
            }
        }
    }
}

function buildMethodStub(method: ScrapedMethod, indent: string): string {
    const params = convertDocsParamsToTs(method.rawParams);
    const lines: string[] = [
        `${indent}/**`,
        method.description ? `${indent} * ${method.description}` : '',
        `${indent} * @see ${method.sourceUrl}`,
        `${indent} */`,
    ].filter(Boolean);
    if (method.deprecated) lines.push(`${indent}/** @deprecated */`);
    lines.push(`${indent}${method.name}(${params}): void; // TODO: add callback types + return type`);
    return lines.join('\n');
}
