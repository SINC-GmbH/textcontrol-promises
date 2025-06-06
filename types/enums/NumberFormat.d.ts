declare namespace TXTextControl {
    /** Specifies the format of a numbered list. */
    enum NumberFormat {
        /** A text selection contains different number formats. */
        None,
        /** The list is numbered with Arabic numbers (1, 2, 3...). */
        ArabicNumbers,
        /** The list is numbered with letters (a, b, c...). */
        Letters,
        /** The list is numbered with capital letters (A, B, C...). */
        CapitalLetters,
        /** The list is numbered with Roman numbers (I, II, III...). */
        RomanNumbers,
        /** The list is numbered with small Roman numbers (i, ii, iii...). */
        SmallRomanNumbers
    }
}