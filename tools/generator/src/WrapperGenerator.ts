import * as fs from 'fs';
import * as path from 'path';
import { ClassifiedMethod } from './MethodClassifier';
import { ParsedProperty, ParsedInterface } from './DtsParser';
import { getPromiseReturnType } from './CallbackMapper';
import { classifyInterface, collectionItemClass, COLLECTION_BASE_METHODS, SKIP_CLASSES, ObjectKind } from './ObjectClassifier';

/**
 * Builds a concrete generic type argument string for a parsed interface.
 * Uses each type parameter's constraint (e.g. "T extends FormattingStyle" → "FormattingStyle").
 * Returns empty string when the interface has no type parameters.
 */
function buildGenericArgs(parsed: ParsedInterface): string {
    if (parsed.genericParams.length === 0) return '';
    const args = parsed.genericParams.map(gp => {
        if (!gp.constraint) return 'unknown';
        // Strip any leading "extends " that ts-morph may include
        const raw = gp.constraint.replace(/^extends\s+/, '').trim();
        // Qualify with namespace if not already qualified and not a primitive
        if (raw && !PRIMITIVES.has(raw) && !raw.startsWith(`${NS}.`)) {
            return `${NS}.${raw}`;
        }
        return raw;
    });
    return `<${args.join(', ')}>`;
}

const PRIMITIVES = new Set(['string', 'number', 'boolean', 'null', 'undefined', 'void', 'any', 'unknown', 'never',
    'String', 'Number', 'Boolean', 'Object', 'Function', 'Array', 'Promise']);
const NS = 'TXTextControlTypeDefinition';


/**
 * Splits a comma-separated generic argument list at the top level (ignoring nested <…>).
 */
function splitTopLevelCommas(s: string): string[] {
    const parts: string[] = [];
    let depth = 0;
    let current = '';
    for (const ch of s) {
        if (ch === '<') depth++;
        else if (ch === '>') depth--;
        else if (ch === ',' && depth === 0) {
            parts.push(current);
            current = '';
            continue;
        }
        current += ch;
    }
    if (current.trim()) parts.push(current);
    return parts;
}

/**
 * Prefixes a single type token for use in JSDoc.
 * Types in `namedImports` are used as-is (they have individual @import statements).
 * Other non-primitive types get the TXTextControlTypeDefinition namespace prefix.
 */
function qualifyType(token: string, genericParams?: Set<string>, namedImports?: Set<string>): string {
    const t = token.trim();
    if (!t || PRIMITIVES.has(t)) return t;
    // Already fully qualified with our namespace alias
    if (t.startsWith(`${NS}.`)) return t;
    // String/number literals (e.g. 'APPLICATIONFIELD') — keep as-is
    if (t.startsWith("'") || t.startsWith('"')) return t;
    // object (lowercase), object-like builtins
    if (t === 'object' || t === 'Object') return t;
    // DOM / browser global types — not in TX namespace
    if (/^HTML\w+Element$/.test(t) || /^SVG\w/.test(t) || t === 'Element' || t === 'Event' || t === 'EventTarget') return t;
    // Declared generic type parameter — keep as-is
    if (genericParams?.has(t)) return t;
    // Single-letter uppercase = likely untracked generic param
    if (/^[A-Z]$/.test(t)) return t;
    // Arrow/function types — qualify type annotations within param positions
    if (t.startsWith('(') || t.includes(') =>')) {
        return t.replace(/:\s*([A-Z][A-Za-z0-9_]*)(\[\])?/g, (match, name, arr) => {
            if (PRIMITIVES.has(name) || genericParams?.has(name) || /^[A-Z]$/.test(name) || namedImports?.has(name)) {
                return match;
            }
            return `: ${NS}.${name}${arr ?? ''}`;
        });
    }
    // keyof X
    if (t.startsWith('keyof ')) {
        return `keyof ${qualifyType(t.slice(6).trim(), genericParams, namedImports)}`;
    }
    // Generic type: Foo<Bar, Baz> — qualify outer name and recurse into type args
    const ltIdx = t.indexOf('<');
    if (ltIdx !== -1 && t.endsWith('>')) {
        const outer = t.slice(0, ltIdx).trim();
        const inner = t.slice(ltIdx + 1, -1);
        const qualifiedOuter = qualifyType(outer, genericParams, namedImports);
        const qualifiedInner = splitTopLevelCommas(inner)
            .map(arg => qualifyType(arg.trim(), genericParams, namedImports))
            .join(', ');
        return `${qualifiedOuter}<${qualifiedInner}>`;
    }
    // Indexed access / array: Identifier[...]
    const bracketIdx = t.indexOf('[');
    if (bracketIdx !== -1) {
        const base = t.slice(0, bracketIdx);
        const rest = t.slice(bracketIdx);
        return `${qualifyType(base, genericParams, namedImports)}${rest}`;
    }
    // Directly imported type — use bare name so indexed access works correctly
    if (namedImports?.has(t)) return t;
    // Everything else (including dotted sub-types like InputPosition.ScrollPosition,
    // callback types, and plain object types) — prefix with NS
    return `${NS}.${t}`;
}

