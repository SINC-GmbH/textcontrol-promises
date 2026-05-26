import * as fs from 'fs';
import * as path from 'path';

/**
 * Builds a flat name→filePath map across multiple lib/types/ subdirectories.
 * The first directory that contains a given name wins (caller controls priority).
 * This lets the scraper treat objects/, args/, enums/, callbacks/ as one namespace
 * without physically moving files.
 */
export class TypesIndex {
    private readonly index: Map<string, string> = new Map();

    constructor(dirs: string[]) {
        for (const dir of dirs) {
            if (!fs.existsSync(dir)) continue;
            for (const file of fs.readdirSync(dir)) {
                if (!file.endsWith('.d.ts')) continue;
                const name = path.basename(file, '.d.ts');
                if (name === 'index') continue;
                if (!this.index.has(name)) {
                    this.index.set(name, path.join(dir, file));
                }
            }
        }
    }

    find(name: string): string | undefined {
        return this.index.get(name);
    }

    has(name: string): boolean {
        return this.index.has(name);
    }

    /** All declared class names across all type directories. */
    allNames(): Set<string> {
        return new Set(this.index.keys());
    }
}
