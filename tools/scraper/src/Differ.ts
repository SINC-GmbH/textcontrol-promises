import * as fs from 'fs';
import * as path from 'path';
import {
    ScrapedClass, ScrapedMethod, DeclaredMethod, DeclaredInterface,
    ClassDiffReport, MultiClassDiffReport,
    SignatureChange, DeprecationChange,
    DiffEntry, DiffReport,
} from './types';

const C = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
    dim: '\x1b[2m',
};

// ─── Signature normalisation ─────────────────────────────────────────────────

interface NormParam { name: string; optional: boolean; }

/** Normalises docs raw params to comparable param names (ignores types, order matters). */
function normalizeDocsParams(rawParams: string): NormParam[] {
    if (!rawParams.trim()) return [];
    return rawParams.split(',').map(part => {
        const trimmed = part.trim();
        const isOptional = trimmed.startsWith('[') && trimmed.endsWith(']');
        const inner = isOptional ? trimmed.slice(1, -1).trim() : trimmed;
        // Format: "<Type> name"  or just "name"
        const m = inner.match(/(?:<[^>]+>\s+)?(\w+)$/);
        return { name: m ? m[1] : inner, optional: isOptional };
    });
}

/** Normalises d.ts param string to comparable param names. */
function normalizeDtsParams(dtsParams: string): NormParam[] {
    if (!dtsParams.trim()) return [];
    return dtsParams.split(',').map(part => {
        const trimmed = part.trim();
        // Format: "name?: Type" or "name: Type"
        const m = trimmed.match(/^(\w+)(\?)?:/);
        return { name: m ? m[1] : trimmed, optional: !!m?.[2] };
    });
}

function signaturesMatch(docs: string, dts: string): boolean {
    const docsNorm = normalizeDocsParams(docs);
    const dtsNorm = normalizeDtsParams(dts);
    if (docsNorm.length !== dtsNorm.length) return false;
    // Strip callback/errorCallback params from docs (they're implementation details, not user API)
    const docsFiltered = docsNorm.filter(p => !p.name.toLowerCase().includes('callback'));
    const dtsFiltered = dtsNorm.filter(p => !p.name.toLowerCase().includes('callback'));
    if (docsFiltered.length !== dtsFiltered.length) return false;
    return docsFiltered.every((p, i) => p.name === dtsFiltered[i].name);
}

// ─── Multi-class diff ────────────────────────────────────────────────────────

/**
 * Diffs all scraped classes against the declared interfaces in dtsObjectsDir.
 * Classes present only in docs are "new"; classes present only in d.ts are "removed".
 */
export function diffAll(scraped: ScrapedClass[], dtsObjectsDir: string): MultiClassDiffReport {
    const declaredFiles = fs.existsSync(dtsObjectsDir)
        ? fs.readdirSync(dtsObjectsDir).filter(f => f.endsWith('.d.ts'))
        : [];
    const declaredNames = new Set(declaredFiles.map(f => path.basename(f, '.d.ts')));
    const scrapedNames = new Set(scraped.map(c => c.name));

    const newClasses = [...scrapedNames].filter(n => !declaredNames.has(n));
    const removedClasses = [...declaredNames].filter(n => !scrapedNames.has(n));

    const perClass: ClassDiffReport[] = [];
    for (const cls of scraped) {
        if (!declaredNames.has(cls.name)) continue; // new class — covered in newClasses
        const filePath = path.join(dtsObjectsDir, `${cls.name}.d.ts`);
        const declared = readDeclaredInterface(filePath, cls.name);
        perClass.push(diffClass(cls, declared));
    }

    const stats = {
        totalClasses: scraped.length,
        totalNewMethods: perClass.reduce((s, r) => s + r.newMethods.length, 0),
        totalRemovedMethods: perClass.reduce((s, r) => s + r.removedMethods.length, 0),
        totalSignatureChanges: perClass.reduce((s, r) => s + r.signatureChanges.length, 0),
        totalNewClasses: newClasses.length,
        totalRemovedClasses: removedClasses.length,
    };

    return { perClass, newClasses, removedClasses, stats };
}

/** Diffs one scraped class against its declared interface. */
export function diffClass(scraped: ScrapedClass, declared: DeclaredInterface): ClassDiffReport {
    const scrapedMap = new Map(scraped.methods.map(m => [m.name, m]));
    const declaredMap = new Map(declared.methods.map(m => [m.name, m]));
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

    return {
        className: scraped.name,
        sourceUrl: scraped.sourceUrl,
        newMethods,
        removedMethods,
        signatureChanges,
        deprecationChanges,
    };
}

// ─── Reading declared interfaces ─────────────────────────────────────────────

/**
 * Reads a lib/types/objects/*.d.ts file with a simple regex approach.
 * Avoids ts-morph for speed (these files are simple enough).
 */
export function readDeclaredInterface(filePath: string, name: string): DeclaredInterface {
    if (!fs.existsSync(filePath)) return { name, filePath, methods: [] };
    const content = fs.readFileSync(filePath, 'utf-8');
    const methods: DeclaredMethod[] = [];

    // Match lines like: methodName(params): ReturnType;
    // Also matches optional question-mark methods and multi-line sigs (simplified)
    const methodRe = /^\s+(?:\/\*\*[\s\S]*?\*\/\s*)?(\w+)\s*\(([^)]*)\)\s*:\s*([^;]+);/gm;
    let m: RegExpExecArray | null;
    while ((m = methodRe.exec(content)) !== null) {
        const methodName = m[1];
        const params = m[2].trim();
        const returnType = m[3].trim();
        // Check if @deprecated appears in the JSDoc immediately before this line
        const before = content.slice(0, m.index);
        const deprecated = /\*\s*@deprecated/.test(before.slice(-200));
        methods.push({ name: methodName, params, returnType, deprecated });
    }

    return { name, filePath, methods };
}

