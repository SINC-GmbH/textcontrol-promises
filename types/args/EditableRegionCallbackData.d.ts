declare namespace TXTextControl {
    /** The type of the response parameter of the AddEditableRegionCallback callback function. */
    interface EditableRegionCallbackData {
        /** Added editable region. */
        editableRegion: EditableRegion;
        addResult: AddResult
    }
}