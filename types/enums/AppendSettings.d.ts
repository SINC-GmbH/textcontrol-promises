declare namespace TXTextControl {
    /** Determines how text is appended to the document. */
    enum AppendSettings {
        /** The loaded text is inserted at the end of the last paragraph of the existing document. */
        None,
        /** A new paragraph is created at the end of the document and the text is inserted in this paragraph. */
        StartWithNewParagraph,
        /** A new section is created at the end of the document and the text is inserted in this section. */
        StartWithNewSection

    }
}