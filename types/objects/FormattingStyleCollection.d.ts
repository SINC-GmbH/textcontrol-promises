declare namespace TXTextControl {
    /** Contains all formatting styles in a Text Control document or part of the document. */
    interface FormattingStyleCollection<T extends FormattingStyle> extends Collection<T> {
        /** Removes a formatting style from the collection. */
        remove(styleName: string, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    }
}