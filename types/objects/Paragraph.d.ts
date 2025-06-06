declare namespace TXTextControl {
    /** 
     * A Paragraph object represents a single paragraph in a Text Control document. 
     * Paragraphs are numbered from the beginning to the end of the document beginning with 1. A document has at least one paragraph. 
     */
    interface Paragraph {
        /** Gets the paragraph's formatting style. */
        getFormattingStyle(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the number of characters in the paragraph including the paragraph end character. */
        getLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the number of lines the paragraph consists of. */
        getLines(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the paragraph's list number. */
        getListNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the paragraph's list number text. */
        getListNumberText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the number (one-based) of the paragraph's first character. */
        getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the number (one-based) of the paragraph's first line. */
        getStartLine(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the paragraph's text. */
        getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Saves the paragraph in a certain format and sends the result back asynchronously by calling a given callback function. */
        save(streamType: StreamType, callback: SaveDocumentCallback, saveSettings?: SaveSettings, errorCallback?: ErrorCallback): void;
        /** Selects the paragraph. */
        select(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the paragraph's formatting style. */
        setFormattingStyle(formattingStyle: string, callback: EmptyRequestCallback, errorCallback?: ErrorCallback): void;

        /** The paragraph's formatting attributes. */
        format: ParagraphFormat;
        /** The paragraph's bulleted or numbered list and/or its formatting attributes. */
        listFormat: ListFormat;

    }
}