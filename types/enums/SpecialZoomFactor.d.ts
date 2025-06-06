declare namespace TXTextControl {
    /** Determines the special zoom factor values for property TXTextControl.zoomFactor. */
    enum SpecialZoomFactor {
        /** The zoom factor is calculated so that the complete width of a page becomes visible. */
        PageWidth,
        /** The zoom factor is calculated so that the current visible page becomes completely visible. */
        WholePage,
        /** The zoom factor is calculated so that the complete text of a line becomes visible. */
        TextWidth
    }
}