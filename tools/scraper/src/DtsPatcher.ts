import * as fs from 'fs';
import * as path from 'path';
import { MultiClassDiffReport, ScrapedMethod } from './types';
import { MethodExecuter } from './executors/MethodExecuter';
import { PropertyExecuter } from './executors/PropertyExecuter';

/**
 * Converts a docs raw param string to TypeScript syntax.
 * Docs format: "<Type> name, [<Type> optName]"
 * Output:      "name: Type, optName?: Type"
 * Strips callback/errorCallback params.
 */
export function convertDocsParamsToTs(rawParams: string): string {
    if (!rawParams.trim()) return '';
    return rawParams
        .split(',')
        .map(part => {
            const trimmed = part.trim();
            const isOptional = trimmed.startsWith('[') && trimmed.endsWith(']');
            const inner = isOptional ? trimmed.slice(1, -1).trim() : trimmed;
            const m = inner.match(/^<([^>]+)>\s+(\w+)$/);
            if (!m) return `${inner}${isOptional ? '?' : ''}: any`;
            const [, typeName, paramName] = m;
            if (paramName.toLowerCase().includes('callback')) return null;
            return `${paramName}${isOptional ? '?' : ''}: ${typeName}`;
        })
        .filter((p): p is string => p !== null)
        .join(', ');
}

// ─── Multi-class patcher ─────────────────────────────────────────────────────

/**
 * Patches all affected lib/types/ d.ts files based on a MultiClassDiffReport.
 * Delegates to MethodExecuter (methods) and PropertyExecuter (properties).
 * Each ClassDiffReport carries the resolved filePath, so no dir lookup is needed.
 */
export function patchAllObjectDts(
    _dtsObjectsDir: string,
    report: MultiClassDiffReport,
    dryRun: boolean,
): void {
    let totalPatched = 0;

    for (const cls of report.perClass) {
        const hasMethodWork =
            cls.newMethods.length > 0 ||
            cls.removedMethods.length > 0 ||
            cls.signatureChanges.length > 0 ||
            cls.deprecationChanges.length > 0;
        const hasPropWork =
            cls.newProperties.length > 0 ||
            cls.removedProperties.length > 0;

        if (!hasMethodWork && !hasPropWork) continue;

        if (hasMethodWork) {
            MethodExecuter.patch(cls.filePath, {
                className: cls.className,
                filePath: cls.filePath,
                newMethods: cls.newMethods,
                removedMethods: cls.removedMethods,
                signatureChanges: cls.signatureChanges,
                deprecationChanges: cls.deprecationChanges,
            }, dryRun);
        }

        if (hasPropWork) {
            PropertyExecuter.patch(cls.filePath, {
                className: cls.className,
                filePath: cls.filePath,
                newProperties: cls.newProperties,
                removedProperties: cls.removedProperties,
            }, dryRun);
        }

        totalPatched++;
    }

    if (totalPatched === 0) {
        console.log('Nothing to patch in lib/types/.');
    }
}

