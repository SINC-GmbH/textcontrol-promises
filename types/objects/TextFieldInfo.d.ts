declare namespace TXTextControl {
    /** 
     * The type of the text field object in TextFieldEventArgs 
     * or in other properties / methods returning static field information (or arrays thereof). 
     */
    interface TextFieldInfo {
        /** The bounding rectangle of a text field. */
        bounds: Rectangle;
        /** Returns true if the Textfield contains the current text input position. */
        containsInputPosition: boolean;
        /** 
         * Specifies whether a text field can be deleted by the end-user 
         * while a TX Text Control document is being edited. 
         */
        deleteable: boolean;
        /** 
         * Specifies whether a text field has a doubled input position in front of its first character 
         * and behind its last character. 
         */
        doubledInputPosition: boolean;
        /** 
         * Specifies whether the text of a text field can be changed by the end-user 
         * while a TX Text Control document is being edited. 
         */
        editable: boolean;
        /** The formatting rectangle of a text field. */
        formattingBounds: Rectangle;
        /** The identifier of the text field. */
        id: number;
        /** Specifies whether a text field's text is checked on misspelled words. */
        isSpellCheckingEnabled: boolean;
        /** The number of characters in the text field. */
        length: number;
        /** The text field's name. */
        name: string;
        /** Specifies whether a text field toggles its background to gray, if the current input position is in the field. */
        showActivated: boolean;
        /** The 1-based first character position of the text field. */
        start: number;
        /** The text field's text content. */
        text: string;
        /** The field type ("APPLICATIONFIELD" or "TEXTFIELD"). */
        type: 'APPLICATIONFIELD' | 'TEXTFIELD';
    }
}