import { Point } from "./Point";

/** Information about a frame. */
export interface FrameInfo {
    /** The frame's identifier. */
    id: number;
    /** The frame's location in twips. */
    location: Point;
    /** The frame's name. */
    name: string;
    /** The frame's character position in the document's text (one-based). */
    textPosition: number;
}
