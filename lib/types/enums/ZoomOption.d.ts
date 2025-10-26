/** Specifies options how to set the zoom factor of a TextControl. */
export enum ZoomOption {
    /** The zoom factor is calculated so that the complete width of a page becomes visible. */
    PageWidth,
    /** The zoom factor is calculated so that the complete text of a line becomes visible. */
    TextWidth,
    /** The zoom factor is calculated so that the current visible page becomes completely visible. */
    WholePage,
}
