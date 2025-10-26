import { FrameInfo } from "../objects";

/** The event argument for barcode related events. */
export interface BarcodeEventArgs {
    /** Information about the barcode's frame. */
    barcodeFrame: FrameInfo;
}
