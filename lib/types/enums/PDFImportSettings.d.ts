/** Specifies how the document structure is generated when a PDF document is imported. It is used with the LoadSettings.PDFImportSettings property */
export enum PDFImportSettings {
    /** Text only,images and paragraph formatting are discarded. This option is best suited for searching PDF files. */
    GenerateLines,
    /** Generates paragraphs from the text flow. Images are discarded. */
    GenerateParagraphs,
    /** Default. Uses tables, images and text frames to create a document that best matches the original document's appearance. */
    GenerateTextFrames,
    /** Same as GenerateTextFrames, but only the first page is loaded. Can be used for previewing the document. */
    GenerateTextFramesFirstPageOnly,
    /** @deprecated Obsolete. This setting will be removed in a future version. Use LoadEmbeddedData instead. */
    GenerateXML,
    /** Provides the PDF document's metadata, form fields and text coordinates through the LoadSettings.EmbeddedData property. */
    LoadEmbeddedData,
    /** Default. Files embedded in the PDF document are loaded and provided through the LoadSettings.EmbeddedFiles property. */
    LoadEmbeddedFiles,
}
