declare namespace TXTextControl {
    /** Specifies how a document can be accessed after it has been opened. */
    enum DocumentAccessPermissions {
        /** Allows none of the possible permissions. */
        None,
        /** Allows authoring comments and fill in interactive form fields (including signature fields).*/
        AllowAuthoring,
        /** Fill -in existing interactive form fields(including signature fields) is allowed. */
        AllowAuthoringFields,
        /** Allows content access for the visually impaired only. */
        AllowContentAccessibility,
        /** Allows to assemble the document(insert, rotate or delete pages and create bookmarks or thumbnails). */
        AllowDocumentAssembly,
        /** Copying or otherwise extracting text and / or graphics is allowed. */
        AllowExtractContents,
        /** Allows modifying the document's contents. */
        AllowGeneralEditing,
        /** Printing the document is fully allowed. */
        AllowHighLevelPrinting,
        /** Printing the document is allowed(low - level). */
        AllowLowLevelPrinting,
        /** Allows all of the possible permissions. */
        AllowAll
    }
}