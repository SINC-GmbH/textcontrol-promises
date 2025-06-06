declare namespace TXTextControl {
    /** Determines which frame borders are visible of an image, text frame, chart, barcode or drawing. */
    enum Frame {
        /** Left frame line. */
        LeftLine,
        /** Right frame line. */
        RightLine,
        /** Frame line at the top. */
        TopLine,
        /** Frame line at the bottom. */
        BottomLine,
        /** Complete frame. */
        Box,
        /** 
         * The paragraph has a complete frame. 
         * If the following or the previous paragraph also has a frame, the frames are merged to a single frame. 
         */
        MergedBox,
        /** No frame. */
        None
    }
}