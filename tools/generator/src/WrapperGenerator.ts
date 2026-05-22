import * as fs from 'fs';
import * as path from 'path';
import { ClassifiedMethod } from './MethodClassifier';
import { ParsedProperty } from './DtsParser';
import { getPromiseReturnType } from './CallbackMapper';

const PRIMITIVES = new Set(['string', 'number', 'boolean', 'null', 'undefined', 'void', 'any', 'unknown', 'never']);

/** Formats a TypeScript type string for use in a JSDoc @param or @returns tag. */
function formatJsDocType(tsType: string): string {
    const parts = tsType.split(/\s*[\|&]\s*/);
    const allPrimitive = parts.every(p => PRIMITIVES.has(p.trim()));
    if (allPrimitive) return tsType;
    return tsType;
}

function buildJsDoc(method: ClassifiedMethod): string {
    const lines: string[] = ['    /**'];

    if (method.jsDoc.description) {
        lines.push(`     * ${method.jsDoc.description}`);
    }

    if (method.jsDoc.deprecated) {
        lines.push(`     * @deprecated`);
    }

    for (const p of method.nonCallbackParams) {
        const desc = method.jsDoc.paramDescriptions.get(p.name) ?? '';
        const typeStr = formatJsDocType(p.typeText);
        lines.push(`     * @param {${typeStr}} ${p.name}${desc ? ' ' + desc : ''}`);
    }

    if (method.kind !== 'passthrough') {
        const returnType = method.mainCallback
            ? getPromiseReturnType(method.mainCallback.typeText)
            : 'void';
        const retDesc = method.jsDoc.returnDescription;
        lines.push(`     * @returns {Promise<${returnType}>}${retDesc ? ' ' + retDesc : ''}`);
    } else if (method.returnTypeText && method.returnTypeText !== 'void') {
        lines.push(`     * @returns {${method.returnTypeText}}`);
    }

    lines.push(`     */`);
    return lines.join('\n');
}

function buildMethodBody(method: ClassifiedMethod): string {
    const paramList = method.nonCallbackParams.map(p => p.name).join(', ');
    const signature = `    ${method.name}(${paramList})`;

    if (method.kind === 'passthrough') {
        return [
            signature + ' {',
            `        return TXTextControl.${method.name}(${paramList});`,
            '    }',
        ].join('\n');
    }

    const args: string[] = [
        `TXTextControl.${method.name}`,
        ...method.requestHelperArgs.map(a => (a.kind === 'param' ? a.name : a.constant)),
    ];

    const inlineArgs = args.join(', ');
    const inline = `        return RequestHelper.Promise(${inlineArgs});`;
    if (inline.length <= 100) {
        return [signature + ' {', inline, '    }'].join('\n');
    }

    const multiArgs = args.map(a => `            ${a}`).join(',\n');
    return [
        signature + ' {',
        '        return RequestHelper.Promise(',
        multiArgs,
        '        );',
        '    }',
    ].join('\n');
}

/** Generates a single wrapper method string. */
export function generateMethod(method: ClassifiedMethod): string {
    return [buildJsDoc(method), buildMethodBody(method)].join('\n');
}

/**
 * Scans lib/src/ for JS wrapper class files and returns a Set of class names
 * that have a corresponding implementation file (e.g. "TableCollection").
 */
function discoverWrapperClasses(libSrcDir: string): Set<string> {
    const skip = new Set(['Collection', 'TextControlContext', 'TextControlContextBase', 'index']);
    try {
        return new Set(
            fs.readdirSync(libSrcDir)
                .filter(f => f.endsWith('.js') && !f.includes('.generated.'))
                .map(f => path.basename(f, '.js'))
                .filter(n => !skip.has(n)),
        );
    } catch {
        return new Set();
    }
}

function buildPropertyGetter(prop: ParsedProperty, wrapperClasses: Set<string>): string {
    const lines: string[] = ['    /**'];
    if (prop.description) lines.push(`     * ${prop.description}`);
    if (prop.deprecated) lines.push(`     * @deprecated`);
    lines.push(`     * @type {${prop.typeText}}`);
    lines.push(`     */`);

    const hasWrapper = wrapperClasses.has(prop.typeText);
    if (hasWrapper) {
        lines.push(`    get ${prop.name}() { return new ${prop.typeText}(TXTextControl.${prop.name}); }`);
    } else {
        lines.push(`    get ${prop.name}() { return TXTextControl.${prop.name}; }`);
    }
    return lines.join('\n');
}

/**
 * Generates the complete TextControlContextBase class file from classified methods
 * and d.ts property declarations.
 */
export function generateTextControlContextFile(
    methods: ClassifiedMethod[],
    properties: ParsedProperty[],
    libSrcDir: string,
): string {
    const wrapperClasses = discoverWrapperClasses(libSrcDir);

    // Collect wrapper imports needed for property getters
    const usedWrappers = properties
        .map(p => p.typeText)
        .filter(t => wrapperClasses.has(t));
    const wrapperImports = [...new Set(usedWrappers)]
        .sort()
        .map(cls => `import { ${cls} } from './${cls}.js';`)
        .join('\n');

    const methodStrings = methods.map(m => generateMethod(m)).join('\n\n');
    const getterStrings = properties.map(p => buildPropertyGetter(p, wrapperClasses)).join('\n\n');

    const imports = [
        wrapperImports,
        `import { CallbackType, RequestHelper } from './helper/index.js';`,
    ].filter(Boolean).join('\n');

    return `${imports}
/** @import * as TXTextControlTypeDefinition from "../types/TXTextControlTypeDefinition" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/TXTextControl.d.ts.
 */
export class TextControlContextBase {
${methodStrings}

    //#region properties

${getterStrings}

    //#endregion
}
`;
}
