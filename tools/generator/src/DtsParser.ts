import * as path from 'path';
import { Project, FunctionDeclaration, InterfaceDeclaration, Node, VariableDeclarationKind } from 'ts-morph';
import { isCallbackType } from './CallbackMapper';

export interface ParsedParam {
    name: string;
    /** Raw type text as written in the d.ts source. */
    typeText: string;
    isOptional: boolean;
    isCallback: boolean;
}

export interface JsDocInfo {
    description: string;
    /** Map from param name → its JSDoc description. */
    paramDescriptions: Map<string, string>;
    deprecated: boolean;
    returnDescription: string;
}

export interface TypeParam {
    name: string;
    /** Raw constraint text, e.g. "keyof EventMap". */
    constraint?: string;
}

export interface ParsedMethod {
    name: string;
    params: ParsedParam[];
    /** Return type text from d.ts (almost always 'void'). */
    returnTypeText: string;
    jsDoc: JsDocInfo;
    typeParams: TypeParam[];
}

function extractJsDoc(fn: FunctionDeclaration): JsDocInfo {
    const docs = fn.getJsDocs();
    if (docs.length === 0) {
        return { description: '', paramDescriptions: new Map(), deprecated: false, returnDescription: '' };
    }
    const doc = docs[0];
    const description = doc.getDescription().trim().replace(/\n\s*/g, ' ');
    const paramDescriptions = new Map<string, string>();
    let deprecated = false;
    let returnDescription = '';

    for (const tag of doc.getTags()) {
        const tagName = tag.getTagName();
        if (tagName === 'deprecated') {
            deprecated = true;
        } else if (tagName === 'returns' || tagName === 'return') {
            const comment = tag.getComment();
            returnDescription = commentToString(comment).trim();
        } else if (Node.isJSDocParameterTag(tag)) {
            const paramName = tag.getName();
            const comment = tag.getComment();
            paramDescriptions.set(paramName, commentToString(comment).trim());
        }
    }

    return { description, paramDescriptions, deprecated, returnDescription };
}

function commentToString(comment: unknown): string {
    if (!comment) return '';
    if (typeof comment === 'string') return comment;
    if (Array.isArray(comment)) {
        return comment
            .filter(Boolean)
            .map((c: unknown) => (typeof c === 'string' ? c : (c as { getText(): string }).getText()))
            .join('');
    }
    return '';
}

// ─── Interface parsing (lib/types/objects/*.d.ts) ────────────────────────────

export interface GenericParam {
    name: string;
    constraint?: string;
}

export interface ParsedInterface {
    name: string;
    baseInterfaces: string[];
    genericParams: GenericParam[];
    methods: ParsedMethod[];
    properties: ParsedProperty[];
    sourceFile: string;
}

function extractJsDocFromMethodSig(method: import('ts-morph').MethodSignature): JsDocInfo {
    const docs = method.getJsDocs();
    if (docs.length === 0) {
        return { description: '', paramDescriptions: new Map(), deprecated: false, returnDescription: '' };
    }
    const doc = docs[0];
    const description = doc.getDescription().trim().replace(/\n\s*/g, ' ');
    const paramDescriptions = new Map<string, string>();
    let deprecated = false;
    let returnDescription = '';
    for (const tag of doc.getTags()) {
        const tagName = tag.getTagName();
        if (tagName === 'deprecated') {
            deprecated = true;
        } else if (tagName === 'returns' || tagName === 'return') {
            returnDescription = commentToString(tag.getComment()).trim();
        } else if (Node.isJSDocParameterTag(tag)) {
            paramDescriptions.set(tag.getName(), commentToString(tag.getComment()).trim());
        }
    }
    return { description, paramDescriptions, deprecated, returnDescription };
}

/**
 * Parses an export interface or export class from a lib/types/objects/*.d.ts file.
 * Handles both `export interface Foo` and `export class Foo` declarations.
 * Returns the first declaration found, or null if none.
 */
