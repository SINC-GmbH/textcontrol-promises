import * as fs from 'fs';
import * as path from 'path';
import { DiffReport } from './types';

/**
 * Converts a raw docs parameter string to valid TypeScript parameter syntax.
 * Docs format: `<Type> name, [<Type> optName]`
 * TypeScript:  `name: Type, optName?: Type`
 */
function convertDocsParamsToTs(rawParams: string): string {
    if (!rawParams.trim()) return '';
    return rawParams.split(',').map(part => {
        const trimmed = part.trim();
        const isOptional = trimmed.startsWith('[') && trimmed.endsWith(']');
        const inner = isOptional ? trimmed.slice(1, -1).trim() : trimmed;
        const m = inner.match(/^<([^>]+)>\s+(\w+)$/);
        if (!m) return trimmed; // fallback: keep as-is
        const [, typeName, paramName] = m;
        return `${paramName}${isOptional ? '?' : ''}: ${typeName}`;
    }).join(', ');
}

/**
 * Applies a diff report to the d.ts file by inserting new method stubs for
 * methods found in the docs but missing from the declarations.
 *
 * Only runs when --update flag is passed. Does NOT delete removed methods
 * (removals should be reviewed manually).
 */
export function patchDts(dtsPath: string, report: DiffReport, dryRun: boolean): void {
    const absPath = path.resolve(dtsPath);
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

    const existing = fs.readFileSync(absPath, 'utf-8');
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

    // Insert before the last closing line of the file
    const updated = existing.trimEnd() + '\n\n// --- GENERATED STUBS (review and type properly) ---\n' + stubs + '\n';
    fs.writeFileSync(absPath, updated, 'utf-8');
    console.log(`\nPatched: ${absPath}`);
}
