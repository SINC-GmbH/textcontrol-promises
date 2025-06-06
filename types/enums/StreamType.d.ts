declare namespace TXTextControl {
    /** Determines a certain text format. */
    enum StreamType {
        /** Specifies HTML format (Hypertext Markup Language). */
        HTMLFormat,
        /** Specifies RTF format (Rich Text Format). */
        RichTextFormat,
        /** Specifies text in Unicode format. */
        PlainText,
        /** Specifies the internal Text Control format (Unicode). */
        InternalUnicodeFormat,
        /** Specifies Microsoft Word format (.DOC version). */
        MSWord,
        /** Specifies Adobe Portable Document Format (PDF). */
        AdobePDF,
        /** Specifies Microsoft Word format (.DOCX version). */
        WordprocessingML,
        /** Specifies Microsoft Excel format (Office Open XML version). */
        SpreadsheetML
    }
}