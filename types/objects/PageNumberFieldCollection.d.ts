declare namespace TXTextControl {
    /** Contains the page number fields in a header or footer of a Text Control document. */
    interface PageNumberFieldCollection extends TextFieldCollectionBase<PageNumberField> {
        /** Inserts a new page number field at the current input position which displays Arabic numbers starting with 1. */
        add(callback?: RequestPageNumberFieldCallback, errorCallback?: ErrorCallback): void;
        /**
         * Gets the field at the current input position or null, if there is no such field at the current input position.
         * @param callback Receives the found PageNumberField.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         * @param id Optional. Specifies the page number field's identifier set with the ID property. The method returns null if a page number field with the specified identifier does not exist.
         */
        getItem(callback: RequestPageNumberFieldCallback, errorCallback?: ErrorCallback, id?: number): void;
        /** Removes a page number from a header or footer of a Text control document. */
        remove(field: PageNumberField, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    }
}