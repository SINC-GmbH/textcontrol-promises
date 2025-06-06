declare namespace TXTextControl {
    /** Represents an MS Word specific MERGEFIELD field. */
    class MergeField {
        /** Specifies a string format which is applied to date / time values. Is equivalent to the MS Word field flag "\​@". */
        dateTimeFormat: string;
        /** Specifies the name of the field. */
        name: string;
        /** Specifies a string format which is applied to numeric values. Is equivalent to the MS Word field flag "\#". */
        numericFormat: string;
        /** Specifies whether the field's formatting should be preserved. */
        preserveFormatting: boolean;
        /** Specifies the text of the field. */
        text: string;
        /** Specifies the text of the field that is displayed after the field's text. */
        textAfter: string;
        /** Specifies the text of the field that is displayed before the field's text. */
        textBefore: string;
        /** Specifies the text format of the field. */
        textFormat: MergeFieldTextFormat;
    }
}