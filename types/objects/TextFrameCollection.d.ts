declare namespace TXTextControl {
    /** Contains all text frames of a Text Control document or part of the document. */
    interface TextFrameCollection extends FrameBaseCollection<TextFrame> {
        /**
         * Creates and inserts a new text frame which is anchored to the specified text position.
         * @param size The text frame's size in twips.
         * @param horizontalAlignment Specifies the text frame's horizontal alignment.
         * @param textPosition Specifies the text position at which the text frame is to be inserted. If -1 is specified, the text frame is inserted at the current input position.
         * @param insertionMode Specifies how the text flow is handled.
         * @param callback Optional. The newly created text frame object is returned via this callback function.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        addAnchored(
            size: Size,
            horizontalAlignment: HorizontalAlignment,
            textPosition: number,
            insertionMode: TextFrameInsertionMode,
            callback?: RequestTextFrameCallback,
            errorCallback?: ErrorCallback
        ): void;
        /** 
         * Inserts a new text frame which is anchored to the specified text position.
         * @param size The text frame's size in twips.
         * @param location Specifies the location, in twips, at which the text frame is to be inserted. This is a location relative to the top left corner either of a page or of a paragraph.
         * @param textPosition Specifies the text position at which the text frame is to be inserted. If -1 is specified, the text frame is inserted at the current input position.
         * @param insertionMode Specifies how the text flow is handled.
         * @param callback Optional. The newly created text frame object is returned via this callback function.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        addAnchoredAtLocation(
            size: Size,
            location: Point,
            textPosition: number,
            insertionMode: TextFrameInsertionMode,
            callback?: RequestTextFrameCallback,
            errorCallback?: ErrorCallback
        ): void;
        /** 
         * Creates and inserts a new text frame which has a fixed geometrical position in the document. 
         * @param size The text frame's size in twips.
         * @param location Specifies the location, in twips, at which the text frame is to be inserted. This is a location relative to the top left corner either of a page or of a paragraph.
         * @param insertionMode Specifies how the text flow is handled.
         * @param callback Optional. The newly created text frame object is returned via this callback function.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        addAtFixedPositionInDocument(
            size: Size,
            location: Point,
            insertionMode: TextFrameInsertionMode,
            callback?: RequestTextFrameCallback,
            errorCallback?: ErrorCallback
        ): void;
        /** 
         * Inserts a new image which has a fixed geometrical position in the document. 
         * This position is specified through a page number and a location on this page.
         * @param size The text frame's size in twips.
         * @param pageNumber Specifies the number of a page beginning with 1 where the text frame is located.
         * @param location Specifies the location, in twips, at which the text frame is to be inserted. This is a location relative to the top left corner either of a page or of a paragraph.
         * @param insertionMode Specifies how the text flow is handled.
         * @param callback Optional. The newly created text frame object is returned via this callback function.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        addAtFixedPositionOnPage(
            size: Size,
            pageNumber: number,
            location: Point,
            insertionMode: TextFrameInsertionMode,
            callback?: RequestTextFrameCallback,
            errorCallback?: ErrorCallback
        ): void;
        /**
         * Inserts a text frame inline, which means that it is treated in the text like a single character.
         * @param size The text frame's size in twips.
         * @param textPosition Specifies the text position at which the text frame is to be inserted. If -1 is specified, the text frame is inserted at the current input position.
         * @param callback Optional. The newly created text frame object is returned via this callback function.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        addInline(
            size: Size,
            textPosition: number,
            callback?: RequestTextFrameCallback,
            errorCallback?: ErrorCallback
        ): void;
        /**
         * Inserts a text frame with the built-in mouse interface.
         * @param insertionMode Specifies how the text flow is handled.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        addWithMouse(insertionMode: TextFrameInsertionMode, errorCallback?: ErrorCallback): void;
        /** Gets the text frame selected by the user or the text frame with the specified identifier. */
        getItem(callback: RequestTextFrameCallback, errorCallback?: ErrorCallback, id?: number): void;
        /** Gets the text frame with the specified name. */
        getItemByName(callback: RequestTextFrameCallback, errorCallback: ErrorCallback | null, name: string): void;
        /** Removes a text frame from a Text Control document. */
        remove(text: TextFrame, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}