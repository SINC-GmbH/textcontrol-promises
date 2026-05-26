import * as fs from 'fs';
import { ScrapedClass } from '../types';
import { TypesIndex } from '../TypesIndex';

const C = {
    reset: '\x1b[0m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
};

export interface ClassChanges {
    /** Scraped class names not present in any lib/types/ directory. */
    newClasses: string[];
    /** Names present in lib/types/ but absent from the scraped docs. */
    removedClasses: string[];
}

export class ClassExecuter {
    /**
     * Detects new and removed classes by comparing scraped names against the TypesIndex.
     * Anything already in the index (in any subdir) is not counted as "new".
     */
    /**
     * Detects new and removed classes by comparing scraped names against the TypesIndex.
     * Anything already in the index (in any subdir) is not counted as "new".
     */
    static diff(scraped: ScrapedClass[], typesIndex: TypesIndex): ClassChanges {
        const scrapedNames = new Set(scraped.map(c => c.name));
        const declaredNames = typesIndex.allNames();

        const newClasses = scraped
            .filter(c => !declaredNames.has(c.name))
            .map(c => c.parentName ? `${c.parentName}.${c.name}` : c.name);
        const removedClasses = [...declaredNames].filter(n =>
            n !== 'index' && !scrapedNames.has(n) && !ClassExecuter.isScraperIgnored(typesIndex.find(n)),
        );

        return { newClasses, removedClasses };
    }

    private static isScraperIgnored(filePath: string | undefined): boolean {
        if (!filePath) return false;
        try {
            const content = fs.readFileSync(filePath, 'utf-8');
            return /\/\*\*[^*]*(?:\*(?!\/)[^*]*)*@scraper-ignore[^*]*(?:\*(?!\/)[^*]*)*\*\/\s*export\s+(?:interface|class|type|enum)/.test(content);
        } catch {
            return false;
        }
    }

    static print({ newClasses, removedClasses }: ClassChanges): void {
        if (newClasses.length > 0) {
            console.log(`\n${C.yellow}New classes in docs (${newClasses.length}):${C.reset}`);
            for (const n of newClasses) console.log(`  ${C.yellow}[NEW CLASS]${C.reset} ${n}`);
        }
        if (removedClasses.length > 0) {
            console.log(`\n${C.red}Classes in lib/types/ but not in docs (${removedClasses.length}):${C.reset}`);
            for (const n of removedClasses) console.log(`  ${C.red}[REMOVED CLASS]${C.reset} ${n}`);
        }
    }
}
