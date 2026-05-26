import * as fs from 'fs';
import * as path from 'path';
import { Project } from 'ts-morph';

export interface SubNamespaceEntry {
    typeName: string;
    subTypeNames: string[];
}

export interface TypeParam {
    name: string;
    /** Raw constraint text as written in the source file (e.g. "FormattingStyle"). */
    constraint?: string;
}

export interface ObjectTypeEntry {
    typeName: string;
    typeParams: TypeParam[];
}

export interface GlobalDtsData {
    subNamespaceTypes: SubNamespaceEntry[];
    plainObjectTypes: ObjectTypeEntry[];
    plainEnumTypes: string[];
}

/** Reads uncommented `export * from './Foo'` lines from a barrel index.d.ts. */
function readExportedNames(indexPath: string): string[] {
    const content = fs.readFileSync(indexPath, 'utf-8');
    const re = /^export \* from ['"]\.\/([^'"]+)['"]/gm;
    const names: string[] = [];
    let m: RegExpExecArray | null;
    while ((m = re.exec(content)) !== null) {
        names.push(m[1]);
    }
    return names.sort();
}

export function collectGlobalDtsData(objectsDir: string, enumsDir: string): GlobalDtsData {
    const subNamespaceTypes: SubNamespaceEntry[] = [];
    const plainObjectTypes: ObjectTypeEntry[] = [];

    // Only process types actually exported from objects/index.d.ts —
    // files present in the folder but not in the index (e.g. Proofing) are not
    // part of TXTextControlNamespace and must be excluded.
    const exportedNames = readExportedNames(path.join(objectsDir, 'index.d.ts'));

    const project = new Project({
        compilerOptions: { skipLibCheck: true, noEmit: true, strict: false },
        skipAddingFilesFromTsConfig: true,
    });

    for (const name of exportedNames) {
        const filePath = path.resolve(objectsDir, `${name}.d.ts`);
        if (fs.existsSync(filePath)) project.addSourceFileAtPath(filePath);
    }

    for (const name of exportedNames) {
        const filePath = path.resolve(objectsDir, `${name}.d.ts`);
        if (!fs.existsSync(filePath)) continue;

        const sf = project.getSourceFileOrThrow(filePath);

        // Detect dual namespace+interface pattern (namespace with nested enums)
        const exportedNs = sf.getModules().find(m => m.hasExportKeyword());
        if (exportedNs) {
            const enums = exportedNs.getEnums();
            if (enums.length > 0) {
                subNamespaceTypes.push({ typeName: name, subTypeNames: enums.map(e => e.getName()) });
                continue;
            }
        }

        const iface = sf.getInterfaces()[0];
        const cls = sf.getClasses()[0];
        const decl = iface ?? cls;
        if (!decl) continue;

        const typeParams: TypeParam[] = decl.getTypeParameters().map(tp => ({
            name: tp.getName(),
            constraint: tp.getConstraint()?.getText(),
        }));

        plainObjectTypes.push({ typeName: name, typeParams });
    }

    const plainEnumTypes = readExportedNames(path.join(enumsDir, 'index.d.ts'));

    return { subNamespaceTypes, plainObjectTypes, plainEnumTypes };
}

export function generateGlobalDts(data: GlobalDtsData): string {
    const NS = 'import("./TXTextControlNamespace")';
    const lines: string[] = [];

    lines.push(`// Script file — no top-level import/export statements.`);
    lines.push(`// This is intentional: script files allow "declare var X" and "declare namespace X"`);
    lines.push(`// to be merged so that @type {TXTextControl.SomeType} annotations resolve in JSDoc.`);
    lines.push(`// Referenced from lib/index.d.ts via triple-slash so consumers get this automatically.`);
    lines.push(`/** @scraper-ignore */`);
    lines.push(`declare var TXTextControl:`);
    lines.push(`    import("./TXTextControl").TXTextControl`);
    lines.push(`    & typeof import("./TXTextControlNamespace");`);
    lines.push(``);
    lines.push(`/** Namespace half — enables @type {TXTextControl.X} in JSDoc for consumers. */`);
    lines.push(`declare namespace TXTextControl {`);

    if (data.subNamespaceTypes.length > 0) {
        lines.push(``);
        lines.push(`    // ── Dual namespace+interface types (namespace has nested sub-enums) ─────────`);
        for (const ns of data.subNamespaceTypes) {
            lines.push(`    export namespace ${ns.typeName} {`);
            for (const sub of ns.subTypeNames) {
                lines.push(`        export type ${sub} = ${NS}.${ns.typeName}.${sub};`);
            }
            lines.push(`    }`);
        }
    }

    if (data.plainObjectTypes.length > 0) {
        lines.push(``);
        lines.push(`    // ── Plain interfaces / object types ────────────────────────────────────────`);
        for (const entry of data.plainObjectTypes) {
            lines.push(`    ${formatTypeAlias(entry.typeName, entry.typeParams, NS)}`);
        }
    }

    if (data.plainEnumTypes.length > 0) {
        lines.push(``);
        lines.push(`    // ── Enums ──────────────────────────────────────────────────────────────────`);
        for (const name of data.plainEnumTypes) {
            lines.push(`    export type ${name} = ${NS}.${name};`);
        }
    }

    lines.push(`}`);
    lines.push(``);

    return lines.join('\n');
}

function formatTypeAlias(typeName: string, typeParams: TypeParam[], NS: string): string {
    if (typeParams.length === 0) {
        return `export type ${typeName} = ${NS}.${typeName};`;
    }

    // LHS: constraints are rewritten as inline imports so the script file stays module-free
    const lhs = typeParams.map(tp =>
        tp.constraint ? `${tp.name} extends ${NS}.${tp.constraint}` : tp.name
    );
    // RHS: just the type parameter names
    const rhs = typeParams.map(tp => tp.name);

    return `export type ${typeName}<${lhs.join(', ')}> = ${NS}.${typeName}<${rhs.join(', ')}>;`;
}
