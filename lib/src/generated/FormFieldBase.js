import { TextField } from '../TextField.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/FormField.d.ts.
 */
export class FormFieldBase extends TextField {
    /** @returns {TXTextControlTypeDefinition.FormField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.FormField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.FormField} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getEnabled', 'setEnabled', 'getDescriptiveText', 'setDescriptiveText');
    }

    /**
     * Gets a value indicating whether the form field is enabled.
     * @returns {Promise<boolean>}
     */
    getEnabled() {
        return RequestHelper.Promise(
            this._txInternal.getEnabled,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether the form field is enabled. This property has only an effect, when the when the edit mode is set to TXTextControl.EditMode.ReadAndSelect and the allowEditingFormFields property of the document permissions has been set to true. In this case a Formfield can only be edited, when its Enabled property is true. When a FormField is disabled, the TextFieldClicked and TextFieldDoubleClicked of the Formfield are suppressed. The default value of this property is true.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setEnabled(value) {
        return RequestHelper.Promise(
            this._txInternal.setEnabled,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the form field's descriptive text. An empty string indicates that the link has no such text.
     * @returns {Promise<string>}
     */
    getDescriptiveText() {
        return RequestHelper.Promise(
            this._txInternal.getDescriptiveText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the form field's descriptive text. An empty string or null can be used to delete a previously set text.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setDescriptiveText(value) {
        return RequestHelper.Promise(
            this._txInternal.setDescriptiveText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}
