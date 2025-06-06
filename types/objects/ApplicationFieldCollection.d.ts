declare namespace TXTextControl {
    /** Contains all created or imported Microsoft Word fields represented through objects of the type ApplicationField. */
    interface ApplicationFieldCollection extends TextFieldCollectionBase<ApplicationField> {
        /**
         * Inserts a new application field at the current input position.
         * @param format Specifies the format of the field. The format depends on the application that supports the field. It can be ApplicationFieldFormat.MSWord or ApplicationFieldFormat.HighEdit.
         * @param typeName Specifies the type name of the field. For example the type name of a Microsoft Word MergeField is MERGEFIELD.
         * @param text Specifies the visible text of the field.
         * @param parameters Specifies an array of strings which are the field's parameters. The order and format of the strings depend on the field's format. For example a Microsoft Word MergeField has the following format: MERGEFIELD FieldName [switches]. In this case the first string of the array is the FieldName and the following strings are possible switches. If a field has no parameters, null can be specified.
         * @param callback Optional. Receives the added ApplicationField.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        add(format: ApplicationFieldFormat, typeName: string, text: string, parameters: string[], callback?: RequestApplicationFieldCallback, errorCallback?: ErrorCallback): void;
        /** Gets the field at the current input position or null, if there is no such field at the current input position. */
        getItem(callback: RequestApplicationFieldCallback, errorCallback?: ErrorCallback): void;
        /**
         * Removes a field of the type ApplicationField from a TX Text Control document.
         * @param applicationField Specifies the field to remove.
         * @param keepText If this parameter is set to true, the field is removed without deleting its visible text. Otherwise, the field's text is also deleted.
         * @param callback Optional. Receives true, if the field could be removed. Otherwise, it is false.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        remove(applicationField: ApplicationField, keepText: Boolean, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    }
}