import * as path from 'path';
import { describe, it, expect } from 'vitest';
import { diffClass, readDeclaredInterface, likelyTypo } from '../Differ';
import type { ScrapedClass, ScrapedMethod } from '../types';

const FIXTURES = path.resolve(__dirname, 'fixtures');

function makeClass(name: string, methods: Partial<ScrapedMethod>[]): ScrapedClass {
    return {
        name,
        description: '',
        sourceUrl: `http://example.com/${name}`,
        deprecated: false,
        isClass: true,
        methods: methods.map(m => ({
            name: m.name ?? 'method',
            rawParams: m.rawParams ?? '',
            description: m.description ?? '',
            deprecated: m.deprecated ?? false,
            sourceUrl: `http://example.com/${name}`,
            className: name,
        })),
        properties: [],
    };
}

// ─── diffClass ───────────────────────────────────────────────────────────────

describe('diffClass', () => {
    it('reports new method present in docs but not in d.ts', () => {
        const declared = readDeclaredInterface(
            path.join(FIXTURES, 'SimpleClass.d.ts'), 'SimpleClass',
        );
        const cls = makeClass('SimpleClass', [
            { name: 'noParams' },
            { name: 'brandNewMethod', rawParams: '<string> text' },
        ]);
        const report = diffClass(cls, declared);
        expect(report.newMethods.map(m => m.name)).toContain('brandNewMethod');
    });

    it('reports removed method present in d.ts but not in docs', () => {
        const declared = readDeclaredInterface(
            path.join(FIXTURES, 'SimpleClass.d.ts'), 'SimpleClass',
        );
        const cls = makeClass('SimpleClass', [
            { name: 'noParams' },
            // withParams is absent from scraped
        ]);
        const report = diffClass(cls, declared);
        expect(report.removedMethods.map(m => m.name)).toContain('withParams');
    });

    it('reports no changes when signatures match (same count)', () => {
        const declared = readDeclaredInterface(
            path.join(FIXTURES, 'SimpleClass.d.ts'), 'SimpleClass',
        );
        const cls = makeClass('SimpleClass', [
            { name: 'noParams', rawParams: '' },
            { name: 'withParams', rawParams: '<string> name, <number> count' },
            { name: 'withOptional', rawParams: '<string> name, [<number> count]' },
            { name: 'withCallback', rawParams: '<EmptyRequestCallback> callback' },
            { name: 'oldMethod', rawParams: '' },
        ]);
        const report = diffClass(cls, declared);
        expect(report.signatureChanges).toHaveLength(0);
    });

    it('reports signature change when docs has extra param', () => {
        const declared = readDeclaredInterface(
            path.join(FIXTURES, 'SimpleClass.d.ts'), 'SimpleClass',
        );
        const cls = makeClass('SimpleClass', [
            { name: 'noParams', rawParams: '<string> extra' },
        ]);
        const report = diffClass(cls, declared);
        expect(report.signatureChanges.map(c => c.methodName)).toContain('noParams');
    });

    it('reports signature change when dts has optional but docs has required', () => {
        const declared = readDeclaredInterface(
            path.join(FIXTURES, 'SimpleClass.d.ts'), 'SimpleClass',
        );
        // withOptional has count? in d.ts — docs marks it required (no brackets) → sig change
        const cls = makeClass('SimpleClass', [
            { name: 'withOptional', rawParams: '<string> name, <number> count' },
        ]);
        const report = diffClass(cls, declared);
        expect(report.signatureChanges.map(c => c.methodName)).toContain('withOptional');
    });

    it('does not report sig change when docs optional maps to dts required (nullable case)', () => {
        const declared = readDeclaredInterface(
            path.join(FIXTURES, 'SimpleClass.d.ts'), 'SimpleClass',
        );
        // withParams has two required params in d.ts; docs can safely mark them optional
        const cls = makeClass('SimpleClass', [
            { name: 'withParams', rawParams: '<string> name, [<number> count]' },
        ]);
        const report = diffClass(cls, declared);
        expect(report.signatureChanges.map(c => c.methodName)).not.toContain('withParams');
    });

    it('filters callback params before comparing', () => {
        const declared = readDeclaredInterface(
            path.join(FIXTURES, 'SimpleClass.d.ts'), 'SimpleClass',
        );
        // withCallback(callback: EmptyRequestCallback) in d.ts matches docs (<EmptyRequestCallback> callback)
        // after filtering callbacks from both sides, 0 params remain on each side → no sig change
        const cls = makeClass('SimpleClass', [
            { name: 'withCallback', rawParams: '<EmptyRequestCallback> callback' },
        ]);
        const report = diffClass(cls, declared);
        expect(report.signatureChanges.map(c => c.methodName)).not.toContain('withCallback');
    });

    it('detects deprecation change', () => {
        const declared = readDeclaredInterface(
            path.join(FIXTURES, 'SimpleClass.d.ts'), 'SimpleClass',
        );
        // oldMethod already has @deprecated in fixture — no change expected
        const cls = makeClass('SimpleClass', [
            { name: 'oldMethod', deprecated: true },
        ]);
        const report = diffClass(cls, declared);
        // oldMethod is deprecated in both — should produce no deprecationChange
        // (the change is only reported when docs marks it deprecated but d.ts does not)
        expect(report.deprecationChanges.map(d => d.name)).not.toContain('oldMethod');
    });
});

