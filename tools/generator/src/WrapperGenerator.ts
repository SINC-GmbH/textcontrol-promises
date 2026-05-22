import * as fs from 'fs';
import * as path from 'path';
import { ClassifiedMethod } from './MethodClassifier';
import { ParsedProperty, ParsedInterface } from './DtsParser';
import { getPromiseReturnType, isCallbackType } from './CallbackMapper';
import { classifyInterface, collectionItemClass, COLLECTION_BASE_METHODS, SKIP_CLASSES, ObjectKind } from './ObjectClassifier';

const PRIMITIVES = new Set(['string', 'number', 'boolean', 'null', 'undefined', 'void', 'any', 'unknown', 'never']);
const NS = 'TXTextControlTypeDefinition';


/**
 * Prefixes a single type token for use in JSDoc.
 * Types in `namedImports` are used as-is (they have individual @import statements).
 * Other non-primitive types get the TXTextControlTypeDefinition namespace prefix.
 */
function qualifyType(token: string, genericParams?: Set<string>, namedImports?: Set<string>): string {
    const t = token.trim();
    if (!t || PRIMITIVES.has(t)) return t;
    // Already qualified
    if (t.includes('.')) return t;
    // Declared generic type parameter — keep as-is
    if (genericParams?.has(t)) return t;
    // Single-letter uppercase = likely untracked generic param
    if (/^[A-Z]$/.test(t)) return t;
    // Arrow/function types — TypeScript JSDoc supports them, pass through
    if (t.startsWith('(') || t.includes(') =>')) return t;
    // keyof X
    if (t.startsWith('keyof ')) {
        return `keyof ${qualifyType(t.slice(6).trim(), genericParams, namedImports)}`;
    }
    // Indexed access / array: Identifier[...]
    const bracketIdx = t.indexOf('[');
    if (bracketIdx !== -1) {
        const base = t.slice(0, bracketIdx);
        const rest = t.slice(bracketIdx);
        return `${qualifyType(base, genericParams, namedImports)}${rest}`;
    }
    // Complex generic syntax (Foo<T>) — pass through unchanged
    if (t.includes('<') || t.includes('>')) return t;
    if (isCallbackType(t)) return t;
    // Directly imported type — use bare name so indexed access works correctly
    if (namedImports?.has(t)) return t;
    return `${NS}.${t}`;
}

/** Formats a TypeScript type string for use in a JSDoc @param or @returns tag. */
function formatJsDocType(tsType: string, genericParams?: Set<string>, namedImports?: Set<string>): string {
    return tsType.split(/\s*\|\s*/).map(t => qualifyType(t, genericParams, namedImports)).join(' | ');
}

