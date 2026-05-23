import { describe, it, expect } from 'vitest';
import { classifyMethod } from '../MethodClassifier';
import type { ParsedMethod, ParsedParam } from '../DtsParser';

function makeParam(name: string, typeText: string, isCallback: boolean, isOptional = false): ParsedParam {
    return { name, typeText, isCallback, isOptional };
}

function makeMethod(name: string, params: ParsedParam[]): ParsedMethod {
    return {
        name,
        params,
        returnTypeText: 'void',
        typeParams: [],
        jsDoc: { description: '', paramDescriptions: new Map(), deprecated: false, returnDescription: '' },
    };
}

// ─── classifyMethod ───────────────────────────────────────────────────────────

describe('classifyMethod', () => {
    it('classifies a method with no callbacks as passthrough', () => {
        const method = makeMethod('getSelection', [
            makeParam('start', 'number', false),
        ]);
        const result = classifyMethod(method);
        expect(result.kind).toBe('passthrough');
    });

    it('classifies EmptyRequestCallback as promise-void', () => {
        const method = makeMethod('setFont', [
            makeParam('name', 'string', false),
            makeParam('callback', 'EmptyRequestCallback', true),
        ]);
        const result = classifyMethod(method);
        expect(result.kind).toBe('promise-void');
    });

    it('classifies LoadDocumentCallback as promise-void', () => {
        const method = makeMethod('loadDocument', [
            makeParam('filePath', 'string', false),
            makeParam('callback', 'LoadDocumentCallback', true),
        ]);
        const result = classifyMethod(method);
        expect(result.kind).toBe('promise-void');
    });

    it('classifies a method with only ErrorCallback (no main callback) as promise-void', () => {
        const method = makeMethod('init', [
            makeParam('errorCallback', 'ErrorCallback', true),
        ]);
        const result = classifyMethod(method);
        expect(result.kind).toBe('promise-void');
    });

    it('classifies RequestNumberCallback as promise-value', () => {
        const method = makeMethod('getPageCount', [
            makeParam('callback', 'RequestNumberCallback', true),
        ]);
        const result = classifyMethod(method);
        expect(result.kind).toBe('promise-value');
    });

    it('classifies RequestBooleanCallback as promise-value', () => {
        const method = makeMethod('isSpellCheckEnabled', [
            makeParam('callback', 'RequestBooleanCallback', true),
        ]);
        const result = classifyMethod(method);
        expect(result.kind).toBe('promise-value');
    });

    it('separates nonCallbackParams correctly', () => {
        const method = makeMethod('loadDocument', [
            makeParam('filePath', 'string', false),
            makeParam('fileType', 'number', false),
            makeParam('callback', 'LoadDocumentCallback', true),
            makeParam('errorCallback', 'ErrorCallback', true),
        ]);
        const result = classifyMethod(method);
        expect(result.nonCallbackParams.map(p => p.name)).toEqual(['filePath', 'fileType']);
    });

    it('identifies the main callback (non-error callback)', () => {
        const method = makeMethod('getText', [
            makeParam('callback', 'RequestStringCallback', true),
            makeParam('errorCallback', 'ErrorCallback', true),
        ]);
        const result = classifyMethod(method);
        expect(result.mainCallback?.typeText).toBe('RequestStringCallback');
    });

    it('detects hasErrorCallback', () => {
        const withError = makeMethod('getText', [
            makeParam('callback', 'RequestStringCallback', true),
            makeParam('errorCallback', 'ErrorCallback', true),
        ]);
        expect(classifyMethod(withError).hasErrorCallback).toBe(true);

        const withoutError = makeMethod('getCount', [
            makeParam('callback', 'RequestNumberCallback', true),
        ]);
        expect(classifyMethod(withoutError).hasErrorCallback).toBe(false);
    });

    it('builds requestHelperArgs preserving original order', () => {
        const method = makeMethod('loadDocument', [
            makeParam('filePath', 'string', false),
            makeParam('callback', 'LoadDocumentCallback', true),
            makeParam('errorCallback', 'ErrorCallback', true),
        ]);
        const result = classifyMethod(method);
        expect(result.requestHelperArgs).toEqual([
            { kind: 'param', name: 'filePath' },
            { kind: 'callbackType', constant: 'CallbackType.LoadDocumentCallback' },
            { kind: 'callbackType', constant: 'CallbackType.ErrorCallback' },
        ]);
    });

    it('strips | undefined from callback type in requestHelperArgs', () => {
        const method = makeMethod('save', [
            makeParam('callback', 'SaveDocumentCallback | undefined', true),
        ]);
        const result = classifyMethod(method);
        expect(result.requestHelperArgs[0]).toEqual({
            kind: 'callbackType',
            constant: 'CallbackType.SaveDocumentCallback',
        });
    });
});
