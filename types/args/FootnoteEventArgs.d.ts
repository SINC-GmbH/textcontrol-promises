declare namespace TXTextControl {
    /** The event argument for footnote related events. */
    interface FootnoteEventArgs {
        /** The footnote's name. */
        name: string;
        /** The footnote's 1-based number in the text flow. */
        number: number;
        /** The footnote's reference mark length in characters. */
        referenceMarkLength: number;
        /** The footnote's 1-based reference mark start position. */
        referenceMarkStart: number;
        /** The footnote's highlight color. */
        highlightColor: string;
        /** The footnote's highlight mode */
        highlightMode: string;
        /** The footnote's identifier. */
        id: number;
    }
}