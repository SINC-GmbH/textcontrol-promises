import { CallbackType } from './CallbackType.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

export class CallbackHelper {
    /**
     * @param {keyof typeof CallbackType} type
     * @param {Function} resolve
     * @param {Function} reject
     * @returns
     */
    static tryGet(type, resolve, reject) {
        switch (type) {
            case CallbackType.EmptyRequestCallback:
                return () => resolve();
            case CallbackType.ErrorCallback:
                return (/** @type {unknown} */ err) => reject(err);
            case CallbackType.RequestNumberCallback:
                return (/** @type {number} */ result) => resolve(result);
            case CallbackType.RequestBooleanCallback:
                return (/** @type {boolean} */ result) => resolve(result);
            case CallbackType.RequestStringCallback:
                return (/** @type {string} */ result) => resolve(result);
            case CallbackType.RequestStringsCallback:
                return (/** @type {Array<string>} */ result) => resolve(result);
            case CallbackType.AddCommentCallback:
                return (/** @type {TXTextControlTypeDefinition.CommentCallbackData} */ response) => resolve(response);
            case CallbackType.AddEditableRegionCallback:
                return (/** @type {TXTextControlTypeDefinition.EditableRegionCallbackData} */ response) => resolve(response);
            case CallbackType.AddSubTextPartCallback:
                return (/** @type {TXTextControlTypeDefinition.SubTextPartCallbackData} */ response) => resolve(response);
            case CallbackType.AddFootnoteCallback:
                return (/** @type {TXTextControlTypeDefinition.FootnoteCallbackData} */ response) => resolve(response);
            case CallbackType.RequestTableCallback:
            case CallbackType.LoadDocumentCallback:
            case CallbackType.SaveDocumentResultCallback:
            case CallbackType.RequestTableCellCallback:
            case CallbackType.RequestSubTextPartCallback:
            case CallbackType.RequestApplicationFieldCallback:
            case CallbackType.RequestFormFieldCallback:
            case CallbackType.RequestObjectCallback:
            case CallbackType.RequestActivationStateCallback:
            case CallbackType.RequestHighlightModeCallback:
            case CallbackType.RequestEditModeCallback:
            case CallbackType.RequestFontUnderlineStyleCallback:
            case CallbackType.RequestFormulaReferenceStyleCallback:
            case CallbackType.RequestMeasuringUnitCallback:
            case CallbackType.RequestPermanentControlCharsCallback:
            case CallbackType.RequestRenderModeCallback:
            case CallbackType.RequestPaperSizesCallback:
            case CallbackType.RequestColorStringCallback:
            case CallbackType.RequestTextFieldInfoArrayCallback:
            case CallbackType.RequestViewModeCallback:
                return (/** @type {unknown} */ result) => resolve(result);
            default:
                return type;
        }
    }

    // RequestBooleanCallback = (result: boolean) => void;
    // RequestTableCallback = (table: Table) => void;
    // RequestTableCellCallback = (cell: TableCell) => void;
    // RequestObjectCallback = (obj: object) => void;
}
