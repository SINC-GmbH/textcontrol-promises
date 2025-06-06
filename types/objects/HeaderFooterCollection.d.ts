declare namespace TXTextControl {
    /** Contains all headers and footers in a document or part of the document. */
    interface HeaderFooterCollection extends Collection<HeaderFooter> {
        /** Adds a new header or footer to a document or to a certain section of the document. */
        add(headerFooterType: HeaderFooterType, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a particular header or footer from the collection. */
        getItem(headerFooterType: HeaderFooterType, callback: RequestHeaderFooterCallback, errorCallback?: ErrorCallback): void;
        /** Removes a header or footer from the document or from a certain section. */
        remove(headerFooterType: HeaderFooterType, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    }
}