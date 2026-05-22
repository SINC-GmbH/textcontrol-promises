import * as fs from 'fs';
import { ScrapedEvent, DeclaredEvent, EventMapDiffReport, DeprecationChange } from './types';

const EVENT_MAP_PATH_DEFAULT =
    require('path').resolve(__dirname, '../../../lib/types/helper/EventMap.d.ts');

/**
 * Parses the EventMap interface from EventMap.d.ts using a line-based regex approach.
 * The file has a predictable structure:
 *   import { ... } from '../callbacks';
 *   export type EventMapNames = keyof EventMap;
 *   export type EventMapCallback<T extends EventMapNames> = EventMap[T];
 *   export interface EventMap {
 *       eventName: CallbackType;     ← these are the entries
 *   }
 */
export function parseEventMap(dtsPath: string = EVENT_MAP_PATH_DEFAULT): DeclaredEvent[] {
    const content = fs.readFileSync(dtsPath, 'utf-8');
    const events: DeclaredEvent[] = [];

    // Find the EventMap interface block
    const interfaceStart = content.indexOf('export interface EventMap {');
    if (interfaceStart === -1) return events;
    const interfaceBlock = content.slice(interfaceStart);

    // Match lines like:   eventName: CallbackType;
    // with optional JSDoc before them (including @deprecated)
    const entryRe = /(?:\/\*\*([\s\S]*?)\*\/\s*)?^\s{4}(\w+)\s*:\s*(\w+)\s*;/gm;
    let m: RegExpExecArray | null;
    while ((m = entryRe.exec(interfaceBlock)) !== null) {
        const jsDoc = m[1] ?? '';
        const name = m[2];
        const callbackType = m[3];
        const deprecated = /@deprecated/.test(jsDoc);
        events.push({ name, callbackType, deprecated });
    }

    return events;
}

/** Diffs scraped events against the currently declared EventMap entries. */
export function diffEventMap(
    scraped: ScrapedEvent[],
    declared: DeclaredEvent[],
): EventMapDiffReport {
    const scrapedMap = new Map(scraped.map(e => [e.name, e]));
    const declaredMap = new Map(declared.map(e => [e.name, e]));

    const newEvents: ScrapedEvent[] = [];
    const removedEvents: string[] = [];
    const deprecationChanges: DeprecationChange[] = [];
    const callbackTypeChanges: { name: string; from: string; to: string }[] = [];

    for (const [name, s] of scrapedMap) {
        const d = declaredMap.get(name);
        if (!d) {
            newEvents.push(s);
        } else {
            if (s.deprecated && !d.deprecated) {
                deprecationChanges.push({ name, nowDeprecated: true });
            }
            if (s.callbackType && d.callbackType && s.callbackType !== d.callbackType) {
                callbackTypeChanges.push({ name, from: d.callbackType, to: s.callbackType });
            }
        }
    }

    for (const [name] of declaredMap) {
        if (!scrapedMap.has(name)) {
            removedEvents.push(name);
        }
    }

    return { newEvents, removedEvents, deprecationChanges, callbackTypeChanges };
}

const C = {
    reset: '\x1b[0m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
    dim: '\x1b[2m',
};

export function printEventMapReport(report: EventMapDiffReport): void {
    console.log('\n' + '='.repeat(70));
    console.log('EVENT MAP DIFF REPORT');
    console.log('='.repeat(70));

    for (const e of report.newEvents)
        console.log(`  ${C.yellow}[NEW]${C.reset} ${e.name}: ${e.callbackType}`);
    for (const name of report.removedEvents)
        console.log(`  ${C.red}[REMOVED]${C.reset} ${name}`);
    for (const d of report.deprecationChanges)
        console.log(`  ${C.dim}[NOW DEPRECATED]${C.reset} ${d.name}`);
    for (const c of report.callbackTypeChanges)
        console.log(`  ${C.cyan}[CALLBACK CHANGED]${C.reset} ${c.name}: ${c.from} → ${c.to}`);

    const total = report.newEvents.length + report.removedEvents.length +
        report.deprecationChanges.length + report.callbackTypeChanges.length;
    if (total === 0) {
        console.log('  ✓ EventMap is up to date.');
    }
    console.log('-'.repeat(70));
    console.log(`New events:          ${C.yellow}${report.newEvents.length}${C.reset}`);
    console.log(`Removed events:      ${C.red}${report.removedEvents.length}${C.reset}`);
    console.log(`Deprecation changes: ${C.dim}${report.deprecationChanges.length}${C.reset}`);
    console.log(`Callback changes:    ${C.cyan}${report.callbackTypeChanges.length}${C.reset}`);
}
