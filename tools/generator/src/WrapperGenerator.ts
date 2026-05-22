import { ClassifiedMethod } from './MethodClassifier';
import { getPromiseReturnType } from './CallbackMapper';

const PRIMITIVES = new Set(['string', 'number', 'boolean', 'null', 'undefined', 'void', 'any', 'unknown', 'never']);

/** Formats a TypeScript type string for use in a JSDoc @param or @returns tag. */
function formatJsDocType(tsType: string): string {
    // Check if the type is purely primitive-ish (no TX-specific named types)
    const parts = tsType.split(/\s*[\|&]\s*/);
    const allPrimitive = parts.every(p => PRIMITIVES.has(p.trim()));
    if (allPrimitive) return tsType;
    // Use the raw type; callers can add TXTextControlTypeDefinition. prefix as needed
    return tsType;
}

function buildJsDoc(method: ClassifiedMethod): string {
    const lines: string[] = ['    /**'];

    if (method.jsDoc.description) {
        // Wrap long descriptions
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

    // Build RequestHelper.Promise argument list
    const args: string[] = [
        `TXTextControl.${method.name}`,
        ...method.requestHelperArgs.map(a => (a.kind === 'param' ? a.name : a.constant)),
    ];

    // Inline if args fit in ~100 chars, otherwise multi-line
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

/** Generates a single wrapper method string for insertion into a class body. */
export function generateMethod(method: ClassifiedMethod): string {
    return [buildJsDoc(method), buildMethodBody(method)].join('\n');
}

/**
 * Generates a complete TextControlContext-style class file from a list of classified methods.
 * Produces a JS file with JSDoc annotations (no TypeScript).
 */
export function generateTextControlContextFile(methods: ClassifiedMethod[]): string {
    const methodStrings = methods.map(m => generateMethod(m)).join('\n\n');

    return `import { CallbackType, RequestHelper } from './helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../types/TXTextControlTypeDefinition" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/TXTextControl.d.ts.
 */
export class TextControlContextGenerated {
${methodStrings}
}
`;
}