// ─── Print reports ───────────────────────────────────────────────────────────

export function printMultiClassReport(report: MultiClassDiffReport): void {
    console.log('\n' + '='.repeat(70));
    console.log('MULTI-CLASS DIFF REPORT');
    console.log('='.repeat(70));

    if (report.newClasses.length > 0) {
        console.log(`\n${C.yellow}New classes in docs (${report.newClasses.length}):${C.reset}`);
        for (const n of report.newClasses) console.log(`  ${C.yellow}[NEW CLASS]${C.reset} ${n}`);
    }

    if (report.removedClasses.length > 0) {
        console.log(`\n${C.red}Classes in d.ts but not in docs (${report.removedClasses.length}):${C.reset}`);
        for (const n of report.removedClasses) console.log(`  ${C.red}[REMOVED CLASS]${C.reset} ${n}`);
    }

    for (const cls of report.perClass) {
        const hasChanges =
            cls.newMethods.length > 0 ||
            cls.removedMethods.length > 0 ||
            cls.signatureChanges.length > 0 ||
            cls.deprecationChanges.length > 0;
        if (!hasChanges) continue;

        console.log(`\n${C.cyan}── ${cls.className} ──${C.reset}`);
        for (const m of cls.newMethods) console.log(`  ${C.yellow}[NEW]${C.reset} ${m.name}(${m.rawParams})`);
        for (const m of cls.removedMethods) console.log(`  ${C.red}[REMOVED]${C.reset} ${m.name}`);
        for (const c of cls.signatureChanges)
            console.log(`  ${C.cyan}[SIG CHANGED]${C.reset} ${c.methodName}  docs: (${c.docsSig})  dts: (${c.dtsSig})`);
        for (const d of cls.deprecationChanges)
            console.log(`  ${C.dim}[NOW DEPRECATED]${C.reset} ${d.name}`);
    }

    console.log('\n' + '-'.repeat(70));
    console.log(`Classes scraped:       ${report.stats.totalClasses}`);
    console.log(`New classes:           ${C.yellow}${report.stats.totalNewClasses}${C.reset}`);
    console.log(`Removed classes:       ${C.red}${report.stats.totalRemovedClasses}${C.reset}`);
    console.log(`New methods:           ${C.yellow}${report.stats.totalNewMethods}${C.reset}`);
    console.log(`Removed methods:       ${C.red}${report.stats.totalRemovedMethods}${C.reset}`);
    console.log(`Signature changes:     ${C.cyan}${report.stats.totalSignatureChanges}${C.reset}`);
}

// ─── Legacy single-class diff (kept for TXTextControl.d.ts workflow) ─────────

export function diff(
    scraped: Array<Omit<ScrapedMethod, 'className'>>,
    declared: DeclaredMethod[],
): DiffReport {
    const scrapedMap = new Map(scraped.map(m => [m.name, m]));
    const declaredMap = new Map(declared.map(m => [m.name, m]));
    const allNames = new Set([...scrapedMap.keys(), ...declaredMap.keys()]);

    const entries: DiffEntry[] = [];
    for (const name of allNames) {
        const s = scrapedMap.get(name);
        const d = declaredMap.get(name);
        if (s && d) entries.push({ name, kind: 'unchanged', scraped: { ...s, className: '' }, declared: d });
        else if (s) entries.push({ name, kind: 'new-in-docs', scraped: { ...s, className: '' } });
        else if (d) entries.push({ name, kind: 'removed-from-docs', declared: d });
    }
    entries.sort((a, b) => a.name.localeCompare(b.name));

    return {
        entries,
        stats: {
            unchanged: entries.filter(e => e.kind === 'unchanged').length,
            newInDocs: entries.filter(e => e.kind === 'new-in-docs').length,
            removedFromDocs: entries.filter(e => e.kind === 'removed-from-docs').length,
            signatureChanged: entries.filter(e => e.kind === 'signature-changed').length,
            onlyInReal: entries.filter(e => e.kind === 'only-in-real').length,
        },
    };
}

export function printReport(report: DiffReport): void {
    console.log('\n' + '='.repeat(70));
    console.log('DIFF REPORT: Docs vs d.ts declarations');
    console.log('='.repeat(70));

    for (const entry of report.entries) {
        if (entry.kind === 'unchanged') continue;
        const icon =
            entry.kind === 'new-in-docs' ? `${C.yellow}[NEW IN DOCS]${C.reset}` :
            entry.kind === 'removed-from-docs' ? `${C.red}[REMOVED FROM DOCS]${C.reset}` :
            entry.kind === 'signature-changed' ? `${C.cyan}[SIGNATURE CHANGED]${C.reset}` :
            `${C.green}[ONLY IN REAL API]${C.reset}`;
        console.log(`${icon} ${entry.name}`);
    }

    console.log('\n' + '-'.repeat(70));
    console.log(`Unchanged: ${C.green}${report.stats.unchanged}${C.reset}`);
    console.log(`New in docs: ${C.yellow}${report.stats.newInDocs}${C.reset}`);
    console.log(`Removed from docs: ${C.red}${report.stats.removedFromDocs}${C.reset}`);
    console.log(`Signature changed: ${C.cyan}${report.stats.signatureChanged}${C.reset}`);
    console.log(`Only in real API: ${C.green}${report.stats.onlyInReal}${C.reset}`);
}
