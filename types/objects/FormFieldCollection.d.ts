declare namespace TXTextControl {
    /** The FormFieldCollection contains all form fields in a Text Control document or part of the document. */
    interface FormFieldCollection extends Collection<FormField> {
        /**
         * Adds a new CheckFormField.
         * @param isChecked Specifies whether the checkbox is initially checked or unchecked. When this parameter is true, it is checked.
         * @param callback Optional. Receives the added CheckFormField.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        addCheckFormField(isChecked: boolean, callback?: RequestCheckFormFieldCallback, errorCallback?: ErrorCallback): void;
        /**
         * Adds a new DateFormField.
         * @param emptyWidth Specifies the horizontal extension, in twips, when the Form Field is Empty. When this parameter is set to 0, a default value is used.
         * @param callback Optional. Receives the added DateFormField.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        addDateFormField(emptyWidth: number, callback?: RequestDateFormFieldCallback, errorCallback?: ErrorCallback): void;
        /**
         * Adds a new SelectionFormField.
         * @param emptyWidth Specifies the horizontal extension, in twips, when the Form Field is Empty. When this parameter is set to 0, a default value is used.
         * @param callback Optional. Receives the added SelectionFormField.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        addSelectionFormField(emptyWidth: number, callback?: RequestSelectionFormFieldCallback, errorCallback?: ErrorCallback): void;
        /**
         * Adds a new TextFormField.
         * @param emptyWidth Specifies the horizontal extension, in twips, when the Form Field is Empty. When this parameter is set to 0, a default value is used.
         * @param callback Optional. Receives the added TextFormField.
         * @param errorCallback Optional. Is called when the operation failed with an error.
         */
        addTextFormField(emptyWidth: number, callback?: RequestTextFormFieldCallback, errorCallback?: ErrorCallback): void;
        /** Gets the form field at the current text input position or the form field with the specified id. */
        getItem(callback: RequestFormFieldCallback, errorCallback?: ErrorCallback): void;
        /** Removes the form field from the Text Control document. */
        remove(formField: FormField, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    }
}