declare namespace TXTextControl {
    namespace InputPosition {
        /** Determines a position to where the input position is scrolled. */
        enum ScrollPosition {
            /** 
             * Scrolls the current input position into the visible part of the document 
             * using a default position depending on the previous position. 
             */
            Auto,
            /** Scrolls the input position to the left side of the visible portion of the document */
            Left,
            /** Scrolls the input position to the right side of the visible portion of the document. */
            Right,
            /** Scrolls the input position to the top of the visible portion of the document. */
            Top,
            /** Scrolls the input position to the bottom of the visible portion of the document. */
            Bottom,
        }
    }

}