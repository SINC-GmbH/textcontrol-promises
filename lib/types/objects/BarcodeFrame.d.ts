import { EmptyRequestCallback } from '../callbacks';
import { Barcode } from './Barcode';
import { FrameBase } from './FrameBase';

/** A BarcodeFrame object represents a barcode and its layout in a Text Control document. */
export interface BarcodeFrame extends FrameBase {
    /** Refreshes the barcode. */
    refresh(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** The barcode control associated with the barcode frame. */
    barcode: Barcode;
}
