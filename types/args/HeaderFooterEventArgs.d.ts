declare namespace TXTextControl {
    /** The event argument header and footer related events. */
    interface HeaderFooterEventArgs {
        /** Specifies whether the header or footer is connected to previous section. */
        connectedToPrevious: boolean;
        /** The distance, in twips, of a header or footer to the top or bottom of the page. */
        distance: number;
        /** The type of the header or footer. */
        type: HeaderFooterType;
    }
}