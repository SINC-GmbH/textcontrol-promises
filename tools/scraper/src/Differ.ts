import { ScrapedMethod, DeclaredMethod, DiffEntry, DiffReport } from './types';

/**
 * Compares scraped doc methods against declared d.ts methods and produces a diff report.
 */
export function diff(scraped: ScrapedMethod[], declared: DeclaredMethod[]): DiffReport {
    const scrapedMap = new Map(scraped.map(m => [m.name, m]));
    const declaredMap = new Map(declared.map(m => [m.name, m]));
    const allNames = new Set([...scrapedMap.keys(), ...declaredMap.keys()]);

    const entries: DiffEntry[] = [];

    for (const name of allNames) {
        const s = scrapedMap.get(name);
        const d = declaredMap.get(name);

        if (s && d) {
            entries.push({ name, kind: 'unchanged', scraped: s, declared: d });
        } else if (s && !d) {
            entries.push({ name, kind: 'new-in-docs', scraped: s });
        } else if (!s && d) {
            entries.push({ name, kind: 'removed-from-docs', declared: d });
        }
    }

    entries.sort((a, b) => a.name.localeCompare(b.name));

    const stats = {
        unchanged: entries.filter(e => e.kind === 'unchanged').length,
        newInDocs: entries.filter(e => e.kind === 'new-in-docs').length,
        removedFromDocs: entries.filter(e => e.kind === 'removed-from-docs').length,
        signatureChanged: entries.filter(e => e.kind === 'signature-changed').length,
        onlyInReal: entries.filter(e => e.kind === 'only-in-real').length,
    };

    return { entries, stats };
}

const COLOR = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
};

/** Prints the diff report to the console with color coding. */
export function printReport(report: DiffReport): void {
    console.log('\n' + '='.repeat(70));
    console.log('DIFF REPORT: Docs vs d.ts declarations');
    console.log('='.repeat(70));

    for (const entry of report.entries) {
        if (entry.kind === 'unchanged') continue; // skip unchanged to reduce noise
        const icon =
            entry.kind === 'new-in-docs' ? `${COLOR.yellow}[NEW IN DOCS]${COLOR.reset}` :
            entry.kind === 'removed-from-docs' ? `${COLOR.red}[REMOVED FROM DOCS]${COLOR.reset}` :
            entry.kind === 'signature-changed' ? `${COLOR.cyan}[SIGNATURE CHANGED]${COLOR.reset}` :
            `${COLOR.green}[ONLY IN REAL API]${COLOR.reset}`;
        console.log(`${icon} ${entry.name}`);
    }

    console.log('\n' + '-'.repeat(70));
    console.log(`Unchanged: ${COLOR.green}${report.stats.unchanged}${COLOR.reset}`);
    console.log(`New in docs: ${COLOR.yellow}${report.stats.newInDocs}${COLOR.reset}`);
    console.log(`Removed from docs: ${COLOR.red}${report.stats.removedFromDocs}${COLOR.reset}`);
    console.log(`Signature changed: ${COLOR.cyan}${report.stats.signatureChanged}${COLOR.reset}`);
    console.log(`Only in real API: ${COLOR.green}${report.stats.onlyInReal}${COLOR.reset}`);
}
