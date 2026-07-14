import * as fs from 'fs';
import * as path from 'path';

interface ParsedCallback {
    typeName: string;
    /** Ordered parameter names of the callback's function signature. */
    params: string[];
}

/**
 * Splits a parameter-list string on top-level commas, ignoring commas nested inside
 * `()`, `{}`, `[]` or `<>` (e.g. an inline object type or a generic type argument).
 */
function splitTopLevelParams(paramList: string): string[] {
    const parts: string[] = [];
    let depth = 0;
    let current = '';
    for (const ch of paramList) {
        if ('([{<'.includes(ch)) depth++;
        else if (')]}>'.includes(ch)) depth--;
        if (ch === ',' && depth === 0) {
            parts.push(current);
            current = '';
            continue;
        }
        current += ch;
    }
    if (current.trim()) parts.push(current);
    return parts;
}

/** Extracts the substring inside the outermost parens of a `(...) => void` signature. */
function extractParamList(signatureAfterEquals: string): string {
    const start = signatureAfterEquals.indexOf('(');
    let depth = 0;
    let end = start;
    for (let i = start; i < signatureAfterEquals.length; i++) {
        const ch = signatureAfterEquals[i];
        if ('([{<'.includes(ch)) depth++;
        else if (')]}>'.includes(ch)) {
            depth--;
            if (depth === 0) {
                end = i;
                break;
            }
        }
    }
    return signatureAfterEquals.slice(start + 1, end);
}

/** Parses a single callback .d.ts file into its type name and ordered parameter names. */
function parseCallbackFile(filePath: string): ParsedCallback | null {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = /export\s+type\s+(\w+)(?:<[^>]*>)?\s*=\s*([\s\S]*?);/.exec(content);
    if (!match) return null;

    const typeName = match[1];
    const signature = match[2];
    if (!signature.includes('=>')) return null; // not a function type — shouldn't happen for callbacks

    const paramList = extractParamList(signature).trim();
    if (!paramList) return { typeName, params: [] };

    const params = splitTopLevelParams(paramList).map(p => p.split(':')[0].trim());
    return { typeName, params };
}

/**
 * Reads each .d.ts in the callbacks directory and generates CallbackHelper.js.
 *
 * The resolver for each callback type is derived purely from its declared parameter count:
 *  - 0 params  -> resolves with no value
 *  - 1 param   -> resolves with that single value
 *  - 2+ params -> resolves with an object keyed by the declared parameter names
 *
 * `ErrorCallback` is special-cased to reject instead of resolve — by convention it is always
 * passed as the second (error) argument to `RequestHelper.Promise`, never as the main response
 * callback, so its single `err` parameter must not go through the generic resolve path.
 */
export function generateCallbackHelperFile(callbacksDir: string): string {
    const files = fs.readdirSync(callbacksDir)
        .filter(f => f.endsWith('.d.ts'))
        .sort();

    const entries: string[] = [];
    for (const file of files) {
        const parsed = parseCallbackFile(path.join(callbacksDir, file));
        if (!parsed) continue;
        if (parsed.typeName === 'ErrorCallback') continue; // handled explicitly in tryGet

        const paramsLiteral = `[${parsed.params.map(p => `'${p}'`).join(', ')}]`;
        entries.push(`    ${parsed.typeName}: ${paramsLiteral},`);
    }

    return `import { CallbackType } from './CallbackType.js';

/**
 * Ordered parameter names for every request/response callback type, keyed by CallbackType constant.
 * Generated from lib/types/callbacks/*.d.ts — do not edit by hand, re-run tools/generator instead.
 * @type {Record<string, string[] | undefined>}
 */
const CALLBACK_PARAMS = {
${entries.join('\n')}
};

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/callbacks/*.d.ts.
 */
export class CallbackHelper {
    /**
     * @param {keyof typeof CallbackType} type
     * @param {Function} resolve
     * @param {Function} reject
     * @returns {Function|keyof typeof CallbackType}
     */
    static tryGet(type, resolve, reject) {
        if (type === CallbackType.ErrorCallback) {
            return (/** @type {unknown} */ err) => reject(err);
        }

        const params = CALLBACK_PARAMS[type];
        if (params === undefined) {
            // Not a recognized CallbackType value — e.g. an already-bound function such as
            // Collection#forEach's per-item callback, or a plain data argument (index, name, ...)
            // that RequestHelper.Promise passes through untouched. Return it unchanged.
            return type;
        }
        if (params.length <= 1) {
            return (/** @type {unknown} */ result) => resolve(result);
        }
        return (/** @type {unknown[]} */ ...args) => resolve(
            Object.fromEntries(params.map((name, i) => [name, args[i]]))
        );
    }
}
`;
}
