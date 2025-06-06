declare namespace TXTextControl {
    /** Determines how an image can be inserted in the text. */
    enum ImageInsertionMode {
        /** 
         * The image is inserted at a certain geometrical location above the text. 
         * This means that the image overwrites the text. 
         */
        AboveTheText,
        /** The image is inserted in the text as a single character. */
        AsCharacter,
        /** 
         * The image is inserted at a certain geometrical location below the text. 
         * This means that the text overwrites the image. 
         */
        BelowTheText,
        /** The image is inserted at a certain geometrical location. */
        DisplaceCompleteLines,
        /** The image is inserted at a certain geometrical location. */
        DisplaceText
    }
}