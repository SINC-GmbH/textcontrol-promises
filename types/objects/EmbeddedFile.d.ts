declare namespace TXTextControl {
    /** The EmbeddedFile class represents a file embedded in another document. */
    interface EmbeddedFile {
        /** Gets the file's creation date as a unix timestamp. */
        getCreationDate(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the file's data as a base64 string. */
        getData(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets an optional file description. */
        getDescription(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the file's name. */
        getFileName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the date the file was last modified as a unix timestamp. */
        getLastModificationDate(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets an optional string specifying the file's type using types specified through the Multipurpose Internet Mail Extensions (MIME) specification. */
        getMIMEType(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** 
         * PDF/A only. 
         * This string can be a predefined value or should follow the rules for second-class names (ISO 32000-1, Annex E). 
         * Predefined values are "Source", "Data", "Alternative", "Supplement" or "Unspecified".
         */
        getRelationship(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Sets the file's creation date as a unix timestamp. */
        setCreationDate(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets an optional file description. */
        setDescription(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the date the file was last modified as a unix timestamp. */
        setLastModificationDate(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets an optional string specifying the file's type using types specified through the Multipurpose Internet Mail Extensions (MIME) specification. */
        setMIMEType(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** 
         * PDF/A only. 
         * This string can be a predefined value or should follow the rules for second-class names (ISO 32000-1, Annex E). 
         * Predefined values are "Source", "Data", "Alternative", "Supplement" or "Unspecified".
         */
        setRelationship(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}