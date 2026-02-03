import { PaperSize } from "../objects";

/** Callback function for requesting an array of paper sizes. */
export type RequestPaperSizesCallback = (paperSizes: PaperSize[]) => void;
