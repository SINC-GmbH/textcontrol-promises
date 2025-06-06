declare namespace TXTextControl {
    /** The PageNumberField object supports text field formats of applications such as Microsoft Word. */
    interface PageNumberField extends TextField {
        /** Gets the number format. */
        getNumberFormat(callback: RequestNumberFormatCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value indicating whether the field shows the page number or the total number of pages. */
        getShowNumberOfPages(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the page number for the first page. */
        getStartNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Sets the number format. */
        setNumberFormat(value: NumberFormat, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value indicating whether the field shows the page number or the total number of pages. */
        setShowNumberOfPages(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the page number for the first page. */
        setStartNumber(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}