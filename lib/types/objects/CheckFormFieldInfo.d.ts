import { TextFieldInfo } from "./TextFieldInfo";

/** Information about a check form field. */
export interface CheckFormFieldInfo extends TextFieldInfo {
    /** The checked state of the check box. */
    checked: boolean;
}
