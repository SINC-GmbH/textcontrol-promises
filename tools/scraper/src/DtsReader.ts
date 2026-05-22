import * as path from 'path';
import { Project } from 'ts-morph';
import { DeclaredMethod } from './types';

/**
 * Reads the current d.ts declarations from TXTextControl.d.ts using ts-morph.
 * Returns one DeclaredMethod per exported function.
 */
export function readDeclaredMethods(dtsPath: string): DeclaredMethod[] {
    const absPath = path.resolve(dtsPath);
    const project = new Project({
        compilerOptions: { skipLibCheck: true, noEmit: true, strict: false },
        skipAddingFilesFromTsConfig: true,
    });
    project.addSourceFileAtPath(absPath);
    const sourceFile = project.getSourceFileOrThrow(absPath);

    return sourceFile.getFunctions().map(fn => ({
        name: fn.getName() ?? '',
        params: fn.getParameters().map(p => {
            const typeText = p.getTypeNode()?.getText() ?? 'any';
            return `${p.getName()}${p.isOptional() ? '?' : ''}: ${typeText}`;
        }).join(', '),
        returnType: fn.getReturnTypeNode()?.getText() ?? 'void',
    })).filter(m => m.name);
}
