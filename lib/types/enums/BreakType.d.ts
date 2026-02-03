/** Specifies where and how a text or section breaks. */
export enum BreakType {
    /** Break the line. */
    NextLine,
    /** Break the column */
    Column,
    /** Break the page. */
    Page,
    /** Begin the section at new page. */
    SectionNextPage,
    /** Begin the section at new line. */
    SectionContinuous,
}
