declare namespace TXTextControl {
    /** Represents an MS Word specific DATE field. */
    class DateField {
        /** Specifies the format of the field. It must be a standard DateTime format string of the .NET Framework. */
        format: string;
        /** Specifies whether the field's formatting should be preserved. */
        preserveFormatting: boolean;
    }
}