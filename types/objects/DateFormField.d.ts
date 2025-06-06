declare namespace TXTextControl {
    /** 
     * A DateFormField object represents a date field on a form. 
     * It can be initially empty and it can have a horizontal extension, when it is empty. 
     * When a date field is clicked or entered through the keyboard's arrow keys a date control is shown 
     * where the user can select a date. 
     * When the date field is clicked again or the Escape key is pressed the date control is removed 
     * and the user can insert or change the date with the keyboard. 
     * The date is formatted depending on the culture used for the text of the date field. 
     * When a date field is inserted at a position without a set culture, 
     * a TextControl uses the system language to select a culture. 
     * Supported formats for a certain language can be obtained through the DateFormField.getSupportedDateFormats method 
     * and can be set with the DateFormField.setDateFormat method. 
     * When the DateFormat is an empty string, which is the default, the culture's default format is used. 
     * A user can also insert or change a date with the keyboard, 
     * then the TextControl tries to parse the inserted date depending on the specified format and culture 
     * and automatically formats the date. When parsing is not possible the previous date is restored.
     */
    interface DateFormField extends FormField {
        /** Gets the DateFormField's date. */
        getDate(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /**
         * Gets the date's format. 
         * For a certain DateFormField the format string should be one of the strings 
         * returned through the getSupportedDateFormats function. 
         * A TextControl uses Day, Month, Year, and Era Format Picture strings to format a date. 
         * When this date's format is an empty string, which is the default value, 
         * a default format is used depending on the culture set for the date field's text.
         */
        getDateFormat(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the horizontal extension, in twips, of the text formfield, when it is empty. */
        getEmptyWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** 
         * Gets an array of format picture strings which can be used to format the date. 
         * The returned format strings depend on the culture set for the date field's text. 
         * A TextControl uses Day, Month, Year, and Era Format Picture strings to format a date. 
         */
        getSupportedDateFormats(callback: RequestStringsCallback, errorCallback?: ErrorCallback): void;
        /** Sets the DateFormField's date. */
        setDate(unixTime: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** 
         * Sets the date's format. 
         * For a certain DateFormField the format string should be one of the strings 
         * returned through the getSupportedDateFormats function. 
         * A TextControl uses Day, Month, Year, and Era Format Picture strings to format a date. 
         * When this date's format is an empty string, which is the default value, 
         * a default format is used depending on the culture set for the date field's text.
         */
        setDateFormat(dateFormat: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the horizontal extension, in twips, of the text formfield, when it is empty. */
        setEmptyWidth(emptyWidth: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}