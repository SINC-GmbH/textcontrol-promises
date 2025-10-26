/** Determines search options for the find method. */
export enum FindOptions {
    /** The search starts at the end of the control's document and searches to the beginning of the document. */
    Reverse,
    /** Locates only instances of the search text that have the exact casing. */
    MatchCase,
    /** The search text, if found, is not highlighted. */
    NoHighlight,
    /** Does not display message boxes to inform about search results. */
    NoMessageBox,
    /** Locates only instances of the search text which are whole words. */
    MatchWholeWord,
}
