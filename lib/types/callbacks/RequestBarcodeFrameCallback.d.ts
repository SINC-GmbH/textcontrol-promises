import { BarcodeFrame } from "../objects";

/** Callback function for requests expecting a BarcodeFrame object. */
export type RequestBarcodeFrameCallback = (barcodeFrame: BarcodeFrame) => void;