export function parseInterface(dtsPath: string): ParsedInterface | null {
    const absPath = path.resolve(dtsPath);
    const project = new Project({
        compilerOptions: { skipLibCheck: true, noEmit: true, strict: false },
        skipAddingFilesFromTsConfig: true,
    });
    project.addSourceFileAtPath(absPath);
    const sourceFile = project.getSourceFileOrThrow(absPath);

    // Try interface first, then class
    const iface = sourceFile.getInterfaces()[0];
    if (iface) {
        const baseInterfaces = iface.getBaseDeclarations().map(b => b.getName() ?? '').filter(Boolean);
        const genericParams = iface.getTypeParameters().map(tp => ({
            name: tp.getName(),
            constraint: tp.getConstraint()?.getText(),
        }));
        const methods = parseMethodSignatures(iface.getMethods());
        const properties = parsePropertySignatures(iface.getProperties());
        return { name: iface.getName(), baseInterfaces, genericParams, methods, properties, sourceFile: absPath };
    }

    const cls = sourceFile.getClasses()[0];
    if (cls) {
        const baseClass = cls.getBaseClass();
        const baseInterfaces = baseClass ? [baseClass.getName() ?? ''].filter(Boolean) : [];
        const genericParams = cls.getTypeParameters().map(tp => ({
            name: tp.getName(),
            constraint: tp.getConstraint()?.getText(),
        }));
        // getMethods() already excludes constructors in ts-morph
        const methods = cls.getMethods()
            .map(m => {
                const params: ParsedParam[] = m.getParameters().map(p => {
                    const typeText = p.getTypeNode()?.getText() ?? 'any';
                    return { name: p.getName(), typeText, isOptional: p.isOptional(), isCallback: isCallbackType(typeText) };
                });
                const typeParams = m.getTypeParameters().map(tp => ({
                    name: tp.getName(), constraint: tp.getConstraint()?.getText(),
                }));
                const docs = m.getJsDocs();
                const description = docs[0]?.getDescription().trim().replace(/\n\s*/g, ' ') ?? '';
                const deprecated = docs[0]?.getTags().some(t => t.getTagName() === 'deprecated') ?? false;
                const jsDoc: JsDocInfo = { description, paramDescriptions: new Map(), deprecated, returnDescription: '' };
                return { name: m.getName(), params, returnTypeText: m.getReturnTypeNode()?.getText() ?? 'void', jsDoc, typeParams };
            });
        // Class properties
        const properties: ParsedProperty[] = cls.getProperties().map(prop => {
            const docs = prop.getJsDocs();
            const description = docs[0]?.getDescription().trim().replace(/\n\s*/g, ' ') ?? '';
            const deprecated = docs[0]?.getTags().some(t => t.getTagName() === 'deprecated') ?? false;
            const rawType = prop.getTypeNode()?.getText() ?? 'unknown';
            const typeText = BOXED_TO_PRIMITIVE[rawType] ?? rawType;
            return { name: prop.getName(), typeText, readonly: prop.isReadonly(), optional: prop.hasQuestionToken(), description, deprecated };
        });
        return { name: cls.getName() ?? '', baseInterfaces, genericParams, methods, properties, sourceFile: absPath };
    }

    return null;
}

function parseMethodSignatures(sigs: import('ts-morph').MethodSignature[]): ParsedMethod[] {
    return sigs.map(method => {
        const params: ParsedParam[] = method.getParameters().map(p => {
            const typeText = p.getTypeNode()?.getText() ?? 'any';
            return { name: p.getName(), typeText, isOptional: p.isOptional(), isCallback: isCallbackType(typeText) };
        });
        const typeParams = method.getTypeParameters().map(tp => ({ name: tp.getName(), constraint: tp.getConstraint()?.getText() }));
        return {
            name: method.getName(),
            params,
            returnTypeText: method.getReturnTypeNode()?.getText() ?? 'void',
            jsDoc: extractJsDocFromMethodSig(method),
            typeParams,
        };
    });
}

const BOXED_TO_PRIMITIVE: Record<string, string> = { Number: 'number', String: 'string', Boolean: 'boolean' };

function parsePropertySignatures(props: import('ts-morph').PropertySignature[]): ParsedProperty[] {
    return props.map(prop => {
        const docs = prop.getJsDocs();
        const description = docs[0]?.getDescription().trim().replace(/\n\s*/g, ' ') ?? '';
        const deprecated = docs[0]?.getTags().some(t => t.getTagName() === 'deprecated') ?? false;
        const rawType = prop.getTypeNode()?.getText() ?? 'unknown';
        const typeText = BOXED_TO_PRIMITIVE[rawType] ?? rawType;
        return { name: prop.getName(), typeText, readonly: prop.isReadonly(), optional: prop.hasQuestionToken(), description, deprecated };
    });
}

/**
 * Recursively collects all method signatures from an interface, including those
 * inherited from base interfaces (e.g. TXTextControl extends FormattedText).
 * Deduplicates by method name — first declaration wins.
 */
function collectAllInterfaceMethods(
    iface: InterfaceDeclaration,
): ReturnType<InterfaceDeclaration['getMethods']> {
    const seen = new Set<string>();
    const result: ReturnType<InterfaceDeclaration['getMethods']> = [];

    function collect(i: InterfaceDeclaration): void {
        for (const m of i.getMethods()) {
            if (!seen.has(m.getName())) {
                seen.add(m.getName());
                result.push(m);
            }
        }
        for (const base of i.getBaseDeclarations()) {
            if (base instanceof InterfaceDeclaration) collect(base);
        }
    }

    collect(iface);
    return result;
}

/**
 * Recursively collects all property signatures from an interface, including
 * those inherited from base interfaces.
 * Deduplicates by property name — first declaration wins.
 */
