import { FormField } from '../FormField.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TextFormField.d.ts.
 */
export class TextFormFieldBase extends FormField {
    /** @returns {TXTextControlTypeDefinition.TextFormField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TextFormField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TextFormField} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getEmptyWidth', 'setEmptyWidth');
    }

    /**
     * Gets the horizontal extension, in twips, of the text formfield, when it is empty.
     * @returns {Promise<number>}
     */
    getEmptyWidth() {
        return RequestHelper.Promise(
            this._txInternal.getEmptyWidth,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the horizontal extension, in twips, of the text formfield, when it is empty.
     * @param {number} emptyWidth
     * @returns {Promise<void>}
     */
    setEmptyWidth(emptyWidth) {
        return RequestHelper.Promise(
            this._txInternal.setEmptyWidth,
            emptyWidth,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}
