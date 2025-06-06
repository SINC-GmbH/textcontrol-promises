declare namespace TXTextControl {
    namespace SaveSettings {
        /** Specifies data to be omitted when the document is saved. */
        enum OmittedContent {
            /** Nothing is omitted. */
            None,
            /**
             * Subtextparts are omitted. 
             * Only the subtextpart is omitted, the text and formatting attributes belonging to the subtextpart are saved.
             */
            SubTextParts,
            /** 
             * Tracked changes are omitted. 
             * Only the markup is omitted, the text and formatting attributes belonging to the tracked change are saved.
             */
            TrackedChanges,
            /** 
             * Editable regions are omitted.
             * Only the region marker are omitted, the text and formatting attributes belonging to the editable region are saved.
             */
            EditableRegions,
            /** Sections are omitted. */
            Sections,
            /** Text fields are omitted. */
            TextFields
        }
    }
}