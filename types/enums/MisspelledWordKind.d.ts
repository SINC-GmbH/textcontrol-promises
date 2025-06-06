declare namespace TXTextControl {
    /** Specifies the kind of a misspelled word. */
    enum MisspelledWordKind {
        /** Specifies all misspelled words. */
        All,
        /** Specifies all misspelled words which are marked as duplicate. */
        Duplicate,
        /** Specifies all misspelled words which are marked as ignored. */
        Ignored,
        /** Specifies all misspelled words which do not have a special meaning. */
        Normal
    }
}