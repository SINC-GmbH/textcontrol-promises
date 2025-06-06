declare namespace TXTextControl {
    /** Contains all barcodes in a document represented through objects of the type BarcodeFrame. */
    interface BarcodeCollection extends FrameBaseCollection<BarcodeFrame> {
        /** 
         * Creates and inserts a new barcode which is anchored to the specified text position.
         * It has the specified horizontal alignment and a textflow which is given through the insertionMode parameter. 
         * Anchored barcodes are moved with the text. 
         */
        addAnchored(
            callback: RequestBarcodeFrameCallback,
            errorCallback: ErrorCallback | null,
            barcodeType: BarcodeType,
            text: string,
            horizontalAlignment: HorizontalAlignment,
            textPosition: number,
            insertionMode: FrameInsertionMode
        ): void;
        /** 
         * Inserts a new barcode which is anchored to the specified text position. 
         * It has the specified location relative to the paragraph it is anchored to 
         * and a textflow which is given through the insertionMode parameter. 
         * Anchored barcode are moved with the text.
         */
        addAnchoredAtLocation(
            callback: RequestBarcodeFrameCallback,
            errorCallback: ErrorCallback | null,
            barcodeType: BarcodeType,
            text: string,
            location: Point,
            textPosition: number,
            insertionMode: FrameInsertionMode
        ): void;
        /** 
         * Creates and inserts a new barcode which has a fixed geometrical position in the document. 
         * This position is specified through a location relative to the top left corner of the complete document. 
         * All gaps between the pages must be included.
         */
        addAtFixedPositionInDocument(
            callback: RequestBarcodeFrameCallback,
            errorCallback: ErrorCallback | null,
            barcodeType: BarcodeType,
            text: string,
            location: Point,
            insertionMode: FrameInsertionMode
        ): void;
        /** 
         * Inserts a new image which has a fixed geometrical position in the document. 
         * This position is specified through a page number and a location on this page.
         */
        addAtFixedPositionOnPage(
            callback: RequestBarcodeFrameCallback,
            errorCallback: ErrorCallback | null,
            barcodeType: BarcodeType,
            text: string,
            pageNumber: number,
            location: Point,
            insertionMode: FrameInsertionMode
        ): void;
        /**
         * Creates and inserts a new barcode inline, which means that it is treated in the text like a single character.
         * @param callback The newly created barcode object is returned via this callback function.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         * @param barcodeType The barcode type.
         * @param text The text the barcode should encrypt.
         * @param textPosition Optional. Specifies the text position at which the barcode is to be inserted. If -1 or no value is specified, the barcode is inserted at the current input position.
         */
        addInline(
            callback: RequestBarcodeFrameCallback,
            errorCallback: ErrorCallback | null,
            barcodeType: BarcodeType,
            text: string,
            textPosition?: number
        ): void;
        /** 
         * Inserts a barcode with the built -in mouse interface. 
         * The barcode's size is determined through the end-user. 
         * A cross cursor indicates where the barcode can be inserted. 
         * Changing the document aborts the insertion process.
         */
        addWithMouse(
            barcodeType: BarcodeType,
            text: string,
            insertionMode: FrameInsertionMode,
            callback?: EmptyRequestCallback,
            errorCallback?: ErrorCallback,
        ): void;
        /** Gets the barcode selected by the user or the barcode with the specified identifier. */
        getItem(callback: RequestBarcodeFrameCallback, errorCallback?: ErrorCallback, id?: number): void;
        /** Gets the barcode with the specified name. */
        getItemByName(callback: RequestBarcodeFrameCallback, errorCallback: ErrorCallback | null, name: string): void;
        /** Removes a barcode. */
        remove(barcode: BarcodeFrame, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}