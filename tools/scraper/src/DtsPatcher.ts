import * as fs from 'fs';
import * as path from 'path';
import { MultiClassDiffReport, ClassDiffReport, ScrapedMethod, DiffReport } from './types';

/**
 * Converts a docs raw param string to TypeScript syntax.
 * Docs format: "<Type> name, [<Type> optName]"
 * Output:      "name: Type, optName?: Type"
 * Strips callback/errorCallback params.
 */
export function convertDocsParamsToTs(rawParams: string): string {
    if (!rawParams.trim()) return '';
    return rawParams
        .split(',')
        .map(part => {
            const trimmed = part.trim();
            const isOptional = trimmed.startsWith('[') && trimmed.endsWith(']');
            const inner = isOptional ? trimmed.slice(1, -1).trim() : trimmed;
            const m = inner.match(/^<([^>]+)>\s+(\w+)$/);
            if (!m) return `${inner}${isOptional ? '?' : ''}: any`;
            const [, typeName, paramName] = m;
            if (paramName.toLowerCase().includes('callback')) return null;
            return `${paramName}${isOptional ? '?' : ''}: ${typeName}`;
        })
        .filter((p): p is string => p !== null)
        .join(', ');
}

// ─── Per-class object patcher (lib/types/objects/*.d.ts) ─────────────────────

/**
 * Patches all affected lib/types/objects/*.d.ts files based on a MultiClassDiffReport.
 * New methods are appended inside the interface; signature changes and
 * deprecations get TODO comments.
 */
export function patchAllObjectDts(
    dtsObjectsDir: string,
    report: MultiClassDiffReport,
    dryRun: boolean,
): void {
    let totalPatched = 0;

    for (const cls of report.perClass) {
        const hasWork =
            cls.newMethods.length > 0 ||
            cls.removedMethods.length > 0 ||
            cls.signatureChanges.length > 0 ||
            cls.deprecationChanges.length > 0;
        if (!hasWork) continue;

        const filePath = path.join(dtsObjectsDir, `${cls.className}.d.ts`);
        if (!fs.existsSync(filePath)) {
            console.warn(`  Cannot patch: file not found: ${filePath}`);
            continue;
        }

        patchObjectDts(filePath, cls, dryRun);
        totalPatched++;
    }

    if (totalPatched === 0) {
        console.log('Nothing to patch in lib/types/objects/.');
    }
}

/** Patches a single lib/types/objects/{ClassName}.d.ts file. */
function patchObjectDts(filePath: string, cls: ClassDiffReport, dryRun: boolean): void {
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = false;

    // ── Deprecation changes ──────────────────────────────────────────────
    for (const dep of cls.deprecationChanges) {
        // Find the method line and prepend @deprecated JSDoc if not already there
        const methodLine = new RegExp(`(\\s+)(${dep.name}\\s*\\([^)]*\\)[^;]*;)`, 'g');
        content = content.replace(methodLine, (match, indent, sig) => {
            if (content.slice(0, content.indexOf(match)).includes(`@deprecated`) &&
                content.slice(content.indexOf(match) - 50, content.indexOf(match)).includes(dep.name)) {
                return match; // already has @deprecated
            }
            changed = true;
            return `${indent}/** @deprecated */\n${indent}${sig}`;
        });
    }

    // ── Signature change markers ─────────────────────────────────────────
    for (const sig of cls.signatureChanges) {
        const sigRe = new RegExp(`(\\s+)(${sig.methodName}\\s*\\([^)]*\\)[^;]*;)`);
        const sigMatch = sigRe.exec(content);
        if (sigMatch && !content.slice(0, sigMatch.index).slice(-200).includes('TODO: signature changed')) {
            const indent = sigMatch[1];
            const stub = sigMatch[2];
            content = content.replace(sigMatch[0],
                `${indent}// TODO: signature changed — docs: (${sig.docsSig})\n${indent}${stub}`);
            changed = true;
        }
    }

    // ── Removal markers ──────────────────────────────────────────────────
    for (const removed of cls.removedMethods) {
        const rmRe = new RegExp(`(\\s+)(${removed.name}\\s*\\([^)]*\\)[^;]*;)`);
        const rmMatch = rmRe.exec(content);
        if (rmMatch && !content.slice(0, rmMatch.index).slice(-100).includes('TODO: removed from docs')) {
            const indent = rmMatch[1];
            const stub = rmMatch[2];
            content = content.replace(rmMatch[0],
                `${indent}// TODO: removed from docs\n${indent}${stub}`);
            changed = true;
        }
    }

    // ── New method stubs ─────────────────────────────────────────────────
    if (cls.newMethods.length > 0) {
        const stubs = cls.newMethods.map(m => buildMethodStub(m, '    ')).join('\n');
        // Insert before the closing } of the interface
        const closingBrace = content.lastIndexOf('}');
        if (closingBrace !== -1) {
            const marker = '\n    // --- SCRAPED STUBS (review and type properly) ---\n';
            content = content.slice(0, closingBrace) + marker + stubs + '\n' + content.slice(closingBrace);
            changed = true;
        }
    }

    if (!changed) return;

    if (dryRun) {
        console.log(`\n[DRY RUN] Would patch: ${filePath}`);
        return;
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  Patched: ${filePath}`);
}

function buildMethodStub(method: ScrapedMethod, indent: string): string {
    const params = convertDocsParamsToTs(method.rawParams);
    const lines: string[] = [];
    lines.push(`${indent}/**`);
    if (method.description) lines.push(`${indent} * ${method.description}`);
    lines.push(`${indent} * @see ${method.sourceUrl}`);
    lines.push(`${indent} */`);
    if (method.deprecated) lines.push(`${indent}/** @deprecated */`);
    lines.push(`${indent}${method.name}(${params}): void; // TODO: add callback types + return type`);
    return lines.join('\n');
}

// ─── Legacy patcher for TXTextControl.d.ts (top-level export functions) ──────

/**
 * Applies a diff report to TXTextControl.d.ts by appending new method stubs.
 * Kept for backward compat with the legacy single-class workflow.
 */
export function patchDts(dtsPath: string, report: DiffReport, dryRun: boolean): void {
    const newMethods = report.entries.filter(e => e.kind === 'new-in-docs' && e.scraped);

    if (newMethods.length === 0) {
        console.log('Nothing to patch — no new methods found in docs.');
        return;
    }

    console.log(`\nMethods to add to d.ts (${newMethods.length}):`);
    for (const entry of newMethods) {
        const s = entry.scraped!;
        console.log(`  + ${s.name}(${s.rawParams})`);
    }

    if (dryRun) {
        console.log('\nDry-run: no changes written.');
        return;
    }

    const existing = fs.readFileSync(path.resolve(dtsPath), 'utf-8');
    const stubs = newMethods.map(entry => {
        const s = entry.scraped!;
        const tsParams = convertDocsParamsToTs(s.rawParams);
        return [
            `/**`,
            ` * ${s.description || '(no description scraped)'}`,
            ` * @see ${s.sourceUrl}`,
            ` */`,
            `export function ${s.name}(${tsParams}): void;`,
        ].join('\n');
    }).join('\n\n');

    const updated = existing.trimEnd() +
        '\n\n// --- GENERATED STUBS (review and type properly) ---\n' + stubs + '\n';
    fs.writeFileSync(path.resolve(dtsPath), updated, 'utf-8');
    console.log(`\nPatched: ${dtsPath}`);
}
