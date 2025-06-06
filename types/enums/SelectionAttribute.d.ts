declare namespace TXTextControl {
    namespace Selection {
        /** Determines a certain selection attribute. */
        enum Attribute {
            /** Specifies the attribute set through the Baseline property. */
            Baseline,
            /** Specifies the attribute set through the Bold property. */
            Bold,
            /** Specifies the attribute set through the Italic property. */
            Italic,
            /** Specifies the attribute set through the FontName property. */
            FontName,
            /** Specifies the attribute set through the FontSize property. */
            FontSize,
            /** Specifies the attribute set through the Strikeout property. */
            Strikeout,
            /** Specifies the attribute set through the Underline property. */
            Underline,
            /** Specifies the attribute set through the ForeColor property. */
            ForeColor,
            /** Specifies the attribute set through the TextBackColor property. */
            TextBackColor,
            /** Specifies the attribute set through the Start property. */
            Start,
            /** Specifies the attribute set through the Length property. */
            Length,
            /** Specifies the attribute set through the Text property. */
            Text,
            /** Specifies the attribute set through the FormattingStyle property. */
            FormattingStyle,
            /** Specifies the attribute set through the Culture property. */
            Culture,
            /** Specifies all attributes of the Selection. */
            All
        }
    }
}