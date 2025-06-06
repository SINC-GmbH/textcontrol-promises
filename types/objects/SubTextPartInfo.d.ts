declare namespace TXTextControl {
    /** Specifies the properties of a new SubTextPart  */
    interface SubTextPartInfo {
        /** The name of the SubTextPart. */
        name: string;
        id?: number;
        start?: number;
        length?: number;
        highlightMode?: HighlightMode;
    }
}