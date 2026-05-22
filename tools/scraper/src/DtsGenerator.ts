import * as fs from 'fs';
import * as path from 'path';
import { ScrapedClass, ScrapedMethod, ScrapedClassProperty } from './types';

// Known primitive type mappings from docs type names
const PRIMITIVE_MAP: Record<string, string> = {
    'string': 'string',
    'number': 'number',
    'boolean': 'boolean',
    'bool': 'boolean',
    'int': 'number',
    'float': 'number',
    'void': 'void',
    'any': 'any',
    'object': 'any',
};

/** Maps a docs type name to a TypeScript type. */
function mapType(typeName: string, knownClassNames: Set<string>): string {
    const t = typeName.trim();
    if (!t) return 'any';
    if (PRIMITIVE_MAP[t.toLowerCase()]) return PRIMITIVE_MAP[t.toLowerCase()];
    if (knownClassNames.has(t)) return t;
    // Ends with "Callback" → keep as-is (it's a callback type)
    if (t.endsWith('Callback')) return t;
    // Ends with "[]" → array type
    if (t.endsWith('[]')) {
        const base = t.slice(0, -2);
        return `${mapType(base, knownClassNames)}[]`;
    }
    // Unknown — keep as-is but mark it
    return `${t} /* TODO: verify type */`;
}

/**
 * Converts a docs raw param string to a TypeScript parameter list.
 * Docs format: "<Type> name, [<Type> optName]"
 * Strips callback/errorCallback params (not part of the Promise-based API).
 */
function convertParams(rawParams: string, knownClassNames: Set<string>): string {
    if (!rawParams.trim()) return '';
    return rawParams
        .split(',')
        .map(part => {
            const trimmed = part.trim();
            const isOptional = trimmed.startsWith('[') && trimmed.endsWith(']');
            const inner = isOptional ? trimmed.slice(1, -1).trim() : trimmed;
            const m = inner.match(/^<([^>]+)>\s+(\w+)$/);
            if (!m) return `${inner}${isOptional ? '?' : ''}: any`;
            const [, typeName, paramName] = m;
            // Skip callback params — they become the Promise return type
            if (paramName.toLowerCase().includes('callback')) return null;
            return `${paramName}${isOptional ? '?' : ''}: ${mapType(typeName, knownClassNames)}`;
        })
        .filter((p): p is string => p !== null)
        .join(', ');
}

/** Infers a return type from a method's callback params in the raw params string. */
function inferReturnType(rawParams: string): string {
    // Look for a callback param like "<RequestBooleanCallback> callback"
    const callbackMatch = rawParams.match(/<(Request(\w+)Callback)>/);
    if (callbackMatch) {
        const inner = callbackMatch[2];
        if (inner === 'Number') return 'number';
        if (inner === 'Boolean') return 'boolean';
        if (inner === 'String') return 'string';
        if (inner === 'Strings') return 'string[]';
        if (inner === 'Size') return 'Size';
        // Other Request*Callback — return any for now
        return `any /* ${callbackMatch[1]} */`;
    }
    // EmptyRequestCallback or no callback → void
    if (/EmptyRequestCallback|LoadDocumentCallback/.test(rawParams)) return 'void';
    // Has callback but type unknown → void
    if (rawParams.toLowerCase().includes('callback')) return 'void';
    return 'void';
}

function generateMethodStub(method: ScrapedMethod, knownClassNames: Set<string>): string {
    const params = convertParams(method.rawParams, knownClassNames);
    const returnType = inferReturnType(method.rawParams);
    const lines: string[] = [];
    if (method.description) lines.push(`    /** ${method.description} */`);
    if (method.deprecated) lines.push('    /** @deprecated */');
    lines.push(`    ${method.name}(${params}): ${returnType};`);
    return lines.join('\n');
}

function generatePropertyStub(prop: ScrapedClassProperty, knownClassNames: Set<string>): string {
    const lines: string[] = [];
    if (prop.description) lines.push(`    /** ${prop.description} */`);
    if (prop.deprecated) lines.push('    /** @deprecated */');
    const tsType = mapType(prop.typeText, knownClassNames);
    const modifier = prop.readonly ? 'readonly ' : '';
    lines.push(`    ${modifier}${prop.name}: ${tsType};`);
    return lines.join('\n');
}

/** Generates the d.ts content for one scraped class. */
export function generateInterface(cls: ScrapedClass, knownClassNames: Set<string>): string {
    const lines: string[] = [];

    // Collect imports needed for callback types referenced in methods
    const callbackTypes = new Set<string>();
    for (const m of cls.methods) {
        const callbackMatches = m.rawParams.matchAll(/<([\w]+Callback)>/g);
        for (const match of callbackMatches) callbackTypes.add(match[1]);
    }

    if (callbackTypes.size > 0) {
        const sorted = [...callbackTypes].sort();
        lines.push(`import { ${sorted.join(', ')} } from '../callbacks';`);
        lines.push('');
    }

    if (cls.description) lines.push(`/** ${cls.description} */`);
    lines.push(`export interface ${cls.name} {`);

    for (const prop of cls.properties) {
        lines.push(generatePropertyStub(prop, knownClassNames));
    }
    if (cls.properties.length > 0 && cls.methods.length > 0) lines.push('');

    for (const method of cls.methods) {
        lines.push(generateMethodStub(method, knownClassNames));
    }

    lines.push('}');
    lines.push('');

    return lines.join('\n');
}

/**
 * Generates d.ts files for all scraped classes.
 * Returns a map of filename → content.
 */
export function generateAll(classes: ScrapedClass[]): Map<string, string> {
    const knownClassNames = new Set(classes.map(c => c.name));
    const result = new Map<string, string>();
    for (const cls of classes) {
        result.set(`${cls.name}.d.ts`, generateInterface(cls, knownClassNames));
    }
    return result;
}

/** Writes generated d.ts files to disk (or prints them in dry-run mode). */
export function writeAll(
    files: Map<string, string>,
    outDir: string,
    dryRun: boolean,
    onlyNew: boolean,
): void {
    if (dryRun) {
        console.log(`\n[DRY RUN] Would write ${files.size} d.ts files to ${outDir}`);
        for (const [filename, content] of files) {
            console.log(`\n─── ${filename} ───\n${content}`);
        }
        return;
    }

    fs.mkdirSync(outDir, { recursive: true });
    let written = 0;
    let skipped = 0;

    for (const [filename, content] of files) {
        const filePath = path.join(outDir, filename);
        if (onlyNew && fs.existsSync(filePath)) {
            skipped++;
            continue;
        }
        fs.writeFileSync(filePath, content, 'utf-8');
        written++;
    }

    console.log(`Written: ${written} files${skipped > 0 ? `, skipped (already exist): ${skipped}` : ''}`);
}
