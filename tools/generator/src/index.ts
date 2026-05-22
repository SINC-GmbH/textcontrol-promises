#!/usr/bin/env ts-node
import * as fs from 'fs';
import * as path from 'path';
import { Command } from 'commander';
import { parseDts, parseProperties } from './DtsParser';
import { classifyMethod } from './MethodClassifier';
import { generateMethod, generateTextControlContextFile } from './WrapperGenerator';
import { writeFile } from './FileWriter';

/**
 * Reads each .d.ts in the callbacks directory, extracts the actual exported type alias name
 * (e.g. "export type RequestPaperSizesCallback = ..."), and generates CallbackType.js.
 */
function generateCallbackTypeFile(callbacksDir: string): string {
    const files = fs.readdirSync(callbacksDir)
        .filter(f => f.endsWith('.d.ts'))
        .sort();

    const entries: string[] = [];
    const exportTypeRe = /export\s+type\s+(\w+)(?:<[^>]+>)?\s*=/;

    for (const file of files) {
        const content = fs.readFileSync(path.join(callbacksDir, file), 'utf-8');
        const match = exportTypeRe.exec(content);
        if (!match) continue;
        const typeName = match[1];
        entries.push(`    /** @type {"${typeName}"} */\n    static ${typeName} = "${typeName}";`);
    }

    return `export class CallbackType {\n${entries.join('\n')}\n}\n`;
}

const LIB_ROOT = path.resolve(__dirname, '../../../lib');
const DTS_PATH = path.join(LIB_ROOT, 'types/TXTextControl.d.ts');
const OUT_PATH = path.join(LIB_ROOT, 'src/generated/TextControlContextBase.js');
const CALLBACKS_DIR = path.join(LIB_ROOT, 'types/callbacks');
const CALLBACK_TYPE_OUT = path.join(LIB_ROOT, 'src/helper/CallbackType.js');

const program = new Command();

program
    .name('textcontrol-generator')
    .description('Generates Promise-based JS wrapper classes from lib/types/TXTextControl.d.ts')
    .option('--dry-run', 'Print generated code without writing files (default)', false)
    .option('--write', 'Write generated files to disk')
    .option('--force', 'Overwrite existing files without asking')
    .option('--only-new', 'Only generate files that do not yet exist')
    .option('--method <name>', 'Generate and print only one specific method')
    .option('--dts <path>', 'Path to the d.ts file to parse', DTS_PATH)
    .option('--out <path>', 'Output path for the generated file', OUT_PATH)
    .parse(process.argv);

const opts = program.opts<{
    dryRun: boolean;
    write: boolean;
    force: boolean;
    onlyNew: boolean;
    method?: string;
    dts: string;
    out: string;
}>();

const isDryRun = !opts.write;

const LIB_SRC = path.join(LIB_ROOT, 'src');

console.log(`\nParsing: ${opts.dts}`);
const methods = parseDts(opts.dts);
const properties = parseProperties(opts.dts);
console.log(`Found ${methods.length} function declarations, ${properties.length} property declarations.\n`);

const classified = methods.map(classifyMethod);

// Stats
const byKind = { passthrough: 0, 'promise-void': 0, 'promise-value': 0 };
for (const m of classified) byKind[m.kind]++;
console.log(`Classification: ${byKind['passthrough']} passthrough | ${byKind['promise-void']} promise-void | ${byKind['promise-value']} promise-value`);

if (opts.method) {
    const target = classified.find(m => m.name === opts.method);
    if (!target) {
        console.error(`\nMethod '${opts.method}' not found in parsed declarations.`);
        console.log('Available methods:', classified.map(m => m.name).join(', '));
        process.exit(1);
    }
    console.log(`\n--- Generated method: ${target.name} (${target.kind}) ---\n`);
    console.log(generateMethod(target));
    process.exit(0);
}

// Regenerate CallbackType.js from actual exported type names in lib/types/callbacks/
const callbackTypeContent = generateCallbackTypeFile(CALLBACKS_DIR);
writeFile(CALLBACK_TYPE_OUT, callbackTypeContent, {
    dryRun: isDryRun,
    force: opts.force,
    onlyNew: false,
});

const generatedContent = generateTextControlContextFile(classified, properties, LIB_SRC);

writeFile(opts.out, generatedContent, {
    dryRun: isDryRun,
    force: opts.force,
    onlyNew: opts.onlyNew,
});

if (isDryRun) {
    console.log(`\nDry-run complete. Use --write to write the file to disk.`);
} else {
    console.log(`\nDone.`);
}
