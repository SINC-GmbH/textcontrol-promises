import { RequestBooleanCallback } from '../callbacks';
import { FormattingStyle } from './FormattingStyle';

export namespace InlineStyle {
    /** Determines the style's attributes. */
    export enum Attributes {
        /** Specifies the attribute set through the style's FontName property. */
        FontName,
        /** Specifies the attribute set through the style's FontSize property. */
        FontSize,
        /** Specifies the attribute set through the style's Bold property. */
        Bold,
        /** Specifies the attribute set through the style's Italic property. */
        Italic,
        /** Specifies the attribute set through the style's Underline property. */
        Underline,
        /** Specifies the attribute set through the style's Strikeout property. */
        Strikeout,
        /** Specifies the attribute set through the style's Baseline property. */
        Baseline,
        /** Specifies the attribute set through the style's ForeColor property. */
        ForeColor,
        /** Specifies the attribute set through the style's TextBackColor property. */
        TextBackColor,
    }
}
/** The InlineStyle object defines a formatting style that can be used to format single words in a line of text. */
export interface InlineStyle extends FormattingStyle {
    /** Informs about whether one or more of the style's attributes are inherited from the surrounding paragraph. */
    isInheritedFromParagraph(attributes: InlineStyle.Attributes, callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Resets one or more of the style's attributes to its default value which is the same value as defined for the surrounding paragraph. */
    resetToParagraph(attributes: InlineStyle.Attributes, errorCallback?: ErrorCallback): void;
}
