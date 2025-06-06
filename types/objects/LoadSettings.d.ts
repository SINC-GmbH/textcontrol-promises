declare namespace TXTextControl {
    /** The LoadSettings object provides properties for advanced settings and information during load operations. */
    interface LoadSettings {
        /** Specifies how the document structure is generated when a PDF document is imported. */
        PDFImportSettings?: PDFImportSettings;
        /** Specifies whether or not a new paragraph is created before text is loaded. */
        addParagraph?: boolean;
        /** Specifies the format of text fields which are imported. */
        applicationFieldFormat?: ApplicationFieldFormat;
        /** Specifies an array of strings containing the type names of fields which are to be imported. */
        applicationFieldTypeNames?: string[];
        /** Specifies how a document can be accessed after it has been loaded. */
        documentAccessPermissions?: DocumentAccessPermissions;
        /** Sets a file path that is used to search for resources like images or hypertext links. */
        documentBasePath?: string;
        /** SpreadsheetML only. */
        documentPartName?: string;
        /** Sets a file path that is used to search for resources like images or hypertext links. */
        imageSearchPath?: string;
        /** Specifies whether or not the document background color is loaded. */
        loadDocumentBackColor?: boolean;
        /** Specifies whether or not hypertext links are loaded. */
        loadHypertextLinks?: boolean;
        /** Specifies whether or not images are loaded. */
        loadImages?: boolean;
        /** DOCX Format only: Specifies whether or not bookmarks which extend over several characters are converted to SubTextParts. */
        loadSubTextParts?: boolean;
        /** Specifies the password when the document is restricted with access permissions. */
        masterPassword?: number;
        /** Specifies how reporting merge blocks are handled when a document is loaded. */
        reportingMergeBlockFormat?: SaveSettings.ReportingMergeBlockFormat;
        /** Specifies the password for the user to open a password protected document. */
        userPassword?: string;
    }
}