import { FormField } from '../FormField.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/CheckFormField.d.ts.
 */
export class CheckFormFieldBase extends FormField {
    /** @returns {TXTextControlTypeDefinition.CheckFormField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.CheckFormField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.CheckFormField} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getChecked', 'getCheckedCharacter', 'getUncheckedCharacter', 'setChecked', 'setCheckedCharacter', 'setUncheckedCharacter');
    }

    /**
     * Gets a value indicating whether the checkbox is in the checked state.
     * @returns {Promise<boolean>}
     */
    getChecked() {
        return RequestHelper.Promise(
            this._txInternal.getChecked,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the character which is used to display the checkbox in the checked state.
     * @returns {Promise<string>}
     */
    getCheckedCharacter() {
        return RequestHelper.Promise(
            this._txInternal.getCheckedCharacter,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the character which is used to display the checkbox in the unchecked state.
     * @returns {Promise<string>}
     */
    getUncheckedCharacter() {
        return RequestHelper.Promise(
            this._txInternal.getUncheckedCharacter,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether the checkbox is in the checked state.
     * @param {boolean} isChecked
     * @returns {Promise<void>}
     */
    setChecked(isChecked) {
        return RequestHelper.Promise(
            this._txInternal.setChecked,
            isChecked,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the character which is used to display the checkbox in the checked state.
     * @param {string} character
     * @returns {Promise<void>}
     */
    setCheckedCharacter(character) {
        return RequestHelper.Promise(
            this._txInternal.setCheckedCharacter,
            character,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the character which is used to display the checkbox in the unchecked state.
     * @param {string} character
     * @returns {Promise<void>}
     */
    setUncheckedCharacter(character) {
        return RequestHelper.Promise(
            this._txInternal.setUncheckedCharacter,
            character,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}
