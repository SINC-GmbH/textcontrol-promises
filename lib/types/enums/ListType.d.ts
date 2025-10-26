/** Specifies the type of a list. */
export enum ListType {
    /** The text is neither a bulleted nor a numbered list. */
    None,
    /** The list is a bulleted list. */
    Bulleted,
    /** The list is a numbered list. */
    Numbered,
    /**
     * The list is a structured list.
     * All numbers of higher levels (lower level numbers) are displayed in front of the list number.
     * The additional text of all levels in front and behind the list numbers is also displayed.
     */
    Structured,
}
