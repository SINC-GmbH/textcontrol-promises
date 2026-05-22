/**
 * Maps callback type names from the d.ts declarations to the corresponding
 * CallbackType constant strings used by CallbackHelper / RequestHelper.
 *
 * Source of truth for the constant names: lib/src/helper/CallbackType.js
 */

const CALLBACK_MAP: Record<string, string> = {
    ErrorCallback: 'CallbackType.ErrorCallback',
    EmptyRequestCallback: 'CallbackType.EmptyRequestCallback',
    RequestNumberCallback: 'CallbackType.RequestNumberCallback',
    RequestBooleanCallback: 'CallbackType.RequestBooleanCallback',
    RequestTableCallback: 'CallbackType.RequestTableCallback',
    LoadDocumentCallback: 'CallbackType.LoadDocumentCallback',
    SaveDocumentResultCallback: 'CallbackType.SaveDocumentResultCallback',
    RequestTableCellCallback: 'CallbackType.RequestTableCellCallback',
    RequestStringCallback: 'CallbackType.RequestStringCallback',
    AddSubTextPartCallback: 'CallbackType.AddSubTextPartCallback',
    RequestSubTextPartCallback: 'CallbackType.RequestSubTextPartCallback',
    RequestApplicationFieldCallback: 'CallbackType.RequestApplicationFieldCallback',
    RequestObjectCallback: 'CallbackType.RequestObjectCallback',
    RequestStringsCallback: 'CallbackType.RequestStringsCallback',
    RequestFormFieldCallback: 'CallbackType.RequestFormFieldCallback',
    AddEditableRegionCallback: 'CallbackType.AddEditableRegionCallback',
    RequestActivationStateCallback: 'CallbackType.RequestActivationStateCallback',
    RequestHighlightModeCallback: 'CallbackType.RequestHighlightModeCallback',
    RequestEditModeCallback: 'CallbackType.RequestEditModeCallback',
    RequestFontUnderlineStyleCallback: 'CallbackType.RequestFontUnderlineStyleCallback',
    RequestFormulaReferenceStyleCallback: 'CallbackType.RequestFormulaReferenceStyleCallback',
    RequestMeasuringUnitCallback: 'CallbackType.RequestMeasuringUnitCallback',
    RequestPermanentControlCharsCallback: 'CallbackType.RequestPermanentControlCharsCallback',
    RequestRenderModeCallback: 'CallbackType.RequestRenderModeCallback',
    RequestPaperSizesCallback: 'CallbackType.RequestPaperSizesCallback',
    RequestColorStringCallback: 'CallbackType.RequestColorStringCallback',
    RequestTextFieldInfoArrayCallback: 'CallbackType.RequestTextFieldInfoArrayCallback',
    RequestViewModeCallback: 'CallbackType.RequestViewModeCallback',
    // Text-field specific callbacks not in the main CallbackType enum — resolved to RequestObjectCallback
    RequestTextFieldsCallback: 'CallbackType.RequestObjectCallback',
    RequestTextPartsCallback: 'CallbackType.RequestObjectCallback',
};

/** Maps a callback type name to its CallbackType constant string, or null if unknown. */
export function mapCallbackType(typeName: string): string | null {
    // Strip any trailing undefined from optional types that leaked through
    const clean = typeName.replace(/\s*\|\s*undefined$/, '').trim();
    return CALLBACK_MAP[clean] ?? null;
}

/** Returns the Promise return type comment for a given main-callback type name. */
const RETURN_TYPE_MAP: Record<string, string> = {
    EmptyRequestCallback: 'void',
    LoadDocumentCallback: 'void',
    RequestNumberCallback: 'number',
    RequestBooleanCallback: 'boolean',
    RequestStringCallback: 'string',
    RequestStringsCallback: 'string[]',
    RequestColorStringCallback: 'string',
    RequestTableCallback: 'any',
    RequestTableCellCallback: 'any',
    RequestSubTextPartCallback: 'any',
    RequestApplicationFieldCallback: 'any',
    RequestFormFieldCallback: 'any',
    RequestObjectCallback: 'any',
    SaveDocumentResultCallback: 'any',
    RequestActivationStateCallback: 'any',
    RequestHighlightModeCallback: 'any',
    RequestEditModeCallback: 'any',
    RequestFontUnderlineStyleCallback: 'any',
    RequestFormulaReferenceStyleCallback: 'any',
    RequestMeasuringUnitCallback: 'any',
    RequestPermanentControlCharsCallback: 'any',
    RequestRenderModeCallback: 'any',
    RequestPaperSizesCallback: 'any',
    RequestTextFieldInfoArrayCallback: 'any',
    RequestViewModeCallback: 'any',
    AddSubTextPartCallback: '{ response: any; addResult: any }',
    AddEditableRegionCallback: '{ response: any; addResult: any }',
    RequestTextFieldsCallback: 'any',
    RequestTextPartsCallback: 'any',
};

export function getPromiseReturnType(callbackTypeName: string): string {
    const clean = callbackTypeName.replace(/\s*\|\s*undefined$/, '').trim();
    return RETURN_TYPE_MAP[clean] ?? 'any';
}

/** Returns true if this type name represents a callback. */
export function isCallbackType(typeName: string): boolean {
    const clean = typeName.replace(/\s*\|\s*undefined$/, '').trim();
    return clean in CALLBACK_MAP;
}
