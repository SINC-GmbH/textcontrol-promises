#!/usr/bin/env ts-node
import * as path from 'path';
import * as fs from 'fs';
import { Command } from 'commander';
import { DocsScraper } from './DocsScraper';
import { readDeclaredMethods } from './DtsReader';
import { diff, printReport } from './Differ';
import { patchDts } from './DtsPatcher';
import { RealApiInspector } from './RealApiInspector';

const LIB_ROOT = path.resolve(__dirname, '../../../lib');
const DTS_PATH = path.join(LIB_ROOT, 'types/TXTextControl.d.ts');
const DEFAULT_DEMO_URL = 'http://localhost:8080';

const program = new Command();

program
    .name('textcontrol-scraper')
    .description('Scrapes TX TextControl API docs and validates against d.ts declarations')
    .option('--dry-run', 'Show diff without modifying any files (default)', false)
    .option('--update', 'Patch d.ts with new method stubs found in the docs')
    .option('--check-real', 'Navigate to running demo app and enumerate real TXTextControl API')
    .option('--demo-url <url>', 'Demo app URL for --check-real (must be running)', DEFAULT_DEMO_URL)
    .option('--dts <path>', 'Path to TXTextControl.d.ts', DTS_PATH)
    .option('--headless', 'Run browser headless (default true)', true)
    .option('--report <path>', 'Write JSON report to file')
    .parse(process.argv);

const opts = program.opts<{
    dryRun: boolean;
    update: boolean;
    checkReal: boolean;
    demoUrl: string;
    dts: string;
    headless: boolean;
    report?: string;
}>();

const isDryRun = !opts.update;

async function main(): Promise<void> {
    console.log('Reading d.ts declarations...');
    const declared = readDeclaredMethods(opts.dts);
    console.log(`Found ${declared.length} declared methods in d.ts`);

    console.log('\nScraping TX TextControl documentation...');
    const scraper = new DocsScraper();
    await scraper.launch(opts.headless);
    let scraped = [];
    try {
        scraped = await scraper.scrapeAll();
    } finally {
        await scraper.close();
    }
    console.log(`Scraped ${scraped.length} methods from docs`);

    const report = diff(scraped, declared);
    printReport(report);

    if (opts.report) {
        fs.writeFileSync(path.resolve(opts.report), JSON.stringify(report, null, 2), 'utf-8');
        console.log(`\nReport written to: ${opts.report}`);
    }

    if (opts.update) {
        patchDts(opts.dts, report, isDryRun);
    }

    if (opts.checkReal) {
        console.log('\nConnecting to demo app for real API inspection...');
        console.log('(Requires demo to be running: cd demo && npx live-server --port=8080)');
        const inspector = new RealApiInspector(opts.demoUrl);
        const realMethods = await inspector.fetchAndInspect();
        console.log(`Found ${realMethods.filter(m => m.kind === 'function').length} functions in real API`);

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
