declare namespace TXTextControl {
    /** The possible application field formats. */
    enum ApplicationFieldFormat {
        /** Unspecified field format. */
        None,
        /** The field is supported and defined through Microsoft Word. */
        MSWord,
        /** The field is supported and defined through the Heiler HighEdit component. */
        HighEdit,
        /** This value can only be used with the LoadSettings.ApplicationFieldFormat property. */
        MSWordTXFormFields,
    }
}	