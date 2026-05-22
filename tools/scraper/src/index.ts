#!/usr/bin/env ts-node
import * as path from 'path';
import * as fs from 'fs';
import { Command } from 'commander';
import { DocsScraper } from './DocsScraper';
import { readDeclaredMethods } from './DtsReader';
import { diff, printReport, diffAll, printMultiClassReport } from './Differ';
import { patchDts, patchAllObjectDts } from './DtsPatcher';
import { parseEventMap, diffEventMap, printEventMapReport } from './EventMapDiffer';
import { patchEventMap } from './EventMapPatcher';
import { generateAll, writeAll } from './DtsGenerator';
import { RealApiInspector } from './RealApiInspector';

const LIB_ROOT = path.resolve(__dirname, '../../../lib');
const DTS_PATH = path.join(LIB_ROOT, 'types/TXTextControl.d.ts');
const OBJECTS_DIR = path.join(LIB_ROOT, 'types/objects');
const EVENT_MAP_PATH = path.join(LIB_ROOT, 'types/helper/EventMap.d.ts');
const DEFAULT_DEMO_URL = 'http://localhost:8080';

const program = new Command();

program
    .name('textcontrol-scraper')
    .description('Scrapes TX TextControl API docs and validates against d.ts declarations')
    .option('--dry-run', 'Show diff without modifying any files (default)', false)
    .option('--update', 'Patch d.ts files with changes found in the docs (includes EventMap)')
    .option('--events', 'Diff/patch EventMap only (implies --dry-run unless --update is also set)')
    .option('--generate-dts [dir]', 'Generate d.ts files from scratch for all scraped classes')
    .option('--only-new', 'With --generate-dts: only write files that do not yet exist')
    .option('--class <name>', 'Limit scraping/diffing to a single class name')
    .option('--check-real', 'Navigate to running demo app and enumerate real TXTextControl API')
    .option('--demo-url <url>', 'Demo app URL for --check-real', DEFAULT_DEMO_URL)
    .option('--dts <path>', 'Path to TXTextControl.d.ts for legacy diff', DTS_PATH)
    .option('--objects-dir <path>', 'Path to lib/types/objects/ directory', OBJECTS_DIR)
    .option('--event-map <path>', 'Path to EventMap.d.ts', EVENT_MAP_PATH)
    .option('--headless', 'Run browser headless (default true)', true)
    .option('--report <path>', 'Write JSON report to file')
    .parse(process.argv);

const opts = program.opts<{
    dryRun: boolean;
    update: boolean;
    events: boolean;
    generateDts?: string | boolean;
    onlyNew: boolean;
    class?: string;
    checkReal: boolean;
    demoUrl: string;
    dts: string;
    objectsDir: string;
    eventMap: string;
    headless: boolean;
    report?: string;
}>();

const isDryRun = !opts.update;

async function main(): Promise<void> {
    // ── Scrape ───────────────────────────────────────────────────────────
    console.log('\nScraping TX TextControl documentation (BFS)...');
    const scraper = new DocsScraper();
    await scraper.launch(opts.headless);

    let scrapedClasses = [];
    let scrapedEvents = [];
    try {
        const result = await scraper.scrapeAll();
        scrapedClasses = result.classes;
        scrapedEvents = result.events;
    } finally {
        await scraper.close();
    }

    // Filter to single class if requested
    if (opts.class) {
        scrapedClasses = scrapedClasses.filter(c => c.name === opts.class);
        if (scrapedClasses.length === 0) {
            console.error(`No class named '${opts.class}' found in scraped data.`);
            console.log('Available:', scrapedClasses.map((c: { name: string }) => c.name).join(', '));
            process.exit(1);
        }
    }

    console.log(`Scraped ${scrapedClasses.length} classes, ${scrapedEvents.length} events`);

    // ── EventMap diff/patch ───────────────────────────────────────────────
    if (opts.events || opts.update) {
        console.log('\nDiffing EventMap...');
        const declaredEvents = parseEventMap(opts.eventMap);
        const eventReport = diffEventMap(scrapedEvents, declaredEvents);
        printEventMapReport(eventReport);

        if (opts.update) {
            patchEventMap(opts.eventMap, eventReport, isDryRun);
        }

        if (opts.events && !opts.update) {
            // --events without --update: only do EventMap, skip the rest
            console.log('\nDone (events only).');
            return;
        }
    }

    // ── Generate d.ts from scratch ────────────────────────────────────────
    if (opts.generateDts !== undefined) {
        const outDir = typeof opts.generateDts === 'string'
            ? opts.generateDts
            : opts.objectsDir;
        console.log(`\nGenerating d.ts files → ${outDir}`);
        const files = generateAll(scrapedClasses);
        writeAll(files, outDir, isDryRun, opts.onlyNew ?? false);
        if (isDryRun) {
            console.log('\nDone (dry-run).');
            return;
        }
    }

    // ── Multi-class diff ──────────────────────────────────────────────────
    console.log('\nDiffing against lib/types/objects/...');
    const multiReport = diffAll(scrapedClasses, opts.objectsDir);
    printMultiClassReport(multiReport);

    if (opts.report) {
        fs.writeFileSync(path.resolve(opts.report), JSON.stringify(multiReport, null, 2), 'utf-8');
        console.log(`\nReport written to: ${opts.report}`);
    }

    if (opts.update) {
        patchAllObjectDts(opts.objectsDir, multiReport, isDryRun);
    }

    // ── Legacy TXTextControl.d.ts diff ────────────────────────────────────
    if (!opts.class) {
        const txClass = scrapedClasses.find((c: { name: string }) => c.name === 'TXTextControl');
        if (txClass) {
            console.log('\nLegacy diff: TXTextControl.d.ts...');
            const declared = readDeclaredMethods(opts.dts);
            const legacyReport = diff(txClass.methods, declared);
            printReport(legacyReport);

            if (opts.update) {
                patchDts(opts.dts, legacyReport, isDryRun);
            }
        }
    }

    // ── Real API inspection ───────────────────────────────────────────────
    if (opts.checkReal) {
        console.log('\nConnecting to demo app for real API inspection...');
        console.log('(Requires demo to be running: cd demo && npx live-server --port=8080)');
        const inspector = new RealApiInspector(opts.demoUrl);
        const realMethods = await inspector.fetchAndInspect();
        console.log(`Found ${realMethods.filter((m: { kind: string }) => m.kind === 'function').length} functions in real API`);

        const declared = readDeclaredMethods(opts.dts);
        const gaps = RealApiInspector.crossCheck(realMethods, declared);
        if (gaps.length === 0) {
            console.log('\n\x1b[32m✓ All real API methods are declared in d.ts\x1b[0m');
        } else {
            console.log(`\n\x1b[33mMethods in real API but missing from d.ts (${gaps.length}):\x1b[0m`);
            for (const g of gaps) console.log(`  \x1b[33m+ ${g.name}\x1b[0m`);
        }
    }

    console.log('\nDone.');
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
