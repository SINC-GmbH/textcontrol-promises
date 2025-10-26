/** Determines how the frame of an image, text frame, chart, barcode or drawing can be inserted in the text. */
export enum FrameInsertionMode {
    /** The frame is inserted at a certain geometrical location above the text. This means that the frame overwrites the text. */
    AboveTheText,
    /** The frame is inserted in the text as a single character. */
    AsCharacter,
    /** The frame is inserted at a certain geometrical location below the text. This means that the text overwrites the frame. */
    BelowTheText,
    /** The frame is inserted at a certain geometrical location. */
    DisplaceCompleteLines,
    /** The frame is inserted at a certain geometrical location. */
    DisplaceText,
}
