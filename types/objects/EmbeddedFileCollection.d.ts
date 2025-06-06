declare namespace TXTextControl {
    /** Base of all collections containing frame objects. */
    interface EmbeddedFileCollection extends Collection<EmbeddedFile> {
        /**
         * Adds an embedded binary file to the collection.
         * @param fileName Specifies the file's name.
         * @param data Specifies the file's binary data as a base64 string.
         * @param metaData Optional. Specifies additional metadata with properties of the document which is embedded.
         * The data is added to the metadata of the containing document. 
         * The string must consist of one or more rdf:Description elements as specified by the 
         * XMP Specification (XMP: Extensible Metadata Platform, Adobe Systems Incorporated) or the 
         * RDF Model and Syntax Specification (http://www.w3.org/TR/rdf-syntax-grammar/). 
         * rdf is the XML namespace prefix for the "http://www.w3.org/1999/02/22-rdf-syntax-ns#" namespace. 
         * It can be null or an empty string, if there is no additional meta data to embed.
         * @param callback Optional. Is called when the operation completed.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        addBinaryFile(fileName: string, data: string, metaData?: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /**
         * Adds an embedded text file to the collection.
         * @param fileName Specifies the file's name.
         * @param data Specifies the file's data as a string.
         * @param metaData Optional. Specifies additional metadata with properties of the document which is embedded.
         * The data is added to the metadata of the containing document. 
         * The string must consist of one or more rdf:Description elements as specified by the 
         * XMP Specification (XMP: Extensible Metadata Platform, Adobe Systems Incorporated) or the 
         * RDF Model and Syntax Specification (http://www.w3.org/TR/rdf-syntax-grammar/). 
         * rdf is the XML namespace prefix for the "http://www.w3.org/1999/02/22-rdf-syntax-ns#" namespace. 
         * It can be null or an empty string, if there is no additional meta data to embed.
         * @param callback Optional. Is called when the operation completed.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        addTextFile(fileName: string, data: string, metaData?: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Removes the embedded file at the given index. */
        removeElementAt(index: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}