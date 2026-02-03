/**
 * The DocumentPermissions object provides settings determining how the document can be edited
 * when the EditMode is changed from Edit to ReadAndSelect.
 */
export interface DocumentPermissions {
    /** Specifies whether document content can be copied to the clipboard. */
    allowCopy: boolean;
    /** Gets or sets a value specifying whether the document can be formatted. */
    allowFormatting: boolean;
    /** Gets or sets a value specifying whether formatting styles can be used to format the document. */
    allowFormattingStyles: boolean;
    /**Gets or sets a value specifying whether the document can be printed. */
    allowPrinting: boolean;
    /** Gets or sets a value specifying whether form fields can be filled in. */
    allowEditingFormFields: boolean;
    /** Gets or sets a value specifying whether the document is read only. */
    readOnly: boolean;
}