function collectAllInterfaceProperties(
    iface: InterfaceDeclaration,
): ReturnType<InterfaceDeclaration['getProperties']> {
    const seen = new Set<string>();
    const result: ReturnType<InterfaceDeclaration['getProperties']> = [];

    function collect(i: InterfaceDeclaration): void {
        for (const p of i.getProperties()) {
            if (!seen.has(p.getName())) {
                seen.add(p.getName());
                result.push(p);
            }
        }
        for (const base of i.getBaseDeclarations()) {
            if (base instanceof InterfaceDeclaration) collect(base);
        }
    }

    collect(iface);
    return result;
}

/**
 * Parses all exported function declarations from a TXTextControl-style d.ts file.
 * Falls back to parsing interface method signatures when no function declarations exist
 * (supports both the legacy top-level-function format and the current interface format).
 */
export function parseDts(dtsPath: string): ParsedMethod[] {
    const absPath = path.resolve(dtsPath);

    const project = new Project({
        compilerOptions: {
            skipLibCheck: true,
            noEmit: true,
            strict: false,
        },
        skipAddingFilesFromTsConfig: true,
    });

    project.addSourceFileAtPath(absPath);
    // Add the file's directory so imports (callbacks, enums, objects, …) can be resolved
    const dir = path.dirname(absPath);
    for (const f of require('fs').readdirSync(dir)) {
        if (f.endsWith('.d.ts') && path.join(dir, f) !== absPath) {
            project.addSourceFileAtPath(path.join(dir, f));
        }
    }

    const sourceFile = project.getSourceFileOrThrow(absPath);
    const methods: ParsedMethod[] = [];

    for (const fn of sourceFile.getFunctions()) {
        const fnName = fn.getName();
        if (!fnName) continue;

        const params: ParsedParam[] = fn.getParameters().map(p => {
            const typeNode = p.getTypeNode();
            const typeText = typeNode?.getText() ?? 'any';
            return {
                name: p.getName(),
                typeText,
                isOptional: p.isOptional(),
                isCallback: isCallbackType(typeText),
            };
        });

        const typeParams = fn.getTypeParameters().map(tp => ({
            name: tp.getName(),
            constraint: tp.getConstraint()?.getText(),
        }));

        methods.push({
            name: fnName,
            params,
            returnTypeText: fn.getReturnTypeNode()?.getText() ?? 'void',
            jsDoc: extractJsDoc(fn),
            typeParams,
        });
    }

    // Fallback: parse interface method signatures (new format where TXTextControl is an interface)
    if (methods.length === 0) {
        const exportedIfaces = sourceFile.getInterfaces().filter(i => i.isExported());
        for (const iface of exportedIfaces) {
            const ifaceMethods = collectAllInterfaceMethods(iface);
            methods.push(...parseMethodSignatures(ifaceMethods));
        }
    }

    return methods;
}

export interface ParsedProperty {
    name: string;
    typeText: string;
    readonly: boolean;
    optional: boolean;
    description: string;
    deprecated: boolean;
}

/**
 * Parses all exported variable declarations (const/let) from the d.ts.
 * These become getter properties on the generated class.
 */
export function parseProperties(dtsPath: string): ParsedProperty[] {
    const absPath = path.resolve(dtsPath);
    const project = new Project({
        compilerOptions: { skipLibCheck: true, noEmit: true, strict: false },
        skipAddingFilesFromTsConfig: true,
    });
    project.addSourceFileAtPath(absPath);
    const sourceFile = project.getSourceFileOrThrow(absPath);
    const props: ParsedProperty[] = [];

    for (const stmt of sourceFile.getVariableStatements()) {
        const isExported = stmt.isExported();
        if (!isExported) continue;
        const isConst = stmt.getDeclarationKind() === VariableDeclarationKind.Const;
        const isLet = stmt.getDeclarationKind() === VariableDeclarationKind.Let;
        if (!isConst && !isLet) continue;

        const docs = stmt.getJsDocs();
        const description = docs[0]?.getDescription().trim().replace(/\n\s*/g, ' ') ?? '';
        const deprecated = docs[0]?.getTags().some(t => t.getTagName() === 'deprecated') ?? false;

        for (const decl of stmt.getDeclarations()) {
            const name = decl.getName();
            const rawType = decl.getTypeNode()?.getText() ?? 'unknown';
            const typeText = BOXED_TO_PRIMITIVE[rawType] ?? rawType;
            props.push({ name, typeText, readonly: isConst, optional: false, description, deprecated });
        }
    }

    // Fallback: parse interface property signatures (new format)
    if (props.length === 0) {
        const exportedIfaces = sourceFile.getInterfaces().filter(i => i.isExported());
        for (const iface of exportedIfaces) {
            const ifaceProps = collectAllInterfaceProperties(iface);
            props.push(...parsePropertySignatures(ifaceProps));
        }
    }

    return props;
}
