import * as fs from 'fs';
import * as path from 'path';
import { ScrapedClass, ScrapedClassProperty, DeclaredProperty } from '../types';

const C = {
    reset: '\x1b[0m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
};

// ─── d.ts property parsing ────────────────────────────────────────────────────

/**
 * Parses property declarations from d.ts content.
 * Negative lookahead `(?!\s*\()` excludes method signatures, which have `(` after the name.
 * Index signatures `[key: string]: any` are excluded because `[` is not matched by `\w+`.
 */
function parsePropertiesFromContent(content: string): DeclaredProperty[] {
    const props: DeclaredProperty[] = [];
    const propRe = /^\s+(?:\/\*\*[^*]*(?:\*(?!\/)[^*]*)*\*\/\s*)?(?:(readonly)\s+)?(\w+)(\?)?(?!\s*\():\s*([^\n;(]+);/gm;
    let m: RegExpExecArray | null;
    while ((m = propRe.exec(content)) !== null) {
        const [, readonly, name, optional, type] = m;
        if (!name || name === 'new') continue;
        const deprecated = /\*\s*@deprecated/.test(m[0]);
        const ignore = /\*\s*@scraper-ignore/.test(m[0]);
        props.push({
            name,
            typeText: type.trim(),
            readonly: !!readonly,
            optional: !!optional,
            deprecated,
            ignore,
        });
    }
    return props;
}

// ─── PropertyExecuter ────────────────────────────────────────────────────────

export interface PropertyReport {
    className: string;
    filePath: string;
    newProperties: ScrapedClassProperty[];
    removedProperties: DeclaredProperty[];
}

export class PropertyExecuter {
    /**
     * Diffs scraped properties against the d.ts file.
     * Only compares by name — type comparison is too noisy due to docs/d.ts format differences.
     */
    static diff(scraped: ScrapedClass, filePath: string): PropertyReport {
        if (!fs.existsSync(filePath)) {
            return { className: scraped.name, filePath, newProperties: [], removedProperties: [] };
        }

        const content = fs.readFileSync(filePath, 'utf-8');
        const declared = parsePropertiesFromContent(content);

        const ignoredNames = new Set(declared.filter(p => p.ignore).map(p => p.name));
        const scrapedMap = new Map(scraped.properties.filter(p => !ignoredNames.has(p.name)).map(p => [p.name, p]));
        const declaredMap = new Map(declared.filter(p => !p.ignore).map(p => [p.name, p]));

        const newProperties: ScrapedClassProperty[] = [];
        const removedProperties: DeclaredProperty[] = [];

        for (const [name, prop] of scrapedMap) {
            if (!declaredMap.has(name)) newProperties.push(prop);
        }
        for (const [name, prop] of declaredMap) {
            if (!scrapedMap.has(name)) removedProperties.push(prop);
        }

        return { className: scraped.name, filePath, newProperties, removedProperties };
    }

    static patch(filePath: string, report: PropertyReport, dryRun: boolean): void {
        if (report.newProperties.length === 0 && report.removedProperties.length === 0) return;
        if (!fs.existsSync(filePath)) {
            console.warn(`  Cannot patch (not found): ${filePath}`);
            return;
        }

        let content = fs.readFileSync(filePath, 'utf-8');
        let changed = false;

        for (const removed of report.removedProperties) {
            // Mark removed properties with a TODO comment
            const rmRe = new RegExp(`(\\s+)((?:readonly\\s+)?${removed.name}\\??\\s*:[^;]+;)`);
            const rmMatch = rmRe.exec(content);
            if (rmMatch && !content.slice(0, rmMatch.index).slice(-100).includes('TODO: removed from docs')) {
                const indent = rmMatch[1];
                content = content.replace(rmMatch[0],
                    `${indent}// TODO: removed from docs\n${indent}${rmMatch[2]}`);
                changed = true;
            }
        }

        if (report.newProperties.length > 0) {
            const stubs = report.newProperties.map(p => buildPropertyStub(p, '    ')).join('\n');
            const closingBrace = content.lastIndexOf('}');
            if (closingBrace !== -1) {
                content = content.slice(0, closingBrace) +
                    '\n    // --- SCRAPED PROPERTY STUBS (review and type properly) ---\n' +
                    stubs + '\n' + content.slice(closingBrace);
                changed = true;
            }
        }

        if (!changed) return;

        if (dryRun) {
            console.log(`  [DRY RUN] Would patch properties: ${filePath}`);
            return;
        }
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`  Patched properties: ${path.basename(filePath)}`);
    }

    static print(reports: PropertyReport[]): void {
        for (const report of reports) {
            if (report.newProperties.length === 0 && report.removedProperties.length === 0) continue;
            console.log(`\n${C.cyan}── ${report.className} (properties) ──${C.reset}`);
            for (const p of report.newProperties) {
                console.log(`  ${C.yellow}[NEW PROP]${C.reset} ${p.name}: ${p.typeText}`);
            }
            for (const p of report.removedProperties) {
                console.log(`  ${C.red}[REMOVED PROP]${C.reset} ${p.name}: ${p.typeText}`);
            }
        }
    }
}

function buildPropertyStub(prop: ScrapedClassProperty, indent: string): string {
    const readonly = prop.readonly ? 'readonly ' : '';
    const desc = prop.description ? `${indent}/** ${prop.description} */\n` : '';
    return `${desc}${indent}${readonly}${prop.name}: ${prop.typeText}; // TODO: verify type`;
}
