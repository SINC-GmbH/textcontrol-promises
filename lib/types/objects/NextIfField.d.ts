import { RelationalOperator } from '../enums';

/** Represents an MS Word specific NEXTIF field. */
export class NextIfField {
    /** Specifies the first expression text that should be compared. This property must be a valid field name. */
    expression1: string;
    /** Specifies the second expression text that should be compared to Expression1. */
    expression2: string;
    /** Specifies the comparison operator. */
    operator: RelationalOperator;
    /** Specifies whether the field's formatting should be preserved. */
    preserveFormatting: boolean;
}
