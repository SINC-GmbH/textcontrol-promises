import * as fs from 'fs';
import { EventMapDiffReport, ScrapedEvent } from './types';

/**
 * Patches lib/types/helper/EventMap.d.ts based on an EventMapDiffReport.
 *
 * The file has a predictable structure:
 *   import { Cb1, Cb2, ... } from '../callbacks';
 *   export type EventMapNames = keyof EventMap;
 *   export type EventMapCallback<T ...> = EventMap[T];
 *   export interface EventMap {
 *       eventName: CallbackType;
 *   }
 */
export function patchEventMap(
    dtsPath: string,
    report: EventMapDiffReport,
    dryRun: boolean,
): void {
    const hasWork =
        report.newEvents.length > 0 ||
        report.removedEvents.length > 0 ||
        report.deprecationChanges.length > 0 ||
        report.callbackTypeChanges.length > 0;

    if (!hasWork) {
        console.log('EventMap is up to date — nothing to patch.');
        return;
    }

    let content = fs.readFileSync(dtsPath, 'utf-8');

    // ── Mark callback type changes ────────────────────────────────────────
    for (const change of report.callbackTypeChanges) {
        // Do NOT use re.test() before re.replace() on a /g regex — test() advances lastIndex,
        // causing replace() to start mid-string and miss the first occurrence.
        const re = new RegExp(`(    ${change.name}:\\s*)(${change.from})(;)`, 'g');
        const next = content.replace(re,
            `    // TODO: callback type changed — docs: ${change.to}\n    $1$2$3`);
        if (next !== content) content = next;
    }

    // ── Add @deprecated to newly deprecated events ────────────────────────
    for (const dep of report.deprecationChanges) {
        const re = new RegExp(`(    )(${dep.name}:\\s*\\w+;)`);
        const match = re.exec(content);
        if (match && !content.slice(0, match.index).slice(-100).includes('@deprecated')) {
            content = content.replace(match[0], `    /** @deprecated */\n    ${match[2]}`);
        }
    }

    // ── Mark removed events ───────────────────────────────────────────────
    for (const name of report.removedEvents) {
        const re = new RegExp(`(    )(${name}:\\s*\\w+;)`);
        const match = re.exec(content);
        if (match && !content.slice(0, match.index).slice(-80).includes('TODO: removed from docs')) {
            content = content.replace(match[0], `    // TODO: removed from docs\n    ${match[2]}`);
        }
    }

    // ── Add new events ────────────────────────────────────────────────────
    if (report.newEvents.length > 0) {
        // Add missing callback imports to the import block
        content = addMissingImports(content, report.newEvents);

        // Append new entries before the closing } of the EventMap interface
        const closingBrace = content.lastIndexOf('}');
        if (closingBrace !== -1) {
            const newEntries = report.newEvents
                .map(e => buildEventEntry(e))
                .join('\n');
            content =
                content.slice(0, closingBrace) +
                '    // --- SCRAPED EVENTS (review descriptions) ---\n' +
                newEntries + '\n' +
                content.slice(closingBrace);
        }
    }

    if (dryRun) {
        console.log(`\n[DRY RUN] Would patch EventMap: ${dtsPath}`);
        console.log(`  + ${report.newEvents.length} new events`);
        console.log(`  - ${report.removedEvents.length} removed markers`);
        console.log(`  ~ ${report.deprecationChanges.length} deprecations`);
        console.log(`  ~ ${report.callbackTypeChanges.length} callback type changes`);
        return;
    }

    fs.writeFileSync(dtsPath, content, 'utf-8');
    console.log(`  Patched EventMap: ${dtsPath}`);
}

function buildEventEntry(event: ScrapedEvent): string {
    const lines: string[] = [];
    if (event.description) lines.push(`    /** ${event.description} */`);
    if (event.deprecated) lines.push('    /** @deprecated */');
    lines.push(`    ${event.name}: ${event.callbackType || 'EventCallback'};`);
    return lines.join('\n');
}

/** Adds any callback types needed by newEvents to the existing import block. */
function addMissingImports(content: string, newEvents: ScrapedEvent[]): string {
    // Find the existing import line from '../callbacks'
    const importMatch = /^import \{([^}]+)\} from '\.\.\/callbacks';/m.exec(content);
    if (!importMatch) return content;

    const existingImports = new Set(
        importMatch[1].split(',').map(s => s.trim()).filter(Boolean),
    );

    const newCallbackTypes = newEvents
        .map(e => e.callbackType)
        .filter(t => t && t !== 'EventCallback' && !existingImports.has(t));

    if (newCallbackTypes.length === 0) return content;

    const allImports = [...existingImports, ...newCallbackTypes].sort();
    const newImportLine = `import { ${allImports.join(',\n    ')} } from '../callbacks';`;
    return content.replace(importMatch[0], newImportLine);
}
