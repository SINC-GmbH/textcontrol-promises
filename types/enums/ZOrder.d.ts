declare namespace TXTextControl {
    /** Specifies how the z-order of a frame (image, text frame, chart, barcode or drawing) can be changed. */
    enum ZOrder {
        /** 
         * If the frame is in front of the text, it becomes the bottommost of all objects in front of the text. 
         * If it is behind the text, it is becomes the bottommost of all objects.
         */
        Bottom,
        /** 
         * The frame is moved behind the text below all other objects. 
         * This member is only possible, if the insertion mode is BehindTheText.
         */
        BottomMost,
        /** 
         * The frame is moved down one plane.
         * If it is the bottommost object in front of the text, it is not moved behind the text. 
         */
        Down,
        /** The frame is moved in front of the text at the top of all other objects. */
        TopMost,
        /** 
         * If the frame is behind the text, it becomes the topmost of all objects behind the text.
         * If it is in front of the text, it becomes the topmost of all objects.
         */
        Top,
        /** 
         * The frame is moved up one plane.
         * If it is the topmost object behind the text, it is not moved in front of the text. 
         */
        Up
    }
}