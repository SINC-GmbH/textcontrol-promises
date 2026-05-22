import * as path from 'path';
import { Project, FunctionDeclaration, Node, VariableDeclarationKind } from 'ts-morph';
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

/**
 * Parses all exported function declarations from a TXTextControl-style d.ts file.
 * Uses ts-morph so that imports are resolved automatically from the file system.
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

    return methods;
}

export interface ParsedProperty {
    name: string;
    typeText: string;
    readonly: boolean;
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
            const typeText = decl.getTypeNode()?.getText() ?? 'unknown';
            props.push({ name, typeText, readonly: isConst, description, deprecated });
        }
    }

    return props;
}
