/** Determines how a text frame can be inserted in the text. */
export enum TextFrameInsertionMode {
    /**
     * The text frame is inserted at a certain geometrical location above the text.
     * This means that the text frame overwrites the text.
     */
    AboveTheText,
    /** The text frame is inserted in the text as a single character. */
    AsCharacter,
    /**
     * The text frame is inserted at a certain geometrical location below the text.
     * This means that the text overwrites the text frame.
     */
    BelowTheText,
    /** The text frame is inserted at a certain geometrical location. */
    DisplaceCompleteLines,
    /** The text frame is inserted at a certain geometrical location. */
    DisplaceText,
}
