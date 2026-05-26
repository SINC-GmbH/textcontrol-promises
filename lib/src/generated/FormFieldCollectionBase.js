import { Collection } from '../Collection.js';
import { FormField } from '../FormField.js';
import { CheckFormField } from '../CheckFormField.js';
import { DateFormField } from '../DateFormField.js';
import { SelectionFormField } from '../SelectionFormField.js';
import { TextFormField } from '../TextFormField.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<FormField>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/FormFieldCollection.d.ts.
 */
export class FormFieldCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.FormFieldCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.FormFieldCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.FormFieldCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new FormField(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('addCheckFormField', 'addDateFormField', 'addSelectionFormField', 'addTextFormField', 'getItem', 'remove');
    }

    /**
     * Adds a new CheckFormField.
     * @param {boolean} isChecked Specifies whether the checkbox is initially checked or unchecked. When this parameter is true, it is checked.
     * @returns {Promise<CheckFormField>}
     */
    async addCheckFormField(isChecked) {
        const tx = await RequestHelper.Promise(
            this._txInternal.addCheckFormField,
            isChecked,
            CallbackType.RequestCheckFormFieldCallback,
            CallbackType.ErrorCallback
        );
        return tx && new CheckFormField(tx);
    }

    /**
     * Adds a new DateFormField.
     * @param {number} emptyWidth Specifies the horizontal extension, in twips, when the Form Field is Empty. When this parameter is set to 0, a default value is used.
     * @returns {Promise<DateFormField>}
     */
    async addDateFormField(emptyWidth) {
        const tx = await RequestHelper.Promise(
            this._txInternal.addDateFormField,
            emptyWidth,
            CallbackType.RequestDateFormFieldCallback,
            CallbackType.ErrorCallback
        );
        return tx && new DateFormField(tx);
    }

    /**
     * Adds a new SelectionFormField.
     * @param {number} emptyWidth Specifies the horizontal extension, in twips, when the Form Field is Empty. When this parameter is set to 0, a default value is used.
     * @returns {Promise<SelectionFormField>}
     */
    async addSelectionFormField(emptyWidth) {
        const tx = await RequestHelper.Promise(
            this._txInternal.addSelectionFormField,
            emptyWidth,
            CallbackType.RequestSelectionFormFieldCallback,
            CallbackType.ErrorCallback
        );
        return tx && new SelectionFormField(tx);
    }

    /**
     * Adds a new TextFormField.
     * @param {number} emptyWidth Specifies the horizontal extension, in twips, when the Form Field is Empty. When this parameter is set to 0, a default value is used.
     * @returns {Promise<TextFormField>}
     */
    async addTextFormField(emptyWidth) {
        const tx = await RequestHelper.Promise(
            this._txInternal.addTextFormField,
            emptyWidth,
            CallbackType.RequestTextFormFieldCallback,
            CallbackType.ErrorCallback
        );
        return tx && new TextFormField(tx);
    }

    /**
     * Gets the form field at the current text input position or the form field with the specified id.
     * @param {number} id
     * @returns {Promise<FormField>}
     */
    async getItem(id) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestFormFieldCallback, CallbackType.ErrorCallback, id);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes the form field from the Text Control document.
     * @param {FormField} formField
     * @returns {Promise<boolean>}
     */
    remove(formField) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            formField._txInternal,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}
