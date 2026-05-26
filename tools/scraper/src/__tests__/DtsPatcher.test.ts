import { describe, it, expect } from 'vitest';
import { convertDocsParamsToTs } from '../DtsPatcher';

describe('convertDocsParamsToTs', () => {
    it('returns empty string for empty input', () => {
        expect(convertDocsParamsToTs('')).toBe('');
        expect(convertDocsParamsToTs('   ')).toBe('');
    });

    it('converts a single typed required param', () => {
        expect(convertDocsParamsToTs('<string> text')).toBe('text: string');
    });

    it('converts a single typed optional param', () => {
        expect(convertDocsParamsToTs('[<number> count]')).toBe('count?: number');
    });

    it('strips callback params by name', () => {
        expect(convertDocsParamsToTs('<EmptyRequestCallback> callback')).toBe('');
    });

    it('strips errorCallback by name', () => {
        expect(convertDocsParamsToTs('<string> text, <ErrorCallback> errorCallback')).toBe('text: string');
    });

    it('strips successCallback by name', () => {
        expect(convertDocsParamsToTs('<RequestStringCallback> successCallback')).toBe('');
    });

    it('converts multiple params in order, filtering callbacks', () => {
        const result = convertDocsParamsToTs(
            '<string> url, <number> fileFormat, <LoadDocumentCallback> callback, <ErrorCallback> errorCallback',
        );
        expect(result).toBe('url: string, fileFormat: number');
    });

    it('handles mix of required and optional params', () => {
        const result = convertDocsParamsToTs('<string> name, [<number> index]');
        expect(result).toBe('name: string, index?: number');
    });

    it('produces "any" for untyped params (no angle-bracket type)', () => {
        // Docs sometimes omit the type — result should use "any"; required since no []
        const result = convertDocsParamsToTs('value');
        expect(result).toBe('value: any');
    });

    it('returns empty string when all params are callbacks', () => {
        const result = convertDocsParamsToTs(
            '<EmptyRequestCallback> callback, <ErrorCallback> errorCallback',
        );
        expect(result).toBe('');
    });
});
