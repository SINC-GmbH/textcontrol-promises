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
    const clean = typeName.replace(/\s*\|\s*(undefined|null)$/, '').trim();
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
export function getPromiseReturnType(callbackTypeName: string, wrapperClasses?: Set<string>): string {
    const clean = callbackTypeName.replace(/\s*\|\s*undefined$/, '').trim();

    if (VOID_CALLBACKS.has(clean)) return 'void';

    if (clean === 'RequestBooleanCallback') return 'boolean';
    if (clean === 'RequestNumberCallback') return 'number';
    if (STRING_CALLBACKS.has(clean)) return 'string';
    if (clean === 'RequestStringsCallback') return 'string[]';
    if (clean === 'RequestNumbersCallback') return 'number[]';
    if (clean === 'SaveDocumentResultCallback') return 'TXTextControlTypeDefinition.SaveDocumentResult';

    // Add-callbacks — return the specific callback data type
    if (clean === 'AddCommentCallback') return 'TXTextControlTypeDefinition.CommentCallbackData';
    if (clean === 'AddEditableRegionCallback') return 'TXTextControlTypeDefinition.EditableRegionCallbackData';
    if (clean === 'AddSubTextPartCallback') return 'TXTextControlTypeDefinition.SubTextPartCallbackData';
    if (clean === 'AddFootnoteCallback') return 'TXTextControlTypeDefinition.FootnoteCallbackData';
    if (clean.startsWith('Add') && clean.endsWith('Callback')) {
        const typeName = clean.slice(3, -8); // strip "Add" and "Callback"
        return `TXTextControlTypeDefinition.${typeName}CallbackData`;
    }

    if (clean === 'RequestObjectCallback') return 'object';

    // Get*Callback → named return type derived from callback signature
    if (clean === 'GetDictionaryListCallback') return 'TXTextControlTypeDefinition.DictionaryInfo[]';
    if (clean === 'GetUserDictionaryInfoCallback') return 'TXTextControlTypeDefinition.UserDictionaryInfo[]';
    if (clean === 'SaveUserDictionaryCallback') return '{ name: string; words: string[] }';
    if (clean === 'SideBarTypeRequestCallback') return 'TXTextControlTypeDefinition.SideBarType';

    // Specific overrides where callback name doesn't match the actual type name
    if (clean === 'RequestCapitalsCallback') return 'TXTextControlTypeDefinition.Capitals';
    if (clean === 'RequestDistancesCallback') return 'TXTextControlTypeDefinition.Distances';
    if (clean === 'RequestCellFormatCallback') return 'TXTextControlTypeDefinition.TableCellFormat';
    if (clean === 'RequestCommentCallback') return 'TXTextControlTypeDefinition.CommentedText';
    if (clean === 'RequestCommentsCallback') return 'TXTextControlTypeDefinition.CommentedText[]';
    if (clean === 'RequestTextFieldInfoArrayCallback') return 'TXTextControlTypeDefinition.TextFieldInfo[]';
    if (clean === 'RequestRenderModeCallback') return 'TXTextControlTypeDefinition.ComponentRenderMode';

    // Request{Type}Callback → TXTextControlTypeDefinition.Type
    // Request{Type}sCallback (plural) → TXTextControlTypeDefinition.Type[]
    const match = clean.match(/^Request(.+?)Callback$/);
    if (match) {
        const typeName = match[1];
        if (typeName.endsWith('s')) {
            return `TXTextControlTypeDefinition.${typeName.slice(0, -1)}[]`;
        }
        if (wrapperClasses?.has(typeName)) return typeName;
        return `TXTextControlTypeDefinition.${typeName}`;
    }

    return 'unknown';
}
