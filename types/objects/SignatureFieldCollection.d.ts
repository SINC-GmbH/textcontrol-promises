declare namespace TXTextControl {
    /** Contains all signature fields of a Text Control document or part of the document. */
    interface SignatureFieldCollection extends FrameBaseCollection<SignatureField> {
        /** Creates and inserts a new signature field which is anchored to the specified text position. */
        addAnchored(
            size: Size,
            horizontalAlignment: HorizontalAlignment,
            textPosition: number,
            insertionMode: FrameInsertionMode,
            callback?: RequestSignatureFieldCallback,
            errorCallback?: ErrorCallback
        ): void;
        /** Inserts a new signature field which is anchored to the specified text position. */
        addAnchoredAtLocation(
            size: Size,
            location: Point,
            textPosition: number,
            insertionMode: FrameInsertionMode,
            callback?: RequestSignatureFieldCallback,
            errorCallback?: ErrorCallback
        ): void;
        /** Creates and inserts a new signature field which has a fixed geometrical position in the document. */
        addAtFixedPositionInDocument(
            size: Size,
            location: Point,
            insertionMode: FrameInsertionMode,
            callback?: RequestSignatureFieldCallback,
            errorCallback?: ErrorCallback
        ): void;
        /** Inserts a new image which has a fixed geometrical position in the document. */
        addAtFixedPositionOnPage(
            size: Size,
            pageNumber: number,
            location: Point,
            insertionMode: FrameInsertionMode,
            callback?: RequestSignatureFieldCallback,
            errorCallback?: ErrorCallback
        ): void;
        /** Inserts a signature field inline, which means that it is treated in the text like a single character. */
        addInline(size: Size, textPosition: number, callback: RequestSignatureFieldCallback, errorCallback?: ErrorCallback): void;
        /** Inserts a signature field with the built-in mouse interface. */
        addWithMouse(insertionMode: FrameInsertionMode, errorCallback?: ErrorCallback): void;
        /** Gets the signature field selected by the user or the signature field with the specified identifier. */
        getItem(callback: RequestSignatureFieldCallback, errorCallback?: ErrorCallback, id?: number): void;
        /** Gets the signature field with the specified name. */
        getItemByName(callback: RequestSignatureFieldCallback, errorCallback: ErrorCallback | null, name: string): void;
        /** Removes a signature field from a Text Control document. */
        remove(field: SignatureField, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}