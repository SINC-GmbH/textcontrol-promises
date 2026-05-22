import * as path from 'path';
import { Project, FunctionDeclaration, Node } from 'ts-morph';
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

export interface ParsedMethod {
    name: string;
    params: ParsedParam[];
    /** Return type text from d.ts (almost always 'void'). */
    returnTypeText: string;
    jsDoc: JsDocInfo;
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

        methods.push({
            name: fnName,
            params,
            returnTypeText: fn.getReturnTypeNode()?.getText() ?? 'void',
            jsDoc: extractJsDoc(fn),
        });
    }

    return methods;
}
