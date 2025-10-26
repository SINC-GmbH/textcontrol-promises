import { FormField } from "./FormField.js";
import { Collection } from "./Collection.js";
import { CallbackType, RequestHelper } from "./helper/index.js";

/**
 * @extends {Collection<FormField>}
 */
export class FormFieldCollection extends Collection {
    /**
     * Wrapper für TXTextControl.FormFieldCollection
     * @param {any} txFormFieldCollection
     */
    constructor(txFormFieldCollection) {
        super(txFormFieldCollection, (/** @type {FormField} */ txFormField) => new FormField(txFormField));
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this._txCollection.getItem = this._txCollection.getItem.bind(this._txCollection);
        this._txCollection.remove = this._txCollection.remove.bind(this._txCollection);
    }

    /**
     * Gets the form field at the current text input position or the form field with the specified id
     * @param {number=} id
     * @returns {Promise<FormField>}
     */
    async getItem(id) {
        var txFormField = await RequestHelper.Promise(this._txCollection.getItem,
            CallbackType.RequestFormFieldCallback,
            CallbackType.ErrorCallback,
            id);
        return new FormField(txFormField);
    }

    /**
     *  Removes the form field from the Text Control document
     * @param {FormField} formField
     * @returns {Promise<boolean>}
     */
    async remove(formField) {
        return RequestHelper.Promise(this._txCollection.remove,
            formField.txFormField,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback);
    }
}
