declare namespace TXTextControl {
    /** Contains all formatting styles in a Text Control document or part of the document. */
    interface InlineStyleCollection extends FormattingStyleCollection<InlineStyle> {
        /** Adds a new style to the current document. */
        add(styleName: string, callback?: RequestInlineStyleCallback, errorCallback?: ErrorCallback): void;
        /** Gets a style from the collection by the style's name. */
        getItem(styleName: string, callback: RequestInlineStyleCallback, errorCallback?: ErrorCallback): void;
    }
}