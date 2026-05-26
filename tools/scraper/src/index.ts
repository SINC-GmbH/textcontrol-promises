#!/usr/bin/env ts-node
import * as path from 'path';
import * as fs from 'fs';
import { Command } from 'commander';
import { ScrapedClass, ScrapedEvent, inferCategory } from './types';
import { TypesIndex } from './TypesIndex';
import { DocsScraper } from './DocsScraper';
import { diffAll, printMultiClassReport } from './Differ';
import { patchAllObjectDts } from './DtsPatcher';
import { parseEventMap, diffEventMap, printEventMapReport } from './EventMapDiffer';
import { patchEventMap } from './EventMapPatcher';
import { generateAll, writeAll } from './DtsGenerator';
import { RealApiInspector } from './RealApiInspector';

const LIB_ROOT = path.resolve(__dirname, '../../../lib');
const OBJECTS_DIR = path.join(LIB_ROOT, 'types/objects');
const ARGS_DIR = path.join(LIB_ROOT, 'types/args');
const ENUMS_DIR = path.join(LIB_ROOT, 'types/enums');
const CALLBACKS_DIR = path.join(LIB_ROOT, 'types/callbacks');
const EVENT_MAP_PATH = path.join(LIB_ROOT, 'types/helper/EventMap.d.ts');
const DEFAULT_DEMO_URL = 'http://localhost:8080';
const CACHE_PATH = path.resolve(__dirname, '../scrape-cache.json');

// ── Cache helpers ─────────────────────────────────────────────────────────────

interface ScrapeCache {
    scrapedAt: string;
    classes: ScrapedClass[];
    events: ScrapedEvent[];
}

function loadCache(): ScrapeCache | null {
    if (!fs.existsSync(CACHE_PATH)) return null;
    try {
        return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8')) as ScrapeCache;
    } catch {
        return null;
    }
}

function saveCache(classes: ScrapedClass[], events: ScrapedEvent[]): void {
    const cache: ScrapeCache = { scrapedAt: new Date().toISOString(), classes, events };
    fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2), 'utf-8');
    console.log(`  Cache saved: ${CACHE_PATH}`);
}

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
    .option('--objects-dir <path>', 'Path to lib/types/objects/ directory', OBJECTS_DIR)
    .option('--event-map <path>', 'Path to EventMap.d.ts', EVENT_MAP_PATH)
    .option('--headless', 'Run browser headless (default true)', true)
    .option('--report <path>', 'Write JSON report to file')
    .option('--refresh', 'Ignore cache and re-scrape all documentation pages (overwrites cache)')
    .option('--refresh-urls', 'Fast mode: re-discover class URLs via BFS (no method scraping), merge into cache')
    .option('--concurrency <n>', 'Number of parallel browser pages for scraping', '5')
    .option('--delay <ms>', 'Milliseconds between page loads per worker (rate-limit guard)', '0')
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
    objectsDir: string;
    eventMap: string;
    headless: boolean;
    report?: string;
    refresh: boolean;
    refreshUrls: boolean;
    concurrency: string;
    delay: string;
}>();

const concurrency = Math.max(1, parseInt(opts.concurrency, 10) || 5);
const delayMs = Math.max(0, parseInt(opts.delay, 10) || 0);
const isDryRun = !opts.update;

