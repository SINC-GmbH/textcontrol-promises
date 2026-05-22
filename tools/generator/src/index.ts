#!/usr/bin/env ts-node
import * as fs from 'fs';
import * as path from 'path';
import { Command } from 'commander';
import { parseDts, parseProperties, parseInterface } from './DtsParser';
import { classifyMethod } from './MethodClassifier';
import { generateMethod, generateTextControlContextFile, generateObjectBaseFile, writeExtensionStub } from './WrapperGenerator';
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
const OBJECTS_DIR = path.join(LIB_ROOT, 'types/objects');

const program = new Command();

program
    .name('textcontrol-generator')
    .description('Generates Promise-based JS wrapper classes from lib/types/TXTextControl.d.ts')
    .option('--dry-run', 'Print generated code without writing files (default)', false)
    .option('--write', 'Write generated files to disk')
    .option('--force', 'Overwrite existing generated/ files without asking')
    .option('--only-new', 'Only generate files that do not yet exist')
    .option('--method <name>', 'Generate and print only one specific method')
    .option('--objects', 'Also generate FooBase.js for all lib/types/objects/*.d.ts classes')
    .option('--class <name>', 'With --objects: generate only the named class (for spot-checking)')
    .option('--dts <path>', 'Path to the d.ts file to parse', DTS_PATH)
    .option('--out <path>', 'Output path for the generated context file', OUT_PATH)
    .parse(process.argv);

const opts = program.opts<{
    dryRun: boolean;
    write: boolean;
    force: boolean;
    onlyNew: boolean;
    method?: string;
    objects: boolean;
    class?: string;
    dts: string;
    out: string;
}>();

const isDryRun = !opts.write;
const LIB_SRC = path.join(LIB_ROOT, 'src');
const GENERATED_DIR = path.join(LIB_SRC, 'generated');

// ─── TextControlContextBase (always) ────────────────────────────────────────

console.log(`\nParsing: ${opts.dts}`);
const methods = parseDts(opts.dts);
const properties = parseProperties(opts.dts);
console.log(`Found ${methods.length} function declarations, ${properties.length} property declarations.\n`);

const classified = methods.map(classifyMethod);

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

// Regenerate CallbackType.js
const callbackTypeContent = generateCallbackTypeFile(CALLBACKS_DIR);
writeFile(CALLBACK_TYPE_OUT, callbackTypeContent, { dryRun: isDryRun, force: opts.force, onlyNew: false });

// TextControlContextBase.js
const generatedContent = generateTextControlContextFile(classified, properties, LIB_SRC);
writeFile(opts.out, generatedContent, { dryRun: isDryRun, force: opts.force, onlyNew: opts.onlyNew });

// ─── Object base classes (--objects) ────────────────────────────────────────

if (opts.objects) {
    const dtsFiles = fs.readdirSync(OBJECTS_DIR)
        .filter(f => f.endsWith('.d.ts'))
        .sort();

    // Filter to single class if --class is given
    const targets = opts.class
        ? dtsFiles.filter(f => path.basename(f, '.d.ts') === opts.class)
        : dtsFiles;

    if (opts.class && targets.length === 0) {
        console.error(`\nClass '${opts.class}' not found in ${OBJECTS_DIR}`);
        process.exit(1);
    }

    console.log(`\nGenerating object base classes (${targets.length} files)...`);

    const stats = { object: 0, collection: 0, 'value-object': 0, skip: 0, error: 0 };

    for (const file of targets) {
        const dtsPath = path.join(OBJECTS_DIR, file);
        const parsed = parseInterface(dtsPath);
        if (!parsed) {
            console.warn(`  Skipped (no interface): ${file}`);
            stats.skip++;
            continue;
        }

        const result = generateObjectBaseFile(parsed, LIB_SRC);
        if (!result) {
            if (opts.class) console.log(`  Skipped (kind=skip): ${parsed.name}`);
            stats.skip++;
            continue;
        }

        const { content, kind } = result;
        stats[kind]++;

        const outFile = path.join(GENERATED_DIR, `${parsed.name}Base.js`);
        if (opts.class) {
            // Single-class spot-check: always print
            console.log(`\n--- ${parsed.name}Base.js (${kind}) ---\n${content}`);
        } else {
            writeFile(outFile, content, { dryRun: isDryRun, force: opts.force, onlyNew: opts.onlyNew });
        }

        // Create lib/src/Foo.js stub if missing
        if (!opts.class) {
            writeExtensionStub(parsed.name, kind, LIB_SRC, isDryRun);
        }
    }

    console.log(
        `\nObject base classes: ${stats.object} object | ${stats.collection} collection | ${stats['value-object']} value-object | ${stats.skip} skipped`
    );
}

if (isDryRun) {
    console.log(`\nDry-run complete. Use --write to write the file to disk.`);
} else {
    console.log(`\nDone.`);
}
