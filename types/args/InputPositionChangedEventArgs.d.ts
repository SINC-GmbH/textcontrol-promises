declare namespace TXTextControl {
    /** The event argument object for the inputPositionChanged event. */
    interface InputPositionChangedEventArgs {
        /** The column number of the current text input position. */
        column: number;
        /** The line number of the current text input position. */
        line: number;
        /** The page number of the current text input position. */
        page: number;
        /** The section number of the current text input position. */
        section: number;
        /** The 0-based text position of the current text input position. */
        textPosition: number;
    }
}