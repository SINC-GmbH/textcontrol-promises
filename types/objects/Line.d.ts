declare namespace TXTextControl {
    /** The Line object represents a single line in a document. */
    interface Line {
        /** Gets the line's baseline position. */
        getBaseline(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the number of characters in the line including the break character. */
        getLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the line's number. */
        getNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the number of the page to which the line belongs. */
        getPage(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the number (one-based) of the first character in the line. */
        getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the line's text. */
        getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the bounding rectangle of the text belonging to the line. */
        getTextBounds(callback: RequestRectangleCallback, errorCallback?: ErrorCallback): void;
        /** Saves the line in a certain format and sends the result back asynchronously by calling a given callback function. */
        save(streamType: StreamType, callback: SaveDocumentCallback, saveSettings?: SaveSettings, errorCallback?: ErrorCallback): void;
    }
}
