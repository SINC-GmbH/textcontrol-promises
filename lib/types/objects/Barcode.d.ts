import {
    RequestStringCallback,
    RequestBarcodeAlignmentCallback,
    RequestNumberCallback,
    RequestBarcodeTypeCallback,
    RequestBooleanCallback,
    RequestBarcodeTextAlignmentCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { ImageFormat, BarcodeAlignment, BarcodeType, BarcodeTextAlignment } from '../enums';

/** The Barcode object provides methods to specify the type and format of barcodes. */
export interface Barcode {
    /** Gets an additional text that is displayed below or above the barcode image. */
    getAdditionalText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the alignment of the barcode image inside the control. */
    getAlignment(callback: RequestBarcodeAlignmentCallback, errorCallback?: ErrorCallback): void;
    /** Gets the angle of the barcode image inside the control. */
    getAngle(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the background color of the barcode control. */
    getBackColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the type of barcode that is rendered. */
    getBarcodeType(callback: RequestBarcodeTypeCallback, errorCallback?: ErrorCallback): void;
    /** Gets the foreground color of the barcode control. */
    getForeColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether the encrypted barcode text value is displayed below or above the barcode image or not. */
    getShowText(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text encrypted by the barcode. */
    getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether the barcode text and additional text is displayed below or above the barcode image. */
    getTextAlignment(callback: RequestBarcodeTextAlignmentCallback, errorCallback?: ErrorCallback): void;
    /** Gets the maximum text length. */
    getUpperTextLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /**
     * Saves the barcode image.
     * @param imageFormat Specifies the format used to save the image.
     * @param callback Receives the image data as a base64 string.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    saveImage(imageFormat: ImageFormat, callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Sets an additional text that is displayed below or above the barcode image. */
    setAdditionalText(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the alignment of the barcode image inside the control. */
    setAlignment(value: BarcodeAlignment, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the angle of the barcode image inside the control. */
    setAngle(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the background color for the barcode control. */
    setBackColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the type of barcode that is rendered. */
    setBarcodeType(value: BarcodeType, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the foreground color for the barcode control. */
    setForeColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** 	Sets a value indicating whether the encrypted barcode text value is displayed below or above the barcode image or not. */
    setShowText(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the text the barcode should encrypt. */
    setText(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether the barcode text and additional text is displayed below or above the barcode image. */
    setTextAlignment(value: BarcodeTextAlignment, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the maximum text length. */
    setUpperTextLength(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
