import { describe, it, expect } from 'vitest';
import { classifyInterface, collectionItemClass } from '../ObjectClassifier';
import type { ParsedInterface } from '../DtsParser';

function makeInterface(
    name: string,
    methodNames: string[],
    methodsHaveCallback = false,
    propertyNames: string[] = [],
): ParsedInterface {
    return {
        name,
        baseInterfaces: [],
        genericParams: [],
        sourceFile: '',
        methods: methodNames.map(mName => ({
            name: mName,
            params: methodsHaveCallback
                ? [{ name: 'callback', typeText: 'EmptyRequestCallback', isCallback: true, isOptional: false }]
                : [],
            returnTypeText: 'void',
            typeParams: [],
            jsDoc: { description: '', paramDescriptions: new Map(), deprecated: false, returnDescription: '' },
        })),
        properties: propertyNames.map(pName => ({
            name: pName,
            typeText: 'string',
            readonly: false,
            optional: false,
            description: '',
            deprecated: false,
        })),
    };
}

// ─── classifyInterface ────────────────────────────────────────────────────────

describe('classifyInterface', () => {
    it('returns skip for interface with no methods and no properties', () => {
        const result = classifyInterface(makeInterface('EmptyType', []));
        expect(result).toBe('skip');
    });

    it('returns collection when name ends in Collection', () => {
        const result = classifyInterface(makeInterface('TableCollection', ['elementAt', 'getCount']));
        expect(result).toBe('collection');
    });

    it('returns collection when it has all three collection methods', () => {
        const result = classifyInterface(makeInterface('ItemList', ['elementAt', 'forEach', 'getCount']));
        expect(result).toBe('collection');
    });

    it('does not classify as collection if only two of three methods present', () => {
        const result = classifyInterface(makeInterface('SomeClass', ['elementAt', 'getCount'], true));
        expect(result).toBe('object');
    });

    it('returns object when interface has a method with a callback param', () => {
        const result = classifyInterface(makeInterface('Document', ['loadDocument', 'saveDocument'], true));
        expect(result).toBe('object');
    });

    it('returns value-object for interface with properties but no callback methods', () => {
        const result = classifyInterface(makeInterface('Rect', [], false, ['x', 'y', 'width', 'height']));
        expect(result).toBe('value-object');
    });

    it('returns value-object for interface with methods but no callbacks', () => {
        const result = classifyInterface(makeInterface('Color', ['toHex', 'toString'], false));
        expect(result).toBe('value-object');
    });
});

// ─── collectionItemClass ──────────────────────────────────────────────────────

describe('collectionItemClass', () => {
    it('strips the Collection suffix', () => {
        expect(collectionItemClass('TableCollection')).toBe('Table');
        expect(collectionItemClass('HeaderFooterCollection')).toBe('HeaderFooter');
        expect(collectionItemClass('TextFrameCollection')).toBe('TextFrame');
    });

    it('leaves names without Collection suffix unchanged', () => {
        expect(collectionItemClass('Document')).toBe('Document');
    });
});
