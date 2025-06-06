declare namespace TXTextControl {
    /** Determines a certain text format that must be stored in a one-dimensional byte array. */
    enum BinaryStreamType {
        /** Specifies Adobe Portable Document Format (PDF). How a PDF document is loaded depends on the LoadSettings.PDFImportSettings property. Only a complete document can be saved with this format. */
        AdobePDF,
        /** Specifies Adobe Portable Document Format Archive (PDF/A). This format can only be used in saving operations and only a complete document can be saved with this format. */
        AdobePDFA,
        /** Specifies the Text Control format. Text is stored in ANSI format. */
        InternalFormat,
        /** Specifies the Text Control format. Text is stored in Unicode format. */
        InternalUnicodeFormat,
        /** Specifies Microsoft Word format. */
        MSWord,
        /** Specifies Microsoft Excel format (Office Open XML version). */
        SpreadsheetML,
        /** Specifies Microsoft Word format (Office Open XML version). */
        WordprocessingML
    }
}