function buildJsDoc(method: ClassifiedMethod, namedImports?: Set<string>): string {
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
        const typeStr = formatJsDocType(p.typeText, genericParams, namedImports);
        lines.push(`     * @param {${typeStr}} ${p.name}${desc ? ' ' + desc : ''}`);
    }

    if (method.kind !== 'passthrough') {
        const returnType = method.mainCallback
            ? getPromiseReturnType(method.mainCallback.typeText)
            : 'void';
        const retDesc = method.jsDoc.returnDescription;
        lines.push(`     * @returns {Promise<${returnType}>}${retDesc ? ' ' + retDesc : ''}`);
    } else if (method.returnTypeText && method.returnTypeText !== 'void') {
        lines.push(`     * @returns {${formatJsDocType(method.returnTypeText, genericParams, namedImports)}}`);
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
export function generateMethod(method: ClassifiedMethod, namedImports?: Set<string>): string {
    return [buildJsDoc(method, namedImports), buildMethodBody(method)].join('\n');
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

function buildPropertyGetter(prop: ParsedProperty, wrapperClasses: Set<string>, namedImports?: Set<string>): string {
    const lines: string[] = ['    /**'];
    if (prop.description) lines.push(`     * ${prop.description}`);
    if (prop.deprecated) lines.push(`     * @deprecated`);
    // Wrapper class properties use the imported class type, not the namespace-qualified interface
    const typeAnnotation = wrapperClasses.has(prop.typeText)
        ? prop.typeText
        : formatJsDocType(prop.typeText, undefined, namedImports);
    lines.push(`     * @type {${typeAnnotation}}`);
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

    // Types used as indexed access bases need individual @import for TypeScript to resolve Foo[T]
    const indexedBaseTypes = collectIndexedBaseTypes(methods);
    const namedTypeImportLines = [...indexedBaseTypes]
        .sort()
        .map(t => `/** @import {${t}} from "../../types/TXTextControlTypeDefinition" */`);

    // Wrapper class JS imports
    const usedWrappers = properties
        .map(p => p.typeText)
        .filter(t => wrapperClasses.has(t));
    const wrapperImports = [...new Set(usedWrappers)]
        .sort()
        .map(cls => `import { ${cls} } from '../${cls}.js';`)
        .join('\n');

    const methodStrings = methods.map(m => generateMethod(m, indexedBaseTypes)).join('\n\n');
    const getterStrings = properties.map(p => buildPropertyGetter(p, wrapperClasses, indexedBaseTypes)).join('\n\n');

    const imports = [
        wrapperImports,
        `import { CallbackType, RequestHelper } from '../helper/index.js';`,
    ].filter(Boolean).join('\n');

    const typeImports = [
        `/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlTypeDefinition" */`,
        ...namedTypeImportLines,
    ].join('\n');

    return `${imports}
${typeImports}

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

// ─── Object / Collection base class generation ───────────────────────────────

/**
 * Builds a method body for a sub-object wrapper.
 * txRef is either 'this.#txObj' (object) or 'this._txCollection' (collection).
 */
function buildObjectMethodBody(method: ClassifiedMethod, txRef: string): string {
    const paramList = method.nonCallbackParams.map(p => p.name).join(', ');
    const signature = `    ${method.name}(${paramList})`;

    if (method.kind === 'passthrough') {
        return [
            signature + ' {',
            `        return ${txRef}.${method.name}(${paramList});`,
            '    }',
        ].join('\n');
    }

    const args: string[] = [
        `${txRef}.${method.name}`,
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

function generateObjectMethod(method: ClassifiedMethod, txRef: string): string {
    return [buildJsDoc(method), buildObjectMethodBody(method, txRef)].join('\n');
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
    return { content: generateObjectBase(parsed, classified), kind };
}

function generateObjectBase(parsed: ParsedInterface, classified: ClassifiedMethod[]): string {
    const txRef = 'this.#txObj';

    const bindLines = classified
        .filter(m => m.kind !== 'passthrough')
        .map(m => `        ${txRef}.${m.name} = ${txRef}.${m.name}.bind(${txRef});`)
        .join('\n');

    const methodStrings = classified.map(m => generateObjectMethod(m, txRef)).join('\n\n');

    return `import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlTypeDefinition" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/${parsed.name}.d.ts.
 */
export class ${parsed.name}Base {
    /** @type {any} */
    #txObj;

    /** @param {any} txObj */
    constructor(txObj) {
        this.#txObj = txObj;
        this.#bindCallbacks();
    }

    #bindCallbacks() {
${bindLines}
    }

${methodStrings}
}
`;
}

function generateCollectionBase(
    parsed: ParsedInterface,
    classified: ClassifiedMethod[],
    libSrcDir: string,
): string {
    const txRef = 'this._txCollection';
    const itemName = collectionItemClass(parsed.name);

    // Only generate methods beyond Collection base (getCount/elementAt/forEach)
    const additionalMethods = classified.filter(m => !COLLECTION_BASE_METHODS.has(m.name));

    const bindLines = additionalMethods
        .filter(m => m.kind !== 'passthrough')
        .map(m => `        ${txRef}.${m.name} = ${txRef}.${m.name}.bind(${txRef});`)
        .join('\n');

    const methodStrings = additionalMethods.map(m => generateObjectMethod(m, txRef)).join('\n\n');

    // Check if the item class file exists in libSrcDir
    const itemFile = path.join(libSrcDir, `${itemName}.js`);
    const itemExists = fs.existsSync(itemFile);
    const itemImport = itemExists
        ? `import { ${itemName} } from '../${itemName}.js';`
        : `// TODO: create lib/src/${itemName}.js — item wrapper not found`;
    const wrapFn = itemExists ? `(tx) => new ${itemName}(tx)` : `(tx) => tx /* TODO: wrap with ${itemName} */`;

    return `import { Collection } from '../Collection.js';
${itemImport}
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlTypeDefinition" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/${parsed.name}.d.ts.
 */
export class ${parsed.name}Base extends Collection {
    /** @param {any} txCollection */
    constructor(txCollection) {
        super(txCollection, ${wrapFn});
        this.#bindCallbacks();
    }

    #bindCallbacks() {
${bindLines}
    }

${methodStrings}
}
`;
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
