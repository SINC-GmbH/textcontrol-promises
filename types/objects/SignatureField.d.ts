declare namespace TXTextControl {
    /** The SignatureField object represents a rectangle that can be filled with text by an end-user and can be edited like the main text. */
    interface SignatureField extends FrameBase {
        /** Gets the signer data of the signature field. */
        getSignerData(callback: RequestSignerDataCallback, errorCallback?: ErrorCallback): void;
        /**
         * Sets the signature field's image.
         * @param imageData The base64 encoded image data.
         * @param callback Optional. Is called when the operation completed.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        setImage(imageData: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the signer data of the signature field. */
        setSignerData(value: SignerData, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;

        /**The signature field's image. */
        image: SignatureImage;
    }
}