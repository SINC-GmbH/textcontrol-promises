import * as path from 'path';
import { describe, it, expect } from 'vitest';
import { MethodExecuter } from '../executors/MethodExecuter';
import type { ScrapedClass } from '../types';

const FIXTURES = path.resolve(__dirname, 'fixtures');
const FIXTURE_FILE = path.join(FIXTURES, 'SimpleClass.d.ts');

function makeClass(methods: { name: string; rawParams: string }[]): ScrapedClass {
    return {
        name: 'SimpleClass',
        description: '',
        sourceUrl: 'http://example.com',
        deprecated: false,
        isClass: false,
        methods: methods.map(m => ({
            ...m,
            className: 'SimpleClass',
            description: '',
            sourceUrl: '',
            deprecated: false,
        })),
        properties: [],
    };
}

// ─── signaturesMatch — P1-1 regression ───────────────────────────────────────

describe('signaturesMatch — callback filtering before length check', () => {
    it('does not flag a sig change when docs has (param, callback) but d.ts has (param) — callback stripped', () => {
        // docs: withOneParam(<string> name, <EmptyRequestCallback> callback)  → rawParams has 2 params
        // d.ts: withOneParam(name: string): void                              → 1 param (no callback)
        // Before the P1-1 fix, raw lengths 2 vs 1 caused a false sig change.
        const cls = makeClass([{ name: 'withOneParam', rawParams: '<string> name, <EmptyRequestCallback> callback' }]);
        const report = MethodExecuter.diff(cls, FIXTURE_FILE);
        const sigChange = report.signatureChanges.find(c => c.methodName === 'withOneParam');
        expect(sigChange).toBeUndefined();
    });

    it('does not flag a sig change when both sides have only a callback param', () => {
        const cls = makeClass([{ name: 'withCallback', rawParams: '<EmptyRequestCallback> callback' }]);
        const report = MethodExecuter.diff(cls, FIXTURE_FILE);
        expect(report.signatureChanges.find(c => c.methodName === 'withCallback')).toBeUndefined();
    });

    it('still flags a real sig change — docs has extra required param compared to d.ts', () => {
        // docs: noParams(<string> extra)  — d.ts: noParams()
        const cls = makeClass([{ name: 'noParams', rawParams: '<string> extra' }]);
        const report = MethodExecuter.diff(cls, FIXTURE_FILE);
        expect(report.signatureChanges.find(c => c.methodName === 'noParams')).toBeDefined();
    });

    it('does not flag when only difference is a callback param in docs that was stripped in d.ts along with other params', () => {
        // docs: (name, count, callback) — d.ts: (name, count) — only callback is different
        const cls = makeClass([{ name: 'withParams', rawParams: '<string> name, <number> count, <EmptyRequestCallback> callback' }]);
        const report = MethodExecuter.diff(cls, FIXTURE_FILE);
        expect(report.signatureChanges.find(c => c.methodName === 'withParams')).toBeUndefined();
    });
});

// ─── ClassExecuter with parentName ───────────────────────────────────────────

import { ClassExecuter } from '../executors/ClassExecuter';
import { TypesIndex } from '../TypesIndex';

describe('ClassExecuter — parentName qualification', () => {
    it('reports new class without parentName as bare name', () => {
        const index = new TypesIndex([FIXTURES]);
        const scraped: ScrapedClass[] = [{
            name: 'BrandNewClass',
            description: '',
            sourceUrl: '',
            deprecated: false,
            isClass: false,
            methods: [],
            properties: [],
        }];
        const { newClasses } = ClassExecuter.diff(scraped, index);
        expect(newClasses).toContain('BrandNewClass');
    });

    it('reports new class with parentName as qualified name', () => {
        const index = new TypesIndex([FIXTURES]);
        const scraped: ScrapedClass[] = [{
            name: 'NestedEnum',
            description: '',
            sourceUrl: '',
            deprecated: false,
            isClass: false,
            methods: [],
            properties: [],
            parentName: 'SaveSettings',
        }];
        const { newClasses } = ClassExecuter.diff(scraped, index);
        expect(newClasses).toContain('SaveSettings.NestedEnum');
        expect(newClasses).not.toContain('NestedEnum');
    });

    it('does not report a class as new when it exists in the TypesIndex, even with a parentName', () => {
        const index = new TypesIndex([FIXTURES]);
        // SimpleClass is in the fixtures index
        const scraped: ScrapedClass[] = [{
            name: 'SimpleClass',
            description: '',
            sourceUrl: '',
            deprecated: false,
            isClass: false,
            methods: [],
            properties: [],
            parentName: 'SomeParent',
        }];
        const { newClasses } = ClassExecuter.diff(scraped, index);
        expect(newClasses).not.toContain('SimpleClass');
        expect(newClasses).not.toContain('SomeParent.SimpleClass');
    });
});

// ─── DtsGenerator — generateEnum ─────────────────────────────────────────────

import { generateInterface } from '../DtsGenerator';

describe('DtsGenerator — generateEnum', () => {
    const baseEnum: ScrapedClass = {
        name: 'Direction',
        description: 'Text direction.',
        sourceUrl: '',
        deprecated: false,
        isClass: false,
        isEnum: true,
        methods: [],
        properties: [],
        enumMembers: [
            { name: 'Left', description: 'Left to right.' },
            { name: 'Right', description: 'Right to left.' },
            { name: 'None', description: '' },
        ],
    };

    it('generates export enum with all member names', () => {
        const output = generateInterface(baseEnum, new Set());
        expect(output).toContain('export enum Direction {');
        expect(output).toContain('Left,');
        expect(output).toContain('Right,');
        expect(output).toContain('None,');
    });

    it('includes JSDoc for members that have descriptions', () => {
        const output = generateInterface(baseEnum, new Set());
        expect(output).toContain('/** Left to right. */');
        expect(output).not.toMatch(/\/\*\*\s*\*\//); // no empty JSDoc for None
    });

    it('includes the class-level JSDoc description', () => {
        const output = generateInterface(baseEnum, new Set());
        expect(output).toContain('/** Text direction. */');
    });

    it('generates an empty enum body when enumMembers is absent', () => {
        const enumNoMembers: ScrapedClass = { ...baseEnum, enumMembers: undefined };
        const output = generateInterface(enumNoMembers, new Set());
        expect(output).toContain('export enum Direction {');
        expect(output).toContain('}');
        // Should not contain any member lines
        expect(output).not.toMatch(/    \w+,/);
    });

    it('does not generate interface/class syntax for enum pages', () => {
        const output = generateInterface(baseEnum, new Set());
        expect(output).not.toContain('export interface');
        expect(output).not.toContain('export class');
    });
});
