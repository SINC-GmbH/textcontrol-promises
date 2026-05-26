import { TextFieldCollectionBase } from '../TextFieldCollectionBase.js';
import { PageNumberField } from '../PageNumberField.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {TextFieldCollectionBase}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/PageNumberFieldCollection.d.ts.
 */
export class PageNumberFieldCollectionBase extends TextFieldCollectionBase {
    /** @returns {TXTextControlTypeDefinition.PageNumberFieldCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.PageNumberFieldCollection} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.PageNumberFieldCollection} txCollection */
    constructor(txCollection) {
        super(txCollection, (/** @type {*} */ tx) => new PageNumberField(tx));
        this._bindMethods('add', 'getItem', 'remove');
    }

    /**
     * Inserts a new page number field at the current input position which displays Arabic numbers starting with 1.
     * @returns {Promise<PageNumberField>}
     */
    async add() {
        const tx = await RequestHelper.Promise(this._txInternal.add, CallbackType.RequestPageNumberFieldCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the field at the current input position or null, if there is no such field at the current input position.
     * @param {number} id Optional. Specifies the page number field's identifier set with the ID property. The method returns null if a page number field with the specified identifier does not exist.
     * @returns {Promise<PageNumberField>}
     */
    async getItem(id) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestPageNumberFieldCallback, CallbackType.ErrorCallback, id);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes a page number from a header or footer of a Text control document.
     * @param {PageNumberField} field
     * @returns {Promise<boolean>}
     */
    remove(field) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            field._txInternal,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}
