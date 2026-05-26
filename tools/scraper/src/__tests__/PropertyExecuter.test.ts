import * as path from 'path';
import { describe, it, expect } from 'vitest';
import { PropertyExecuter } from '../executors/PropertyExecuter';
import type { ScrapedClass } from '../types';

const FIXTURES = path.resolve(__dirname, 'fixtures');

function makeClass(name: string, properties: { name: string; typeText: string }[]): ScrapedClass {
    return {
        name,
        description: '',
        sourceUrl: `http://example.com/${name}`,
        deprecated: false,
        isClass: true,
        methods: [],
        properties: properties.map(p => ({
            name: p.name,
            typeText: p.typeText,
            description: '',
            readonly: false,
            optional: false,
            deprecated: false,
            sourceUrl: `http://example.com/${name}`,
        })),
    };
}

describe('PropertyExecuter.diff', () => {
    it('detects declared properties correctly', () => {
        const cls = makeClass('PropsClass', [
            { name: 'count', typeText: 'number' },
            { name: 'name', typeText: 'string' },
            { name: 'visible', typeText: 'boolean' },
        ]);
        const report = PropertyExecuter.diff(cls, path.join(FIXTURES, 'PropsClass.d.ts'));
        expect(report.removedProperties).toHaveLength(0);
        expect(report.newProperties).toHaveLength(0);
    });

    it('does not mistake multi-line method params for properties', () => {
        // TextFrameCollection-style: addAtFixedPositionOnPage has 6 params across multiple lines.
        // None of size, pageNumber, location, insertionMode, callback, errorCallback are properties.
        const cls = makeClass('PropsClass', [
            { name: 'count', typeText: 'number' },
            { name: 'name', typeText: 'string' },
            { name: 'visible', typeText: 'boolean' },
        ]);
        const report = PropertyExecuter.diff(cls, path.join(FIXTURES, 'PropsClass.d.ts'));
        const declaredNames = report.removedProperties.map(p => p.name);
        const falsePositives = ['size', 'pageNumber', 'location', 'insertionMode', 'callback', 'errorCallback'];
        for (const name of falsePositives) {
            expect(declaredNames).not.toContain(name);
        }
    });

    it('does not mistake single-line method params for properties', () => {
        const cls = makeClass('PropsClass', [
            { name: 'count', typeText: 'number' },
            { name: 'name', typeText: 'string' },
            { name: 'visible', typeText: 'boolean' },
        ]);
        const report = PropertyExecuter.diff(cls, path.join(FIXTURES, 'PropsClass.d.ts'));
        const declaredNames = report.removedProperties.map(p => p.name);
        expect(declaredNames).not.toContain('item');
    });

    it('reports new property present in docs but absent from d.ts', () => {
        const cls = makeClass('PropsClass', [
            { name: 'count', typeText: 'number' },
            { name: 'name', typeText: 'string' },
            { name: 'visible', typeText: 'boolean' },
            { name: 'brandNewProp', typeText: 'string' },
        ]);
        const report = PropertyExecuter.diff(cls, path.join(FIXTURES, 'PropsClass.d.ts'));
        expect(report.newProperties.map(p => p.name)).toContain('brandNewProp');
    });

    it('reports removed property present in d.ts but absent from docs', () => {
        const cls = makeClass('PropsClass', [
            { name: 'count', typeText: 'number' },
            // name and visible omitted
        ]);
        const report = PropertyExecuter.diff(cls, path.join(FIXTURES, 'PropsClass.d.ts'));
        const removedNames = report.removedProperties.map(p => p.name);
        expect(removedNames).toContain('name');
        expect(removedNames).toContain('visible');
    });

    it('returns empty report for a missing file', () => {
        const cls = makeClass('NonExistent', []);
        const report = PropertyExecuter.diff(cls, path.join(FIXTURES, 'NonExistent.d.ts'));
        expect(report.newProperties).toHaveLength(0);
        expect(report.removedProperties).toHaveLength(0);
    });
});