// ─── readDeclaredInterface (inheritance) ─────────────────────────────────────

describe('readDeclaredInterface', () => {
    it('reads own methods from a simple fixture', () => {
        const result = readDeclaredInterface(
            path.join(FIXTURES, 'SimpleClass.d.ts'), 'SimpleClass',
        );
        expect(result.methods.map(m => m.name)).toEqual(
            expect.arrayContaining(['noParams', 'withParams', 'withOptional', 'oldMethod']),
        );
    });

    it('returns empty methods list for a missing file', () => {
        const result = readDeclaredInterface(
            path.join(FIXTURES, 'NonExistent.d.ts'), 'NonExistent',
        );
        expect(result.methods).toHaveLength(0);
    });

    it('includes inherited methods from parent via extends', () => {
        const result = readDeclaredInterface(
            path.join(FIXTURES, 'ChildClass.d.ts'), 'ChildClass',
            [FIXTURES],
        );
        const names = result.methods.map(m => m.name);
        expect(names).toContain('ownMethod');
        expect(names).toContain('inheritedMethod');
    });

    it('own methods shadow inherited methods of same name', () => {
        const result = readDeclaredInterface(
            path.join(FIXTURES, 'ChildClass.d.ts'), 'ChildClass',
            [FIXTURES],
        );
        // sharedMethod is in both ChildClass and ParentClass — should appear only once
        const occurrences = result.methods.filter(m => m.name === 'sharedMethod');
        expect(occurrences).toHaveLength(1);
    });
});

// ─── likelyTypo ──────────────────────────────────────────────────────────────

describe('likelyTypo', () => {
    it('returns true for identical strings (distance 0 ≤ 2)', () => {
        // Two identical names would never appear as a new+removed pair in practice,
        // but the function returns true since Levenshtein distance 0 satisfies ≤ 2.
        expect(likelyTypo('getColor', 'getColor')).toBe(true);
    });

    it('returns true for distance 1 (missing char)', () => {
        // 'isCommonPargraphFormatValueSelected' vs 'isCommonParagraphFormatValueSelected' — real docs typo
        expect(likelyTypo('isCommonPargraphFormatValueSelected', 'isCommonParagraphFormatValueSelected')).toBe(true);
    });

    it('returns true for distance 2 (two substitutions)', () => {
        expect(likelyTypo('getColur', 'getColour')).toBe(true);
    });

    it('returns false for distance 3', () => {
        expect(likelyTypo('getXyz', 'getAbc')).toBe(false);
    });

    it('short-circuits when length difference exceeds 3', () => {
        expect(likelyTypo('get', 'getVeryLongMethodName')).toBe(false);
    });

    it('returns false for completely different method names', () => {
        expect(likelyTypo('loadDocument', 'saveDocument')).toBe(false);
    });
});
