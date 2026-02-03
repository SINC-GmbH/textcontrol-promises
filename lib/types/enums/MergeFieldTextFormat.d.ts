/** Determines the possible text formats for merge fields containing text. */
export enum MergeFieldTextFormat {
    /** The text is displayed normally. */
    None,
    /** The text is displayed in uppercase. */
    Uppercase,
    /** The text is displayed in lowercase. */
    Lowercase,
    /** The first character is displayed in uppercase. */
    FirstCapital,
    /** The text is displayed in title case. */
    TitleCase,
}
