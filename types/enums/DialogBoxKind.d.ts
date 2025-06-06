declare namespace TXTextControl {
    /** Possible built-in dialog box types. */
    enum DialogBoxKind {
        /** Fonts and character attributes. */
        FontDialog,
        /** Paragraph formatting attributes. */
        ParagraphFormatDialog,
        /** Inserting a new table. */
        InsertTableDialog,
        /** Formatting attributes of bulleted and numbered lists. */
        ListFormatDialog,
        /** Creating, deleting and modifying formatting styles. */
        FormattingStylesDialog,
        /** Section attributes. */
        SectionFormatDialog,
        /** Language of the selected text. */
        LanguageDialog,
        /** Table formatting attributes. */
        TableFormatDialog,
        /** Tabulator settings. */
        TabDialog,
        /** Formatting attributes of the currently selected frame. (Chart frame, text frame, drawing etc.) */
        FrameAttributesDialog,
        /** Find a text string in the text part with the input focus. */
        FindDialog,
        /** Replace a text string in the text part with the input focus. */
        ReplaceDialog,
        /** Text color. */
        ForeColorDialog,
        /** Text background color. */
        TextBackColorDialog,
        /** Add a symbol. */
        InsertSymbolDialog,
        /** Background color of a paragraph or a table cell. */
        FrameFillColorDialog,
        /** Frame line color of a paragraph or a table cell. */
        FrameLineColorDialog,
        /** Page color. */
        PageColorDialog,
        /** Inserting or changing a table of contents. */
        TableOfContentsDialog
    }
}	