import { BarcodeType } from "../enums";

/** Callback function for requesting a barcode type value. */
export type RequestBarcodeTypeCallback = (barcodeType: BarcodeType) => void;
