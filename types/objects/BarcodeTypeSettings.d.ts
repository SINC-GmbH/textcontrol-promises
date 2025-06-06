declare namespace TXTextControl {
    /** The BarcodeTypeSettings object provides methods to apply barcode type specific settings. */
    interface BarcodeTypeSettings {
        /** Gets a value indicating whether the currently used barcode type includes a check value. */
        getHasCheckValue(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value indicating whether the check value of the currently used barcode type is shown with the encrypted barcode text value. */
        getShowCheckValue(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value indicating whether the currently used barcode type includes a check value. */
        setHasCheckValue(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets or sets a value indicating whether the check value of the currently used barcode type is shown with the encrypted barcode text value. */
        setShowCheckValue(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}