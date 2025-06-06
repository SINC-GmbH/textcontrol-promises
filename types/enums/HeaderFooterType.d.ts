declare namespace TXTextControl {
    /** Determines the type of a header or footer. */
    enum HeaderFooterType {
        /** 
         * The object is a header. When an even header exists, the object represents the odd header. 
         * Otherwise it represents the header of all pages. 
         */
        Header,
        /** The object represents a special header of the document's or section's first page. */
        FirstPageHeader,
        /** 
         * The object is a footer. When an even footer exists, this member represents the odd footer.
         * Otherwise it represents the footer of all pages. 
         */
        Footer,
        /** The object represents a special footer of the document's or section's first page. */
        FirstPageFooter,
        /** The object represents an even header. */
        EvenHeader,
        /** The object represents an even footer. */
        EvenFooter,
        /** The object represents an footer or header. */
        All
    }
}