import * as fs from 'fs';
import * as path from 'path';

export interface WriteResult {
    filePath: string;
    written: boolean;
    isNew: boolean;
}

/** Shows a simple +/- line diff between old and new content. */
function printDiff(filePath: string, oldContent: string, newContent: string): void {
    const oldLines = oldContent.split('\n');
    const newLines = newContent.split('\n');
    const maxLines = Math.max(oldLines.length, newLines.length);

    console.log(`\n--- ${path.basename(filePath)} (existing)`);
    console.log(`+++ ${path.basename(filePath)} (generated)\n`);

    let unchanged = 0;
    for (let i = 0; i < maxLines; i++) {
        const oldLine = oldLines[i] ?? '';
        const newLine = newLines[i] ?? '';
        if (oldLine === newLine) {
            unchanged++;
        } else {
            if (unchanged > 0) {
                console.log(`  ... (${unchanged} unchanged lines)`);
                unchanged = 0;
            }
            if (oldLine !== undefined && oldLine !== '') console.log(`\x1b[31m- ${oldLine}\x1b[0m`);
            if (newLine !== undefined && newLine !== '') console.log(`\x1b[32m+ ${newLine}\x1b[0m`);
        }
    }
    if (unchanged > 0) console.log(`  ... (${unchanged} unchanged lines)`);
}

/**
 * Writes generated content to a file.
 * In dry-run mode, prints the content (or diff) to console instead.
 */
export function writeFile(
    filePath: string,
    content: string,
    options: { dryRun: boolean; force: boolean; onlyNew: boolean },
): WriteResult {
    const absPath = path.resolve(filePath);
    const exists = fs.existsSync(absPath);

    if (options.dryRun) {
        console.log(`\n${'='.repeat(70)}`);
        console.log(`FILE: ${absPath} ${exists ? '(exists)' : '(new)'}`);
        console.log('='.repeat(70));

        if (exists) {
            const existing = fs.readFileSync(absPath, 'utf-8');
            if (existing === content) {
                console.log('\x1b[32m✓ No changes\x1b[0m');
            } else {
                printDiff(absPath, existing, content);
            }
        } else {
            console.log(content);
        }
        return { filePath: absPath, written: false, isNew: !exists };
    }

    if (exists && options.onlyNew) {
        console.log(`\x1b[33mSKIP\x1b[0m ${absPath} (already exists, use --force to overwrite)`);
        return { filePath: absPath, written: false, isNew: false };
    }

    if (exists && !options.force) {
        const existing = fs.readFileSync(absPath, 'utf-8');
        if (existing === content) {
            console.log(`\x1b[32mUNCHANGED\x1b[0m ${absPath}`);
            return { filePath: absPath, written: false, isNew: false };
        }
        console.log(`\x1b[33mSKIP\x1b[0m ${absPath} (changed — use --force to overwrite)`);
        printDiff(absPath, existing, content);
        return { filePath: absPath, written: false, isNew: false };
    }

    fs.mkdirSync(path.dirname(absPath), { recursive: true });
    fs.writeFileSync(absPath, content, 'utf-8');
    console.log(`\x1b[32mWRITE\x1b[0m ${absPath}${!exists ? ' (new)' : ''}`);
    return { filePath: absPath, written: true, isNew: !exists };
}
