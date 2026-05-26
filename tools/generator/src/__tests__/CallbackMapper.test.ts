import { describe, it, expect } from 'vitest';
import { isCallbackType, mapCallbackType, getPromiseReturnType } from '../CallbackMapper';

// ─── isCallbackType ───────────────────────────────────────────────────────────

describe('isCallbackType', () => {
    it('returns true for types ending in Callback', () => {
        expect(isCallbackType('EmptyRequestCallback')).toBe(true);
        expect(isCallbackType('RequestStringCallback')).toBe(true);
        expect(isCallbackType('ErrorCallback')).toBe(true);
    });

    it('returns true for types ending in Handler', () => {
        expect(isCallbackType('EventHandler')).toBe(true);
    });

    it('returns true for "Type | undefined" variants', () => {
        expect(isCallbackType('ErrorCallback | undefined')).toBe(true);
        expect(isCallbackType('EmptyRequestCallback | undefined')).toBe(true);
    });

    it('returns false for regular types', () => {
        expect(isCallbackType('string')).toBe(false);
        expect(isCallbackType('number')).toBe(false);
        expect(isCallbackType('PageView')).toBe(false);
        expect(isCallbackType('boolean')).toBe(false);
    });

    it('returns false for a type that only contains the word callback', () => {
        // "CallbackData" doesn't end in Callback
        expect(isCallbackType('CallbackData')).toBe(false);
    });
});

// ─── mapCallbackType ──────────────────────────────────────────────────────────

describe('mapCallbackType', () => {
    it('wraps in CallbackType. prefix', () => {
        expect(mapCallbackType('EmptyRequestCallback')).toBe('CallbackType.EmptyRequestCallback');
        expect(mapCallbackType('RequestNumberCallback')).toBe('CallbackType.RequestNumberCallback');
    });

    it('strips " | undefined" before wrapping', () => {
        expect(mapCallbackType('ErrorCallback | undefined')).toBe('CallbackType.ErrorCallback');
    });
});

// ─── getPromiseReturnType ─────────────────────────────────────────────────────

describe('getPromiseReturnType', () => {
    it('returns void for EmptyRequestCallback', () => {
        expect(getPromiseReturnType('EmptyRequestCallback')).toBe('void');
    });

    it('returns void for LoadDocumentCallback', () => {
        expect(getPromiseReturnType('LoadDocumentCallback')).toBe('void');
    });

    it('returns void for SaveDocumentCallback', () => {
        expect(getPromiseReturnType('SaveDocumentCallback')).toBe('void');
    });

    it('returns void for DocumentLoadedCallback', () => {
        expect(getPromiseReturnType('DocumentLoadedCallback')).toBe('void');
    });

    it('returns boolean for RequestBooleanCallback', () => {
        expect(getPromiseReturnType('RequestBooleanCallback')).toBe('boolean');
    });

    it('returns number for RequestNumberCallback', () => {
        expect(getPromiseReturnType('RequestNumberCallback')).toBe('number');
    });

    it('returns string for RequestStringCallback', () => {
        expect(getPromiseReturnType('RequestStringCallback')).toBe('string');
    });

    it('returns string for RequestColorStringCallback', () => {
        expect(getPromiseReturnType('RequestColorStringCallback')).toBe('string');
    });

    it('returns string[] for RequestStringsCallback', () => {
        expect(getPromiseReturnType('RequestStringsCallback')).toBe('string[]');
    });

    it('returns number[] for RequestNumbersCallback', () => {
        expect(getPromiseReturnType('RequestNumbersCallback')).toBe('number[]');
    });

    it('returns TXTextControlTypeDefinition.{Type}CallbackData for Add*Callback', () => {
        expect(getPromiseReturnType('AddTextFrameCallback')).toBe('TXTextControlTypeDefinition.TextFrameCallbackData');
        expect(getPromiseReturnType('AddTableCallback')).toBe('TXTextControlTypeDefinition.TableCallbackData');
    });

    it('returns TXTextControlTypeDefinition.SaveDocumentResult for SaveDocumentResultCallback', () => {
        expect(getPromiseReturnType('SaveDocumentResultCallback')).toBe('TXTextControlTypeDefinition.SaveDocumentResult');
    });

    it('returns TXTextControlTypeDefinition.{Type} for unknown Request*Callback types', () => {
        expect(getPromiseReturnType('RequestSomethingUnknownCallback')).toBe('TXTextControlTypeDefinition.SomethingUnknown');
    });

    it('strips | undefined before looking up', () => {
        expect(getPromiseReturnType('EmptyRequestCallback | undefined')).toBe('void');
        expect(getPromiseReturnType('RequestBooleanCallback | undefined')).toBe('boolean');
    });
});
