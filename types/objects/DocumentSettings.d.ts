declare namespace TXTextControl {
    /** The DocumentSettings provides properties which inform about general document settings */
    interface DocumentSettings {
        /** Gets the author of the current document. */
        getAuthor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the document's creation date as a unix timestamp. */
        getCreationDate(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the application, which has created the current document. */
        getCreatorApplication(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets a file path that is used to search for resources like images or hypertext links. */
        getDocumentBasePath(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the current document's keywords. */
        getDocumentKeywords(callback: RequestStringsCallback, errorCallback?: ErrorCallback): void;
        /** Gets the subject string of the current document. */
        getDocumentSubject(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the title string of the current document. */
        getDocumentTitle(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets an object with all user-defined document properties contained in the current document. */
        getUserDefinedDocumentProperties<T>(callback: RequestObjectCallback<T>, errorCallback?: ErrorCallback): void;
        /** Sets the author of the current document. */
        setAuthor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the document's creation date as a unix timestamp. */
        setCreationDate(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the application, which has created the current document. */
        setCreatorApplication(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a file path that is used to search for resources like images or hypertext links. */
        setDocumentBasePath(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the current document's keywords. */
        setDocumentKeywords(value: string[], callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the subject string of the current document. */
        setDocumentSubject(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the title string of the current document. */
        setDocumentTitle(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets an object with all user-defined document properties contained in the current document. */
        setUserDefinedDocumentProperties<T>(value: T, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;

        /** Gets a collection of all files embedded in the document. */
        embeddedFiles: EmbeddedFileCollection;
    }
}