/** Formats a TypeScript type string for use in a JSDoc @param or @returns tag. */
function formatJsDocType(tsType: string, genericParams?: Set<string>, namedImports?: Set<string>): string {
    return tsType.split(/\s*\|\s*/).map(t => qualifyType(t, genericParams, namedImports)).join(' | ');
}

function buildJsDoc(method: ClassifiedMethod, namedImports?: Set<string>, wrapperClasses?: Set<string>): string {
    const lines: string[] = ['    /**'];

    if (method.jsDoc.description) {
        lines.push(`     * ${method.jsDoc.description}`);
    }

    if (method.jsDoc.deprecated) {
        lines.push(`     * @deprecated`);
    }

    const genericParams = new Set(method.typeParams.map(tp => tp.name));

    for (const tp of method.typeParams) {
        const constraintStr = tp.constraint ? `{${formatJsDocType(tp.constraint, genericParams, namedImports)}} ` : '';
        lines.push(`     * @template ${constraintStr}${tp.name}`);
    }

    for (const p of method.nonCallbackParams) {
        const desc = method.jsDoc.paramDescriptions.get(p.name) ?? '';
        const typeStr = wrapperClasses?.has(p.typeText)
            ? p.typeText
            : formatJsDocType(p.typeText, genericParams, namedImports);
        lines.push(`     * @param {${typeStr}} ${p.name}${desc ? ' ' + desc : ''}`);
    }

    if (method.kind !== 'passthrough') {
        const returnType = method.mainCallback
            ? getPromiseReturnType(method.mainCallback.typeText, wrapperClasses)
            : 'void';
        const retDesc = method.jsDoc.returnDescription;
        lines.push(`     * @returns {Promise<${returnType}>}${retDesc ? ' ' + retDesc : ''}`);
    } else if (method.returnTypeText && method.returnTypeText !== 'void') {
        lines.push(`     * @returns {${formatJsDocType(method.returnTypeText, genericParams, namedImports)}}`);
    }

    lines.push(`     */`);
    return lines.join('\n');
}

