import { Size } from "./Size";

/**
 * Stores a pair of numbers which specify a height and width.
 * @scraper-ignore
 */
export interface PaperSize extends Size {
    /** The name of the Paper */
    name: string;
}
