declare namespace TXTextControl {
    /** Specifies whether a ruler bar shows cell references when the current input position is in a table cell. */
    enum RulerBarFormulaMode {
        /** Default. The ruler bar does not show cell references. */
        None,
        /** The ruler bar only shows cell references when the text input position is in a table cell containing a formula. */
        Auto,
        /** 
         * The ruler bar shows cell references when the text input position is in a table call. 
         * When the input position changes to another cell, all references are shown relative to this new cell. 
         */
        Always,
        /** 
         * The ruler bar shows cell references relative to the cell 
         * which contains the text input position when this mode is switched on. 
         * When the input position changes to another cell, all references remain relative to the first cell.
         */
        Fixed
    }
}