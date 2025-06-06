declare namespace TXTextControl {
    /** Determines the possible MS Word specific merge field types supported by the TX Text Control JavaScript API. */
    enum FieldType {
        /** Specifies the MS Word specific MERGEFIELD field type. */
        MergeField,
        /** Specifies the MS Word specific IF field type. */
        IfField,
        /** Specifies the MS Word specific INCLUDETEXT field type. */
        IncludeTextField,
        /** Specifies the MS Word specific DATEFIELD field type. */
        DateField,
        /** Specifies the MS Word specific NEXT field type. */
        NextField,
        /** Specifies the MS Word specific NEXTIF field type. */
        NextIfField
    }
}