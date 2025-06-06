declare namespace TXTextControl {
    /** The type of the result parameter of the LoadDocumentCallback callback function. */
    interface LoadDocumentCallbackData {
        /** The document's author */
        author: string;
        /** The number of bytes read during the load operation. */
        bytesRead: number;
        /** The document's creation date. */
        creationDate: number;
        /** The application, which has created the document. */
        creatorApplication: string;
        /** The path and filename of the CSS file belonging to an HTML or XML document. */
        cssFileName: string;
        /** The document's keywords. */
        documentKeywords: string[];
        /** SpreadsheetML only. */
        documentPartName: string;
        /** The document's subject string. */
        documentSubject: string;
        /** The date the document is last modified. */
        lastModificationDate: number;
        /** The name and path of the file that has been loaded. */
        loadedFile: string;
        /** The StreamType of the file that has been loaded. */
        loadedStreamType: StreamType;
        /** The margins of the loaded document's pages. */
        pageMargins: Object;
        /** The width and height of the loaded document's pages. */
        pageSize: Size;
    }
}