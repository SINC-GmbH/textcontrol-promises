/** Determines the relational operator used by some types of merge fields. */
export enum RelationalOperator {
    /** The expression values must be equal. */
    Equals,
    /** The expression values must be not equal. */
    NotEqual,
    /** Expression 1 is less than expression 2. */
    LessThan,
    /** Expression 1 is greater than expression 2. */
    GreaterThan,
    /** Expression 1 is greater than or equal to expression 2. */
    GreaterThanOrEqualTo,
    /** Expression 1 is less than or equal to expression 2. */
    LessThanOrEqualTo,
}
