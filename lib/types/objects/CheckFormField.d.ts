import { RequestBooleanCallback, RequestStringCallback, EmptyRequestCallback } from "../callbacks";
import { FormField } from "./FormField";

/**
 * The CheckFormField object represents a checkbox in a document.
 * The checkbox can be checked or unchecked through the end-user.
 */
export interface CheckFormField extends FormField {
    /** Gets a value indicating whether the checkbox is in the checked state. */
    getChecked(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the character which is used to display the checkbox in the checked state. */
    getCheckedCharacter(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the character which is used to display the checkbox in the unchecked state. */
    getUncheckedCharacter(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether the checkbox is in the checked state. */
    setChecked(isChecked: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the character which is used to display the checkbox in the checked state. */
    setCheckedCharacter(character: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the character which is used to display the checkbox in the unchecked state. */
    setUncheckedCharacter(character: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
