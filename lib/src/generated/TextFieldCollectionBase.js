import { Collection } from '../Collection.js';
import { TextField } from '../TextField.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<TextField>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TextFieldCollection.d.ts.
 */
export class TextFieldCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.TextFieldCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TextFieldCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.TextFieldCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new TextField(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'addWithText', 'clear', 'getItem', 'remove');
    }

    /**
     * Adds a new TextField to the collection.
     * @returns {Promise<TextField>}
     */
    async add() {
        const tx = await RequestHelper.Promise(this._txInternal.add, CallbackType.RequestTextFieldCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Adds a new TextField with the given text to the collection.
     * @param {string} text
     * @returns {Promise<TextField>}
     */
    async addWithText(text) {
        const tx = await RequestHelper.Promise(this._txInternal.addWithText, text, CallbackType.RequestTextFieldCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes all text fields from a Text Control document.
     * @returns {Promise<void>}
     */
    clear() {
        return RequestHelper.Promise(
            this._txInternal.clear,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text field at the current text input position or the text field with the specified id.
     * @param {number} [id]
     * @returns {Promise<TextField>}
     */
    async getItem(id) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestTextFieldCallback, CallbackType.ErrorCallback, id);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes the text field from the Text Control document.
     * @param {TextField} textField
     * @returns {Promise<void>}
     */
    remove(textField) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            textField?._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
}
