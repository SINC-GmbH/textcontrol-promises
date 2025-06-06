declare namespace TXTextControl {
    /** 
     * The TextFormField object represents a text input field on a form. 
     * It can be initially empty and it can have a horizontal extension, when it is empty. 
     */
    interface TextFormField extends FormField {
        /** Gets the horizontal extension, in twips, of the text formfield, when it is empty. */
        getEmptyWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Sets the horizontal extension, in twips, of the text formfield, when it is empty. */
        setEmptyWidth(emptyWidth: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}