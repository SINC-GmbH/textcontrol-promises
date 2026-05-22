import * as path from 'path';
import { Project } from 'ts-morph';
import { DeclaredMethod } from './types';

/**
 * Reads top-level exported function declarations from TXTextControl.d.ts.
 * Used by the legacy single-class diff workflow.
 */
export function readDeclaredMethods(dtsPath: string): DeclaredMethod[] {
    const absPath = path.resolve(dtsPath);
    const project = new Project({
        compilerOptions: { skipLibCheck: true, noEmit: true, strict: false },
        skipAddingFilesFromTsConfig: true,
    });
    project.addSourceFileAtPath(absPath);
    const sourceFile = project.getSourceFileOrThrow(absPath);

    return sourceFile.getFunctions().map(fn => {
        const jsDoc = fn.getJsDocs();
        const deprecated = jsDoc.some(d => d.getTags().some(t => t.getTagName() === 'deprecated'));
        return {
            name: fn.getName() ?? '',
            params: fn.getParameters().map(p => {
                const typeText = p.getTypeNode()?.getText() ?? 'any';
                return `${p.getName()}${p.isOptional() ? '?' : ''}: ${typeText}`;
            }).join(', '),
            returnType: fn.getReturnTypeNode()?.getText() ?? 'void',
            deprecated,
        };
    }).filter(m => m.name);
}
