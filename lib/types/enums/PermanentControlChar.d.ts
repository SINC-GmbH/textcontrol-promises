/** Defines a control character which is shown permanently on the screen. */
export enum PermanentControlChar {
    /** Shows the control character of a space. */
    Space,
    /** Shows the control character of a tabstop. */
    Tab,
    /** Shows the control character for the end of a paragraph. */
    ParagraphEnd,
    /** Shows the control character of a forced line break. */
    ForcedLineBreak,
    /** Shows the anchor position of an image, text frame, chart, barcode or drawing. */
    ObjectAnchor,
    /** Marks a forced page break. */
    ForcedPageBreak,
    /** Marks a section break. */
    SectionBreak,
    /** Shows the control character of a hyphen. */
    Hyphen,
    /** Shows the control character of a non-breaking space. */
    NonBreakingSpace,
    /** Shows the control character for the end of a table cell. */
    TableCellEnd,
    /**
     * Shows a dot in front of the first line of a paragraph
     * with one of the pagination settings 'keep with next', 'page break before' and 'keep lines together'.
     */
    Pagination,
    /** Shows all control characters. */
    All,
}