function buildMethodBody(method: ClassifiedMethod, wrapperClasses?: Set<string>): string {
    const wrapperParams = new Set<string>();
    if (wrapperClasses) {
        for (const p of method.nonCallbackParams) {
            if (wrapperClasses.has(p.typeText)) wrapperParams.add(p.name);
        }
    }

    const paramList = method.nonCallbackParams.map(p => p.name).join(', ');
    const signature = `    ${method.name}(${paramList})`;
    const resolveArg = (a: { kind: 'param' | 'callbackType'; name?: string; constant?: string }) =>
        a.kind === 'param' ? (wrapperParams.has(a.name!) ? `${a.name}._txInternal` : a.name!) : a.constant!;

    if (method.kind === 'passthrough') {
        const callArgs = method.nonCallbackParams
            .map(p => wrapperParams.has(p.name) ? `${p.name}._txInternal` : p.name)
            .join(', ');
        return [
            signature + ' {',
            `        return TXTextControl.${method.name}(${callArgs});`,
            '    }',
        ].join('\n');
    }

    const args: string[] = [
        `TXTextControl.${method.name}`,
        ...method.requestHelperArgs.map(resolveArg),
    ];

    const wrapperReturnClass = (() => {
        if (!wrapperClasses || !method.mainCallback || method.kind !== 'promise-value') return null;
        const rt = getPromiseReturnType(method.mainCallback.typeText, wrapperClasses);
        return wrapperClasses.has(rt) ? rt : null;
    })();

    if (wrapperReturnClass) {
        const inlineArgs = args.join(', ');
        if (`        const tx = await RequestHelper.Promise(${inlineArgs});`.length <= 100) {
            return [
                `    async ${method.name}(${paramList}) {`,
                `        const tx = await RequestHelper.Promise(${inlineArgs});`,
                `        return tx && new ${wrapperReturnClass}(tx);`,
                '    }',
            ].join('\n');
        }
        const multiArgs = args.map(a => `            ${a}`).join(',\n');
        return [
            `    async ${method.name}(${paramList}) {`,
            '        const tx = await RequestHelper.Promise(',
            multiArgs,
            '        );',
            `        return tx && new ${wrapperReturnClass}(tx);`,
            '    }',
        ].join('\n');
    }

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
export function generateMethod(method: ClassifiedMethod, namedImports?: Set<string>, wrapperClasses?: Set<string>): string {
    return [buildJsDoc(method, namedImports, wrapperClasses), buildMethodBody(method, wrapperClasses)].join('\n');
}

/**
 * Collects types that appear as bases of indexed access expressions (Foo[Bar]) in method params
 * and template constraints. These require individual @import statements so that Foo[T] resolves
 * correctly in TypeScript JSDoc without a namespace prefix.
 */
function collectIndexedBaseTypes(methods: ClassifiedMethod[]): Set<string> {
    const bases = new Set<string>();

    function extractBase(typeText: string): void {
        // Skip function types — the "[" inside them is not an indexed access
        if (typeText.trimStart().startsWith('(')) return;
        const bracketIdx = typeText.indexOf('[');
        if (bracketIdx <= 0) return;
        const base = typeText.slice(0, bracketIdx).trim();
        if (!PRIMITIVES.has(base) && !/^[A-Z]$/.test(base) && !base.includes('.')) {
            bases.add(base);
        }
    }

    for (const method of methods) {
        for (const p of method.nonCallbackParams) extractBase(p.typeText);
        for (const tp of method.typeParams) {
            if (tp.constraint) extractBase(tp.constraint);
            // "keyof SomeType" — add the type itself as a named import
            const keyofMatch = tp.constraint?.match(/^keyof\s+(\w+)$/);
            if (keyofMatch && !PRIMITIVES.has(keyofMatch[1])) {
                bases.add(keyofMatch[1]);
            }
        }
    }
    return bases;
}

/**
 * Collects wrapper class names that appear as bare return types (not NS-qualified)
 * in generated JSDoc. These need explicit import statements.
 */
function collectWrapperReturnTypes(
    classified: ClassifiedMethod[],
    wrapperClasses: Set<string>,
    alreadyImported?: Set<string>,
): Set<string> {
    const required = new Set<string>();
    for (const m of classified) {
        if (m.mainCallback) {
            const retType = getPromiseReturnType(m.mainCallback.typeText, wrapperClasses);
            if (wrapperClasses.has(retType) && !alreadyImported?.has(retType)) {
                required.add(retType);
            }
        }
    }
    return required;
}

/**
 * Scans lib/src/ for JS wrapper class files and returns a Set of class names
 * that have a corresponding implementation file (e.g. "TableCollection").
 */
function discoverWrapperClasses(libSrcDir: string): Set<string> {
    const skip = new Set(['Collection', 'TextControlContext', 'TXTextControlBase', 'index']);
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

function buildPropertyGetter(prop: ParsedProperty, wrapperClasses: Set<string>, namedImports?: Set<string>, txRef = 'TXTextControl'): string {
    const lines: string[] = ['    /**'];
    if (prop.description) lines.push(`     * ${prop.description}`);
    if (prop.deprecated) lines.push(`     * @deprecated`);
    // Wrapper class properties use the imported class type, not the namespace-qualified interface
    const baseAnnotation = wrapperClasses.has(prop.typeText)
        ? prop.typeText
        : formatJsDocType(prop.typeText, undefined, namedImports);
    const typeAnnotation = prop.optional ? `${baseAnnotation} | undefined` : baseAnnotation;
    lines.push(`     * @type {${typeAnnotation}}`);
    lines.push(`     */`);

    const hasWrapper = wrapperClasses.has(prop.typeText);
    if (hasWrapper && prop.optional) {
        lines.push(`    get ${prop.name}() { const v = ${txRef}.${prop.name}; return v ? new ${prop.typeText}(v) : undefined; }`);
    } else if (hasWrapper) {
        lines.push(`    get ${prop.name}() { return new ${prop.typeText}(${txRef}.${prop.name}); }`);
    } else {
        lines.push(`    get ${prop.name}() { return ${txRef}.${prop.name}; }`);
    }
    return lines.join('\n');
}

/**
 * Generates the complete TXTextControlBase class file from classified methods
 * and d.ts property declarations.
 */
export function generateTextControlContextFile(
    methods: ClassifiedMethod[],
    properties: ParsedProperty[],
    libSrcDir: string,
): string {
    const wrapperClasses = discoverWrapperClasses(libSrcDir);

    // Types used as indexed access bases need individual @import for TypeScript to resolve Foo[T]
    const indexedBaseTypes = collectIndexedBaseTypes(methods);
    const namedTypeImportLines = [...indexedBaseTypes]
        .sort()
        .map(t => `/** @import {${t}} from "../../types/TXTextControlNamespace" */`);

    // Wrapper class JS imports — properties, method params, and method return types
    const usedWrapperSet = new Set<string>();
    for (const p of properties) {
        if (wrapperClasses.has(p.typeText)) usedWrapperSet.add(p.typeText);
    }
    for (const m of methods) {
        for (const p of m.nonCallbackParams) {
            if (wrapperClasses.has(p.typeText)) usedWrapperSet.add(p.typeText);
        }
        if (m.mainCallback) {
            const rt = getPromiseReturnType(m.mainCallback.typeText, wrapperClasses);
            if (wrapperClasses.has(rt)) usedWrapperSet.add(rt);
        }
    }
    const wrapperImports = [...usedWrapperSet]
        .sort()
        .map(cls => `import { ${cls} } from '../${cls}.js';`)
        .join('\n');

    const methodStrings = methods.map(m => generateMethod(m, indexedBaseTypes, wrapperClasses)).join('\n\n');
    const getterStrings = properties.map(p => buildPropertyGetter(p, wrapperClasses, indexedBaseTypes)).join('\n\n');

    const imports = [
        wrapperImports,
        `import { CallbackType, RequestHelper } from '../helper/index.js';`,
    ].filter(Boolean).join('\n');

    const typeImports = [
        `/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */`,
        ...namedTypeImportLines,
    ].join('\n');

    return `${imports}
${typeImports}

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/TXTextControl.d.ts.
 */
export class TXTextControlBase {
${methodStrings}

    //#region properties

${getterStrings}

    //#endregion
}
`;
}

// ─── Object / Collection base class generation ───────────────────────────────

/**
 * Builds a method body for a sub-object wrapper.
 * txRef is either 'this.#txObj' (object) or 'this._txCollection' (collection).
 */
function buildObjectMethodBody(method: ClassifiedMethod, txRef: string, wrapperClasses?: Set<string>): string {
    // Build a lookup: param name → true when this param is a wrapper class instance
    const wrapperParams = new Set<string>();
    if (wrapperClasses) {
        for (const p of method.nonCallbackParams) {
            if (wrapperClasses.has(p.typeText)) wrapperParams.add(p.name);
        }
    }

    const paramList = method.nonCallbackParams.map(p => p.name).join(', ');
    const signature = `    ${method.name}(${paramList})`;
    const resolveArg = (a: { kind: 'param' | 'callbackType'; name?: string; constant?: string }) =>
        a.kind === 'param' ? (wrapperParams.has(a.name!) ? `${a.name}._txInternal` : a.name!) : a.constant!;

    if (method.kind === 'passthrough') {
        const callArgs = method.nonCallbackParams
            .map(p => wrapperParams.has(p.name) ? `${p.name}._txInternal` : p.name)
            .join(', ');
        return [
            signature + ' {',
            `        return ${txRef}.${method.name}(${callArgs});`,
            '    }',
        ].join('\n');
    }

    const args: string[] = [
        `${txRef}.${method.name}`,
        ...method.requestHelperArgs.map(resolveArg),
    ];

    // When the return type is a wrapper class, generate an async wrapper
    const wrapperReturnClass = (() => {
        if (!wrapperClasses || !method.mainCallback || method.kind !== 'promise-value') return null;
        const rt = getPromiseReturnType(method.mainCallback.typeText, wrapperClasses);
        return wrapperClasses.has(rt) ? rt : null;
    })();

    if (wrapperReturnClass) {
        const inlineArgs = args.join(', ');
        const retLine = `        return tx && new ${wrapperReturnClass}(tx);`;
        if (`        const tx = await RequestHelper.Promise(${inlineArgs});`.length <= 100) {
            return [
                `    async ${method.name}(${paramList}) {`,
                `        const tx = await RequestHelper.Promise(${inlineArgs});`,
                retLine,
                '    }',
            ].join('\n');
        }
        const multiArgs = args.map(a => `            ${a}`).join(',\n');
        return [
            `    async ${method.name}(${paramList}) {`,
            '        const tx = await RequestHelper.Promise(',
            multiArgs,
            '        );',
            retLine,
            '    }',
        ].join('\n');
    }

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

function generateObjectMethod(method: ClassifiedMethod, txRef: string, wrapperClasses?: Set<string>): string {
    return [buildJsDoc(method, undefined, wrapperClasses), buildObjectMethodBody(method, txRef, wrapperClasses)].join('\n');
}

/**
 * Generates a FooBase.js wrapper for a lib/types/objects/*.d.ts interface.
 * Returns the file content string, or null if the class should be skipped.
 */
export function generateObjectBaseFile(
    parsed: ParsedInterface,
    libSrcDir: string,
): { content: string; kind: ObjectKind } | null {
    if (SKIP_CLASSES.has(parsed.name)) return null;
    const kind = classifyInterface(parsed);
    if (kind === 'skip') return null;

    const { classifyMethod } = require('./MethodClassifier');
    const classified = parsed.methods.map(classifyMethod as (m: import('./DtsParser').ParsedMethod) => ClassifiedMethod);

    if (kind === 'collection') {
        return { content: generateCollectionBase(parsed, classified, libSrcDir), kind };
    }
    return { content: generateObjectBase(parsed, classified, libSrcDir), kind };
}

function generateObjectBase(parsed: ParsedInterface, classified: ClassifiedMethod[], libSrcDir: string): string {
    const txRef = 'this._txInternal';
    const wrapperClasses = discoverWrapperClasses(libSrcDir);
    const generatedDir = path.join(libSrcDir, 'generated');

    // Inheritance: hand-written wrapper takes priority over generated base, then ObjectBase.
    // Hand-written must be checked FIRST so Collection.js (hand-written) beats CollectionBase.js (generated).
    const parentName = parsed.baseInterfaces[0] ?? null;
    const hasHandWrittenBase = parentName != null && fs.existsSync(path.join(libSrcDir, `${parentName}.js`));
    const hasGeneratedBase = !hasHandWrittenBase && parentName != null && fs.existsSync(path.join(generatedDir, `${parentName}Base.js`));
    const baseClass = hasHandWrittenBase ? parentName
                    : hasGeneratedBase ? `${parentName}Base`
                    : 'ObjectBase';
    // When the parent is the hand-written Collection, the constructor must forward wrapItem
    const isCollectionChild = hasHandWrittenBase && parentName === 'Collection';

    const bindNames = classified
        .filter(m => m.kind !== 'passthrough')
        .map(m => `'${m.name}'`);
    const bindArgs = bindNames.join(', ');

    const methodStrings = classified.map(m => generateObjectMethod(m, txRef, wrapperClasses)).join('\n\n');
    const getterStrings = parsed.properties.map(p => buildPropertyGetter(p, wrapperClasses, undefined, txRef)).join('\n\n');

    // Collect wrapper class imports: return types, property types, and param types
    const extraImports = collectWrapperReturnTypes(classified, wrapperClasses);
    for (const prop of parsed.properties) {
        if (wrapperClasses.has(prop.typeText)) extraImports.add(prop.typeText);
    }
    for (const m of classified) {
        for (const p of m.nonCallbackParams) {
            if (wrapperClasses.has(p.typeText)) extraImports.add(p.typeText);
        }
    }

    const importLines: string[] = [];
    if (hasGeneratedBase) {
        importLines.push(`import { ${parentName}Base } from './${parentName}Base.js';`);
    } else if (hasHandWrittenBase) {
        importLines.push(`import { ${parentName} } from '../${parentName}.js';`);
    } else {
        importLines.push(`import { ObjectBase } from '../ObjectBase.js';`);
    }
    const extraImportLines = [...extraImports].sort()
        .map(cls => `import { ${cls} } from '../${cls}.js';`)
        .join('\n');
    if (extraImportLines) importLines.push(extraImportLines);
    importLines.push(`import { CallbackType, RequestHelper } from '../helper/index.js';`);
    const imports = importLines.filter(Boolean).join('\n');

    const generics = buildGenericArgs(parsed);
    const txType = `TXTextControlTypeDefinition.${parsed.name}${generics}`;
    const txGetter = `    /** @returns {${txType}} */\n    get _txInternal() { return /** @type {${txType}} */ (super._txInternal); }`;
    const bindCall = bindArgs ? `        this._bindMethods(${bindArgs});` : '';
    const constructorParam = isCollectionChild ? 'txCollection, wrapItem' : 'txObj';
    const superArg = isCollectionChild ? 'txCollection, wrapItem' : 'txObj';
    const constructorBody = bindCall
        ? `        super(${superArg});\n${bindCall}`
        : `        super(${superArg});`;

    const propSection = getterStrings ? `\n    //#region properties\n\n${getterStrings}\n\n    //#endregion\n` : '';

    const extendsTag = isCollectionChild ? '\n * @extends {Collection<object>}' : '';
    const constructorDoc = isCollectionChild
        ? `    /**\n     * @param {${txType}} txCollection\n     * @param {function(*):*} wrapItem\n     */`
        : `    /** @param {${txType}} txObj */`;

    return `${imports}
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class${extendsTag}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/${parsed.name}.d.ts.
 */
export class ${parsed.name}Base extends ${baseClass} {
${txGetter}

${constructorDoc}
    constructor(${constructorParam}) {
${constructorBody}
    }

${methodStrings}${propSection}}
`;
}

/**
 * True when this method's success callback matches Request<ItemName>Callback exactly.
 * These methods should return a wrapped item instance via this._wrapItem(tx).
 */
function isItemReturningMethod(method: ClassifiedMethod, itemName: string): boolean {
    if (!method.mainCallback) return false;
    const callbackType = method.mainCallback.typeText.replace(/\s*\|\s*(undefined|null)$/, '').trim();
    return callbackType === `Request${itemName}Callback`;
}

/**
 * Like generateObjectMethod but collection-aware:
 * - Methods returning the item type are rewritten as async wrappers using this._wrapItem(tx).
 * - Params typed as the item class name use the wrapper class type in JSDoc (not NS-qualified).
 */
function generateCollectionMethod(
    method: ClassifiedMethod,
    txRef: string,
    itemName: string,
    itemExists: boolean,
    wrapperClasses: Set<string>,
): string {
    const returnsItem = itemExists && isItemReturningMethod(method, itemName);

    // Build wrapper param lookup for unwrapping in method bodies
    const wrapperParams = new Set<string>();
    for (const p of method.nonCallbackParams) {
        if (wrapperClasses.has(p.typeText)) wrapperParams.add(p.name);
    }

    const lines: string[] = ['    /**'];
    if (method.jsDoc.description) lines.push(`     * ${method.jsDoc.description}`);
    if (method.jsDoc.deprecated) lines.push(`     * @deprecated`);

    for (const p of method.nonCallbackParams) {
        const desc = method.jsDoc.paramDescriptions.get(p.name) ?? '';
        const typeStr = wrapperClasses.has(p.typeText) ? p.typeText : formatJsDocType(p.typeText);
        lines.push(`     * @param {${typeStr}} ${p.name}${desc ? ' ' + desc : ''}`);
    }

    if (method.kind !== 'passthrough') {
        const returnType = returnsItem
            ? itemName
            : (method.mainCallback ? getPromiseReturnType(method.mainCallback.typeText, wrapperClasses) : 'void');
        const retDesc = method.jsDoc.returnDescription;
        lines.push(`     * @returns {Promise<${returnType}>}${retDesc ? ' ' + retDesc : ''}`);
    }
    lines.push(`     */`);
    const jsDoc = lines.join('\n');

    if (returnsItem) {
        const paramList = method.nonCallbackParams.map(p => p.name).join(', ');
        const args = [
            `${txRef}.${method.name}`,
            ...method.requestHelperArgs.map(a =>
                a.kind === 'param' ? (wrapperParams.has(a.name) ? `${a.name}._txInternal` : a.name) : a.constant
            ),
        ];
        const body = [
            `    async ${method.name}(${paramList}) {`,
            `        const tx = await RequestHelper.Promise(${args.join(', ')});`,
            `        return tx && this._wrapItem(tx);`,
            `    }`,
        ].join('\n');
        return [jsDoc, body].join('\n');
    }

    return [jsDoc, buildObjectMethodBody(method, txRef, wrapperClasses)].join('\n');
}

/**
 * Generates CollectionBase.js — the root TX collection base extending ObjectBase.
 * Used only for Collection.d.ts itself; provides raw forEach/getCount/elementAt wrappers
 * that Collection.js (hand-written) then overrides with item-wrapping versions.
 */
function generateRootCollectionBase(
    parsed: ParsedInterface,
    _classified: ClassifiedMethod[],
): string {
    const generics = buildGenericArgs(parsed);
    const txType = `TXTextControlTypeDefinition.${parsed.name}${generics}`;
    const txGetter = `    /** @returns {${txType}} */\n    get _txInternal() { return /** @type {${txType}} */ (super._txInternal); }`;

    // Hardcode correct method bodies — MethodClassifier cannot handle generic callback types
    // such as RequestObjectCallback<T>, so we emit them directly to avoid TS errors in consumers.
    const methodStrings = `    /**
     * Returns the element at a specified index in the collection.
     * @param {number} index
     * @returns {Promise<unknown>}
     */
    elementAt(index) {
        return RequestHelper.Promise(
            this._txInternal.elementAt,
            index,
            CallbackType.RequestObjectCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Executes a callback function for each element.
     * @param {TXTextControlTypeDefinition.ForEachCallback<unknown>} callback
     * @returns {Promise<void>}
     */
    forEach(callback) {
        return RequestHelper.Promise(
            this._txInternal.forEach,
            callback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of elements contained in the collection.
     * @returns {Promise<number>}
     */
    getCount() {
        return RequestHelper.Promise(
            this._txInternal.getCount,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }`;

    return `import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/${parsed.name}.d.ts.
 */
export class ${parsed.name}Base extends ObjectBase {
${txGetter}

    /** @param {${txType}} txCollection */
    constructor(txCollection) {
        super(txCollection);
        this._bindMethods('elementAt', 'forEach', 'getCount');
    }

${methodStrings}}
`;
}

function generateCollectionBase(
    parsed: ParsedInterface,
    classified: ClassifiedMethod[],
    libSrcDir: string,
): string {
    const txRef = 'this._txInternal';
    const generatedDir = path.join(libSrcDir, 'generated');

    // Root collection (Collection.d.ts itself): CollectionBase extends ObjectBase with raw TX methods
    if (parsed.name === 'Collection') {
        return generateRootCollectionBase(parsed, classified);
    }

    const itemName = collectionItemClass(parsed.name);

    // Only generate methods beyond Collection base (getCount/elementAt/forEach)
    const additionalMethods = classified.filter(m => !COLLECTION_BASE_METHODS.has(m.name));

    const bindNames = additionalMethods
        .filter(m => m.kind !== 'passthrough')
        .map(m => `'${m.name}'`);
    const bindArgs = bindNames.join(', ');

    // Check if the item class file exists in libSrcDir (needed before methodStrings).
    // When itemName ends in "Base" (e.g. "TableBase") and the exact file is absent,
    // fall back to the stripped name (e.g. "Table") — the hand-written wrapper may
    // not mirror the "Base" suffix used in the type hierarchy.
    const itemFile = path.join(libSrcDir, `${itemName}.js`);
    let resolvedItemName = itemName;
    let itemExists = fs.existsSync(itemFile);
    if (!itemExists && itemName.endsWith('Base')) {
        const shortName = itemName.slice(0, -4);
        if (fs.existsSync(path.join(libSrcDir, `${shortName}.js`))) {
            resolvedItemName = shortName;
            itemExists = true;
        }
    }

    const wrapperClasses = discoverWrapperClasses(libSrcDir);
    const methodStrings = additionalMethods
        .map(m => generateCollectionMethod(m, txRef, resolvedItemName, itemExists, wrapperClasses))
        .join('\n\n');

    const itemImport = itemExists
        ? `import { ${resolvedItemName} } from '../${resolvedItemName}.js';`
        : `// TODO: create lib/src/${itemName}.js — item wrapper not found`;

    // Collect all wrapper imports: item (already), return types, and param types
    const alreadyImported = new Set(itemExists ? [resolvedItemName] : []);
    const extraImports = collectWrapperReturnTypes(additionalMethods, wrapperClasses, alreadyImported);
    for (const m of additionalMethods) {
        for (const p of m.nonCallbackParams) {
            if (wrapperClasses.has(p.typeText) && !alreadyImported.has(p.typeText)) {
                extraImports.add(p.typeText);
            }
        }
    }
    const extraImportLines = [...extraImports].sort()
        .map(cls => `import { ${cls} } from '../${cls}.js';`)
        .join('\n');

    // Determine base class FIRST — needed to decide the constructor form below.
    const parentCollName = parsed.baseInterfaces[0] ?? null;
    let baseClass = 'Collection';
    let baseImportLine = `import { Collection } from '../Collection.js';`;
    if (parentCollName && parentCollName !== 'Collection') {
        const hasHandWritten = fs.existsSync(path.join(libSrcDir, `${parentCollName}.js`));
        const hasGeneratedBase = fs.existsSync(path.join(generatedDir, `${parentCollName}Base.js`));
        if (hasHandWritten || hasGeneratedBase) {
            baseClass = parentCollName;
            baseImportLine = `import { ${parentCollName} } from '../${parentCollName}.js';`;
        }
    }

    const generics = buildGenericArgs(parsed);
    const txType = `TXTextControlTypeDefinition.${parsed.name}${generics}`;
    const txGetter = `    /** @returns {${txType}} */\n    get _txInternal() { return /** @type {${txType}} */ (super._txInternal); }`;
    const bindCall = bindArgs ? `        this._bindMethods(${bindArgs});` : '';

    // Explicit @type on the arrow param avoids TS7006 implicit-any errors.
    const wrapFnTyped = itemExists
        ? `(/** @type {*} */ tx) => new ${resolvedItemName}(tx)`
        : `(/** @type {*} */ tx) => tx /* TODO: wrap with ${itemName} */`;

    // When extending Collection directly: expose wrapItem as a default-valued param so that
    // subclasses (e.g. BarcodeCollectionBase extends FrameBaseCollection extends Collection)
    // can supply their own item constructor without hitting "Expected 1 argument, got 2" errors.
    // When extending a generated non-Collection base (which itself uses this same pattern):
    // pass our concrete wrapFn as the explicit 2nd arg to override the default.
    const constructorParam = baseClass === 'Collection' ? `txCollection, wrapItem = ${wrapFnTyped}` : 'txCollection';
    const superCall = baseClass === 'Collection'
        ? `super(txCollection, wrapItem)`
        : `super(txCollection, ${wrapFnTyped})`;
    const constructorBody = bindCall
        ? `        ${superCall};\n${bindCall}`
        : `        ${superCall};`;

    return `${baseImportLine}
${itemImport}
${extraImportLines ? extraImportLines + '\n' : ''}import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * ${baseClass === 'Collection' ? `@extends {Collection<${itemExists ? resolvedItemName : 'object'}>}` : `@extends {${baseClass}}`}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/${parsed.name}.d.ts.
 */
export class ${parsed.name}Base extends ${baseClass} {
${txGetter}

    ${baseClass === 'Collection'
        ? `/**\n     * @param {${txType}} txCollection\n     * @param {function(*):*} [wrapItem]\n     */`
        : `/** @param {${txType}} txCollection */`}
    constructor(${constructorParam}) {
${constructorBody}
    }

${methodStrings}
}
`;
}

/**
 * Generates a complete lib/src/index.js that re-exports every wrapper class.
 * Infrastructure files (Collection, TextControlContext, index) are included;
 * generated base classes and internal helpers are excluded.
 */
export function generateIndexJs(libSrcDir: string): string {
    const skip = new Set(['index', 'TXTextControlBase', 'TextControlContextBase']);
    const names = fs.readdirSync(libSrcDir)
        .filter(f => f.endsWith('.js') && !f.includes('generated') && !f.includes('helper'))
        .map(f => path.basename(f, '.js'))
        .filter(n => !skip.has(n))
        .sort();
    return names.map(n => `export { ${n} } from './${n}.js';`).join('\n') + '\n';
}

/**
 * If lib/src/Foo.js does not exist, writes a minimal extension stub that
 * extends FooBase. This gives developers a clean customisation point.
 */
export function writeExtensionStub(
    name: string,
    kind: ObjectKind,
    libSrcDir: string,
    dryRun: boolean,
): void {
    const stubPath = path.join(libSrcDir, `${name}.js`);
    if (fs.existsSync(stubPath)) return; // never overwrite hand-written code

    const baseImport = `import { ${name}Base } from './generated/${name}Base.js';`;
    const extendsClause = kind === 'collection'
        ? `// Collection methods (getCount, elementAt, forEach, async iterator) come from Collection via ${name}Base.`
        : '';
    const content = `${baseImport}

${extendsClause ? extendsClause + '\n' : ''}export class ${name} extends ${name}Base {}
`;

    if (dryRun) {
        console.log(`[DRY RUN] Would create extension stub: ${stubPath}`);
        return;
    }
    fs.writeFileSync(stubPath, content, 'utf-8');
    console.log(`  Created extension stub: ${stubPath}`);
}
