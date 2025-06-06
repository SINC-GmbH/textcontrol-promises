declare namespace TXTextControl {
    /** Represents an MS Word specific INCLUDETEXT field. */
    class IncludeTextField {
        /** Specifies the bookmark switch of the field. */
        bookmark: string;
        /** Specifies the file name of the document that should be inserted. */
        fileName: string;
        /** Specifies whether the field's formatting should be preserved. */
        preserveFormatting: boolean;
        /** Specifies the text format of the field. */
        textFormat: MergeFieldTextFormat;
    }
}