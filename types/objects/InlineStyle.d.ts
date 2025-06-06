declare namespace TXTextControl {
    /** The InlineStyle object defines a formatting style that can be used to format single words in a line of text. */
    interface InlineStyle extends FormattingStyle {
        /** Informs about whether one or more of the style's attributes are inherited from the surrounding paragraph. */
        isInheritedFromParagraph(attributes: InlineStyle.Attributes, callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Resets one or more of the style's attributes to its default value which is the same value as defined for the surrounding paragraph. */
        resetToParagraph(attributes: InlineStyle.Attributes, errorCallback?: ErrorCallback): void;

    }
}