declare namespace TXTextControl {
    /** Contains all paragraph formatting styles in the current document. */
    interface ParagraphStyleCollection extends FormattingStyleCollection<ParagraphStyle> {
        /** Gets a style from the collection by the style's name. */
        add(styleName: string, callback?: RequestParagraphStyleCallback, errorCallback?: ErrorCallback): void;
        /** Adds a new style to the current document. */
        getItem(styleName: string, callback: RequestParagraphStyleCallback, errorCallback?: ErrorCallback): void;
    }
}