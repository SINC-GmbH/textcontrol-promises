declare namespace TXTextControl {
    /** Specifies how text is automatically sub- or superscripted. */
    enum AutoBaseline {
        /** Text is moved above the baseline. */
        Superscript,
        /** Text is moved below the baseline. */
        Subscript,
        /** Text is scaled und moved above the baseline. The moved text does not extend above the upper edge of capital letters. This can be used for nominators of diagonal fractions. */
        SuperscriptUpperEdge,
        /** Text is scaled, but is not moved below the baseline. This can be used for denominators of diagonal fractions. */
        SubscriptBaseline,
        /** Text is scaled, but is not moved below the baseline. This can be used for denominators of diagonal fractions. */
        None
    }
}	