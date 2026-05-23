import {
    ScrapedClass, DeclaredInterface,
    ClassDiffReport, MultiClassDiffReport,
} from './types';
import { TypesIndex } from './TypesIndex';
import { ClassExecuter } from './executors/ClassExecuter';
import { MethodExecuter, readDeclaredInterface, likelyTypo } from './executors/MethodExecuter';
import { PropertyExecuter } from './executors/PropertyExecuter';

// ─── Re-exports for backward compat ─────────────────────────────────────────

export { likelyTypo, readDeclaredInterface };

// ─── Multi-class diff ────────────────────────────────────────────────────────

/**
 * Diffs all scraped classes against every lib/types/ subdirectory via TypesIndex.
 * Each class is processed by MethodExecuter + PropertyExecuter.
 * ClassExecuter handles new/removed class detection.
 */
export function diffAll(
    scraped: ScrapedClass[],
    typesIndex: TypesIndex,
    searchDirs: string[],
): MultiClassDiffReport {
    const { newClasses, removedClasses } = ClassExecuter.diff(scraped, typesIndex);

    const perClass: ClassDiffReport[] = [];
    for (const cls of scraped) {
        const filePath = typesIndex.find(cls.name);
        if (!filePath) continue;
        // Enums have no methods or properties to diff — their members are the enum values
        if (cls.isEnum) continue;

        const methodReport = MethodExecuter.diff(cls, filePath, searchDirs);
        const propertyReport = PropertyExecuter.diff(cls, filePath);

        perClass.push({
            className: cls.name,
            sourceUrl: cls.sourceUrl,
            category: cls.category,
            filePath,
            newMethods: methodReport.newMethods,
            removedMethods: methodReport.removedMethods,
            signatureChanges: methodReport.signatureChanges,
            deprecationChanges: methodReport.deprecationChanges,
            newProperties: propertyReport.newProperties,
            removedProperties: propertyReport.removedProperties,
        });
    }

    const stats = {
        totalClasses: scraped.length,
        totalNewMethods: perClass.reduce((s, r) => s + r.newMethods.length, 0),
        totalRemovedMethods: perClass.reduce((s, r) => s + r.removedMethods.length, 0),
        totalSignatureChanges: perClass.reduce((s, r) => s + r.signatureChanges.length, 0),
        totalNewClasses: newClasses.length,
        totalRemovedClasses: removedClasses.length,
        totalNewProperties: perClass.reduce((s, r) => s + r.newProperties.length, 0),
        totalRemovedProperties: perClass.reduce((s, r) => s + r.removedProperties.length, 0),
    };

    return { perClass, newClasses, removedClasses, stats };
}

export function printMultiClassReport(report: MultiClassDiffReport): void {
    console.log('\n' + '='.repeat(70));
    console.log('MULTI-CLASS DIFF REPORT');
    console.log('='.repeat(70));

    ClassExecuter.print({ newClasses: report.newClasses, removedClasses: report.removedClasses });

    const methodReports = report.perClass.map(c => ({
        className: c.className,
        filePath: c.filePath,
        newMethods: c.newMethods,
        removedMethods: c.removedMethods,
        signatureChanges: c.signatureChanges,
        deprecationChanges: c.deprecationChanges,
    }));
    MethodExecuter.print(methodReports);

    const propertyReports = report.perClass.map(c => ({
        className: c.className,
        filePath: c.filePath,
        newProperties: c.newProperties,
        removedProperties: c.removedProperties,
    }));
    PropertyExecuter.print(propertyReports);

    console.log('\n' + '-'.repeat(70));
    console.log(`Classes scraped:       ${report.stats.totalClasses}`);
    console.log(`New classes:           \x1b[33m${report.stats.totalNewClasses}\x1b[0m`);
    console.log(`Removed classes:       \x1b[31m${report.stats.totalRemovedClasses}\x1b[0m`);
    console.log(`New methods:           \x1b[33m${report.stats.totalNewMethods}\x1b[0m`);
    console.log(`Removed methods:       \x1b[31m${report.stats.totalRemovedMethods}\x1b[0m`);
    console.log(`Signature changes:     \x1b[36m${report.stats.totalSignatureChanges}\x1b[0m`);
    console.log(`New properties:        \x1b[33m${report.stats.totalNewProperties}\x1b[0m`);
    console.log(`Removed properties:    \x1b[31m${report.stats.totalRemovedProperties}\x1b[0m`);
}

// ─── Legacy single-class diff (kept for TXTextControl.d.ts workflow) ─────────

export function diffClass(scraped: ScrapedClass, declared: DeclaredInterface): ClassDiffReport {
    const methodReport = MethodExecuter.diff(scraped, declared.filePath);
    return {
        className: scraped.name,
        sourceUrl: scraped.sourceUrl,
        category: scraped.category,
        filePath: declared.filePath,
        newMethods: methodReport.newMethods,
        removedMethods: methodReport.removedMethods,
        signatureChanges: methodReport.signatureChanges,
        deprecationChanges: methodReport.deprecationChanges,
        newProperties: [],
        removedProperties: [],
    };
}

