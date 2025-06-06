declare namespace TXTextControl {
    /** Represents a pair of x- and y-coordinates that defines a point in a two-dimensional plane. */
    interface Footnote {
        /** Sets the current text input position in the footnote section at the end of the current footnote text, so that the text can be edited or formatted. */
        edit(callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the highlight color for the reference mark and the footnote mark. */
        getHighlightColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value indicating whether the reference mark and the footnote mark is highlighted. */
        getHighlightMode(callback: RequestHighlightModeCallback, errorCallback?: ErrorCallback): void;
        /** Gets a user-defined identifier. */
        getID(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the footnote's name. */
        getName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the footnote's number in the text. */
        getNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the number of characters the reference mark consists of. */
        getReferenceMarkLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the index (one-based) of the first character of the footnote's reference mark. */
        getReferenceMarkStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Scrolls the beginning of the footnote mark into the visible part of the document using a default position depending on the previous position. */
        scrollTo(callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Scrolls the beginning of the footnote mark into the visible part of the document using the specified position. */
        scrollToPosition(scrollPosition: InputPosition.ScrollPosition, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the highlight color for the reference mark and the footnote mark. */
        setHighlightColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value indicating whether the reference mark and the footnote mark is highlighted. */
        setHighlightMode(value: HighlightMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a user-defined identifier. */
        setID(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a name for the footnote. */
        setName(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}