declare namespace TXTextControl {
    /** Represents an MS Word specific IFFIELD field. */
    class IfField {
        /** Specifies the first expression text that should be compared. This property must be a valid field name. */
        expression1: string;
        /** Specifies the second expression text that should be compared to Expression1. */
        expression2: string;
        /** Specifies the text that should be displayed when the comparison is false. */
        falseText: string;
        /** Specifies the comparison operator. */
        operator: RelationalOperator;
        /** Specifies whether the field's formatting should be preserved. */
        preserveFormatting: boolean;
        /** Specifies the text that should be displayed when the comparison is true. */
        trueText: string;
    }
}