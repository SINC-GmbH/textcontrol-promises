/**
 * Callback type utilities for the generator.
 *
 * Rule: any type whose name ends in "Callback" or "Handler" is a callback.
 * CallbackType.js (generated from lib/types/callbacks/) covers all 150 types,
 * so we can always emit CallbackType.{typeName} directly.
 */

const VOID_CALLBACKS = new Set([
    'EmptyRequestCallback',
    'LoadDocumentCallback',
    'SaveDocumentCallback',
    'DocumentLoadedCallback',
]);

const STRING_CALLBACKS = new Set([
    'RequestStringCallback',
    'RequestColorStringCallback',
]);

/** Returns true if this type name represents a callback. */
export function isCallbackType(typeName: string): boolean {
    const clean = typeName.replace(/\s*\|\s*undefined$/, '').trim();
    return clean.endsWith('Callback') || clean.endsWith('Handler');
}

/**
 * Maps a callback type name to its CallbackType constant string.
 * Always succeeds since CallbackType.js covers all known types.
 */
export function mapCallbackType(typeName: string): string {
    const clean = typeName.replace(/\s*\|\s*undefined$/, '').trim();
    return `CallbackType.${clean}`;
}

/** Returns the Promise return type for a given main-callback type name. */
export function getPromiseReturnType(callbackTypeName: string): string {
    const clean = callbackTypeName.replace(/\s*\|\s*undefined$/, '').trim();

    if (VOID_CALLBACKS.has(clean)) return 'void';

    if (clean === 'RequestBooleanCallback') return 'boolean';
    if (clean === 'RequestNumberCallback') return 'number';
    if (STRING_CALLBACKS.has(clean)) return 'string';
    if (clean === 'RequestStringsCallback') return 'string[]';
    if (clean === 'RequestNumbersCallback') return 'number[]';
    if (clean === 'SaveDocumentResultCallback') return 'any';

    // Add-callbacks return a composite result
    if (clean.startsWith('Add') && clean.endsWith('Callback')) {
        return '{ response: any; addResult: any }';
    }

    return 'any';
}