async function main(): Promise<void> {
    // ── --refresh-urls: fast URL-discovery pass only ──────────────────────────
    if (opts.refreshUrls) {
        console.log('\nDiscovering class URLs (fast BFS, no method scraping)...');
        const scraper = new DocsScraper();
        await scraper.launch(opts.headless);
        let discovered: { name: string; sourceUrl: string }[] = [];
        try {
            discovered = await scraper.scrapeUrlsOnly(concurrency);
        } finally {
            await scraper.close();
        }
        console.log(`\nDiscovered ${discovered.length} class URLs`);

        // Merge into existing cache: update sourceUrl for known classes, add stubs for new ones
        const existing = loadCache();
        const byName = new Map<string, ScrapedClass>((existing?.classes ?? []).map(c => [c.name, c]));
        for (const { name, sourceUrl } of discovered) {
            const cls = byName.get(name);
            if (cls) {
                cls.sourceUrl = sourceUrl;
            } else {
                byName.set(name, { name, description: '', methods: [], properties: [], sourceUrl, deprecated: false, isClass: false });
            }
        }
        saveCache([...byName.values()], existing?.events ?? []);
        console.log('\nDone (URL map updated — run without --refresh-urls to scrape definitions).');
        return;
    }

    // ── Scrape or load from cache ─────────────────────────────────────────────
    let scrapedClasses: ScrapedClass[] = [];
    let scrapedEvents: ScrapedEvent[] = [];

    const existingCache = loadCache();
    const allFullyScraped = existingCache?.classes.every(c => c.fullyScraped) ?? false;

    if (!opts.refresh && existingCache && allFullyScraped) {
        console.log(`\nLoaded from cache (scraped at ${existingCache.scrapedAt})`);
        console.log('  Use --refresh to re-scrape, or --refresh-urls to update URL map only.');
        scrapedClasses = existingCache.classes;
        scrapedEvents = existingCache.events;
    } else {
        if (existingCache && !opts.refresh) {
            const remaining = existingCache.classes.filter(c => !c.fullyScraped).length;
            const done = existingCache.classes.filter(c => c.fullyScraped).length;
            console.log(`\nResuming scrape (${done} cached, ~${remaining} stubs + newly discovered to fetch)...`);
        } else {
            console.log('\nScraping TX TextControl documentation (BFS)...');
        }

        const resume = opts.refresh ? [] : (existingCache?.classes ?? []);

        // Keep a running list so SIGINT can save partial progress
        let partialClasses: ScrapedClass[] = [...resume.filter(c => c.fullyScraped)];
        let partialEvents: ScrapedEvent[] = existingCache?.events ?? [];

        const scraper = new DocsScraper();
        const scrapeStart = Date.now();

        const sigintHandler = () => {
            console.log('\n\nInterrupted — saving partial cache...');
            saveCache(partialClasses, partialEvents);
            process.exit(0);
        };
        process.on('SIGINT', sigintHandler);

        try {
            await scraper.launch(opts.headless);
            const result = await scraper.scrapeAll({
                resume,
                concurrency,
                delayMs,
                onClassScraped: (cls) => {
                    partialClasses = [...partialClasses.filter(c => c.sourceUrl !== cls.sourceUrl), cls];
                },
            });
            scrapedClasses = result.classes;
            scrapedEvents = result.events.length > 0 ? result.events : partialEvents;
        } finally {
            await scraper.close();
            process.off('SIGINT', sigintHandler);
        }

        const elapsedSec = ((Date.now() - scrapeStart) / 1000).toFixed(1);
        const totalMethods = scrapedClasses.reduce((n, c) => n + c.methods.length, 0);
        const failed = scrapedClasses.filter(c => !c.fullyScraped).length;
        console.log('\n── Scrape summary ──────────────────────────────────');
        console.log(`  Time         : ${elapsedSec}s`);
        console.log(`  Classes      : ${scrapedClasses.length} total  (${scrapedClasses.length - failed} ok, ${failed} failed)`);
        console.log(`  Methods      : ${totalMethods}`);
        console.log(`  Events       : ${scrapedEvents.length}`);
        console.log(`  Workers      : ${concurrency}  delay: ${delayMs}ms`);
        saveCache(scrapedClasses, scrapedEvents);
    }

    // Deduplicate by class name: keep the entry with the most methods when duplicates exist.
    // Old-style TXTextControl-namespaced pages (ref.javascript.txtextcontrol.CLASSNAME.object.htm)
    // can leave stale duplicates in the cache with fewer methods than the canonical new-style page.
    const deduped = new Map<string, ScrapedClass>();
    for (const cls of scrapedClasses) {
        const existing = deduped.get(cls.name);
        if (!existing || cls.methods.length > existing.methods.length) {
            // Preserve parentName/enumMembers from the entry we're replacing — the winner
            // (more methods) may have been discovered via the API index (no parent context)
            // while the loser was discovered via a property link (has parent context).
            deduped.set(cls.name, {
                ...cls,
                parentName: cls.parentName ?? existing?.parentName,
                enumMembers: cls.enumMembers ?? existing?.enumMembers,
            });
        }
    }
    scrapedClasses = [...deduped.values()];

    // Filter to single class if requested
    if (opts.class) {
        const filtered = scrapedClasses.filter(c => c.name === opts.class);
        if (filtered.length === 0) {
            console.error(`No class named '${opts.class}' found in scraped data.`);
            console.log('Available:', scrapedClasses.map(c => c.name).join(', '));
            process.exit(1);
        }
        scrapedClasses = filtered;
    }

    // Apply category inference to all scraped classes (idempotent)
    for (const cls of scrapedClasses) {
        if (!cls.category) {
            // Enums have no methods and no EventArgs/Callback suffix — infer directly
            cls.category = cls.isEnum ? 'value-object' : inferCategory(cls.name, cls.methods);
        }
    }

    console.log(`Using ${scrapedClasses.length} classes, ${scrapedEvents.length} events`);

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
    const allTypeDirs = [opts.objectsDir, ARGS_DIR, ENUMS_DIR, CALLBACKS_DIR, path.join(LIB_ROOT, 'types')];
    const typesIndex = new TypesIndex(allTypeDirs);
    console.log('\nDiffing against lib/types/ (objects + args + enums + callbacks)...');
    const multiReport = diffAll(scrapedClasses, typesIndex, allTypeDirs);
    printMultiClassReport(multiReport);

    if (opts.report) {
        fs.writeFileSync(path.resolve(opts.report), JSON.stringify(multiReport, null, 2), 'utf-8');
        console.log(`\nReport written to: ${opts.report}`);
    }

    if (opts.update) {
        patchAllObjectDts(opts.objectsDir, multiReport, isDryRun); // first arg kept for legacy compat
    }

    // ── Real API inspection ───────────────────────────────────────────────
    if (opts.checkReal) {
        console.log('\nConnecting to demo app for real API inspection...');
        console.log('(Requires demo to be running: cd demo && npx live-server --port=8080)');
        const inspector = new RealApiInspector(opts.demoUrl);
        const treeReport = await inspector.fetchAndInspectTree();
        const crossCheck = RealApiInspector.crossCheckAll(
            treeReport,
            opts.objectsDir,
            ARGS_DIR,
            ENUMS_DIR,
            CALLBACKS_DIR,
        );
        RealApiInspector.printTreeReport(treeReport, crossCheck);
    }

    console.log('\nDone.');
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
