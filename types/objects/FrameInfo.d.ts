declare namespace TXTextControl {
    /** Information about a frame. */
    interface FrameInfo {
        /** The frame's identifier. */
        id: number;
        /** The frame's location in twips. */
        location: Point;
        /** The frame's name. */
        name: string;
        /** The frame's character position in the document's text (one-based). */
        textPosition: number;
    }
}