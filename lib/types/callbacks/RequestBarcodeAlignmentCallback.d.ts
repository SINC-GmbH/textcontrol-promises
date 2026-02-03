import { BarcodeAlignment } from "../enums";

/** Callback function for requesting a barcode alignment value. */
export type RequestBarcodeAlignmentCallback = (alignment: BarcodeAlignment) => void;
