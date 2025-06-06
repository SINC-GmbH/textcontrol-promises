declare namespace TXTextControl {
    /** Information about a date form field. */
    interface DateFormFieldInfo extends TextFieldInfo {
        /** The date as a Unix time stamp in milliseconds. */
        date: number;
        /** The date format. */
        dateFormat: string;
        /** The horizontal width of the empty field in twips. */
        emptyWidth: number;
    }
}