declare namespace TXTextControl {
    /** Determines values for the control characters used in a TextControl document. */
    enum ControlChars {
        /** Defines a tabulator (Keyboard: TAB). */
        Tab,
        /** Defines the end of a paragraph (Keyboard: ENTER). */
        ParagraphEnd,
        /** Defines a line break without beginning a new paragraph (Keyboard: SHIFT+ENTER). */
        LineBreak,
        /** Defines a page break (Keyboard: CTRL+ENTER). */
        PageBreak,
        /** Defines a page column break (Keyboard: CTRL+SHIFT+ENTER). */
        ColumnBreak,
        /** Defines a non-visible hyphen (Keyboard: CTRL+(-)). */
        NonVisibleHyphen,
        /** Defines a non-breaking space (Keyboard: CTRL+SHIFT+Space). */
        NonBreakingSpace
    }
}	