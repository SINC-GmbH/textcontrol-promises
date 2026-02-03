import { EmptyRequestCallback, RequestBooleanCallback, RequestStringCallback } from '../callbacks';
import { TextField } from './TextField';

/** Represents a form field. */
export interface FormField extends TextField {
    /** Gets a value indicating whether the form field is enabled. */
    getEnabled(callbac: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /**
     * Sets a value indicating whether the form field is enabled.
     * This property has only an effect, when the when the edit mode is set to TXTextControl.EditMode.ReadAndSelect
     * and the allowEditingFormFields property of the document permissions has been set to true.
     * In this case a Formfield can only be edited, when its Enabled property is true.
     * When a FormField is disabled, the TextFieldClicked and TextFieldDoubleClicked of the Formfield are suppressed.
     * The default value of this property is true.
     */
    setEnabled(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Gets the form field's descriptive text. An empty string indicates that the link has no such text. */
    getDescriptiveText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Sets the form field's descriptive text. An empty string or null can be used to delete a previously set text. */
    setDescriptiveText(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
