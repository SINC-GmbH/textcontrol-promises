/**
 * https://support.microsoft.com/en-us/office/field-codes-mergefield-field-7a6d24a1-68a6-4b05-8359-1dc087daf4e6
 */
export interface ApplicationFieldParametersArgs {
    name?: string;
    /** '\\b' Specifies the text to be inserted before the MergeField field if the field is not blank. */
    textBefore?: string;
    /** '\\f' Specifies the text to be inserted following the MergeField field if the field is not blank. */
    textFollowing?: string;
    /** '\\m' Specifies that the MergeField field is a mapped field. */
    mapped?: boolean;
    /** '\\v' Enables character conversion for vertical formatting. */
    vertical?: boolean;
    /** '\\@' Specifies the date format for date fields. */
    dateFormat?: string;
    /** '\\#'  Specifies the number format for numeric fields. */
    numberFormat?: string;
}
