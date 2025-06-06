declare namespace TXTextControl {
    /** Specifies special text input positions at the beginning and the end of a text field. */
    enum TextFieldPosition {
        /** The specified position is inside the field. */
        InsideTextField,
        /** The specified position is outside the field. */
        OutsideTextField,
        /** 
         * The specified position is inside the next field.
         * This member is only possible, if there are two following text fields without any character bewteen the fields.
         * In this case InsideTextField is in the first field, 
         * OutsideTextField is between the fields and InsideNextTextField is in the second field.
         */
        InsideNextTextField
    }
}