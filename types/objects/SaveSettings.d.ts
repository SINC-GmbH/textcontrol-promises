declare namespace TXTextControl {
    /** Represents a pair of x- and y-coordinates that defines a point in a two-dimensional plane. */
    interface SaveSettings {
        /** The document's author which will be saved in the document. */
        author?: string;
        /** The document's creation date which will be saved in the document. */
        creationDate?: number;
        /** The application, which has created the document. */
        creatorApplication?: string;
        /** HTML only. */
        cssSaveMode?: SaveSettings.CssSaveMode;
        /** Specifies how a document can be accessed after it has been opened. */
        documentAccessPermissions?: DocumentAccessPermissions;
        /** Sets the document's keywords which will be saved in the document. */
        documentKeywords?: Array<string>;
        /** Specifies an array of strings containing Javascript. */
        documentLevelJavaScriptActions?: string;
        /** Sets the document's subject string which will be saved in the document. */
        documentSubject?: string;
        /** Sets the document's title that will be saved in the document. */
        documentTitle?: string;
        /** Specifies whether or not form fields are flattened when the document is saved. */
        flattenFormFields: boolean;
        /** Sets a value between 1 and 100, which is the quality of a lossy image compression used when a document is saved. */
        imageCompressionQuality?: number;
        /** Sets the format used for saving all images contained in the document. */
        imageExportFilterIndex?: number;
        /** Sets the maximum resolution for all images in the document in dots per inch when the document is saved. */
        imageMaxResolution?: number;
        /** Sets the date the document is last modified. */
        lastModificationDate?: number;
        /** Specifies a password for the document's access permissions. */
        masterPassword?: string;
        /** Specifies data to be omitted when the document is saved. */
        omittedContent?: SaveSettings.OmittedContent;
        /** Specifies how reporting merge blocks are handled when a document is saved. */
        reportingMergeBlockFormat?: SaveSettings.ReportingMergeBlockFormat;
        /** Specifies whether or not the document background color is saved. */
        saveDocumentBackColor?: boolean;
        /** Specifies the password for the user when the document is reopened. */
        userPassword?: string;
    }
}