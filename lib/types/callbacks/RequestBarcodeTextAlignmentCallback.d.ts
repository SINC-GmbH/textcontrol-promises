import { BarcodeTextAlignment } from "../enums";

/** Callback function for requesting a barcode text alignment value. */
export type RequestBarcodeTextAlignmentCallback = (alignment: BarcodeTextAlignment) => void;
