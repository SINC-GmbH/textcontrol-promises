/** Determines a certain text format that can be stored as a string.  */
export enum StringStreamType {
    /** Specifies CSS format (Cascading Style Sheet). This format can only be used in saving operations. */
    CascadingStylesheet,
    /** Specifies HTML format (Hypertext Markup Language). */
    HTMLFormat,
    /** Specifies Text in Windows Unicode format (an end of a paragraph is marked with the control characters 13 and 10). */
    PlainText,
    /** Specifies RTF format (Rich Text Format). */
    RichTextFormat,
    /** Specifies XML format (Extensible Markup Language). */
    XMLFormat,
}
