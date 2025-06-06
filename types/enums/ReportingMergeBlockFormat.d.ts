declare namespace TXTextControl {
    namespace SaveSettings {
        /** Specifies how reporting merge blocks are handled when a document is saved. */
        enum ReportingMergeBlockFormat {
            /** The document is saved as it is. Reporting merge blocks are not converted. */
            Default,
            /** If the document contains reporting merge blocks marked with subtextparts, these subtextparts are converted to document targets. */
            DocumentTargets,
            /** This member is not used, when a document is saved. */
            SubTextParts,
        }
    }
}