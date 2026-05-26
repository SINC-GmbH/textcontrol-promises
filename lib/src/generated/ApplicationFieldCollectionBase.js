import { TextFieldCollectionBase } from '../TextFieldCollectionBase.js';
import { ApplicationField } from '../ApplicationField.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {TextFieldCollectionBase}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/ApplicationFieldCollection.d.ts.
 */
export class ApplicationFieldCollectionBase extends TextFieldCollectionBase {
    /** @returns {TXTextControlTypeDefinition.ApplicationFieldCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.ApplicationFieldCollection} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.ApplicationFieldCollection} txCollection */
    constructor(txCollection) {
        super(txCollection, (/** @type {*} */ tx) => new ApplicationField(tx));
        this._bindMethods('add', 'getItem', 'remove');
    }

    /**
     * Inserts a new application field at the current input position.
     * @param {TXTextControlTypeDefinition.ApplicationFieldFormat} format Specifies the format of the field. The format depends on the application that supports the field. It can be ApplicationFieldFormat.MSWord or ApplicationFieldFormat.HighEdit.
     * @param {string} typeName Specifies the type name of the field. For example the type name of a Microsoft Word MergeField is MERGEFIELD.
     * @param {string} text Specifies the visible text of the field.
     * @param {string[]} parameters Specifies an array of strings which are the field's parameters. The order and format of the strings depend on the field's format. For example a Microsoft Word MergeField has the following format: MERGEFIELD FieldName [switches]. In this case the first string of the array is the FieldName and the following strings are possible switches. If a field has no parameters, null can be specified.
     * @returns {Promise<ApplicationField>}
     */
    async add(format, typeName, text, parameters) {
        const tx = await RequestHelper.Promise(this._txInternal.add, format, typeName, text, parameters, CallbackType.RequestApplicationFieldCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the field at the current input position or null, if there is no such field at the current input position.
     * @returns {Promise<ApplicationField>}
     */
    async getItem() {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestApplicationFieldCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes a field of the type ApplicationField from a TX Text Control document.
     * @param {ApplicationField} applicationField Specifies the field to remove.
     * @param {Boolean} keepText If this parameter is set to true, the field is removed without deleting its visible text. Otherwise, the field's text is also deleted.
     * @returns {Promise<boolean>}
     */
    remove(applicationField, keepText) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            applicationField?._txInternal,
            keepText,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}
