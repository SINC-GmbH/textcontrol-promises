/** Determines the location in the document where a context menu will be shown. */
export enum ContextMenuLocation {
    /** The menu context is a text selection. */
    TextSelection,
    /** The menu context is the text input position. */
    TextInputPosition,
    /** The menu context is the top page margin which contains a header. */
    Header,
    /** The menu context is the top page margin which contains no header. */
    NoHeader,
    /** The menu context is the bottom page margin which contains a footer. */
    Footer,
    /** The menu context is the bottom page margin which contains no footer. */
    NoFooter,
    /** The menu context is the top or the bottom page margin. */
    PageMargin,
    /** The menu context is a page number field. */
    PageNumberField,
    /** The menu context is a selected frame (text frame, image, chart or barcode). */
    SelectedFrame,
    /** The menu context is a text selection or a text input position in a table. */
    Table,
    /** The menu context is a text selection or a text input position in a text field. */
    TextField,
    /** The menu context is a text selection or a text input position in a misspelled word. */
    MisspelledWord,
    /** The menu context is a text selection or a text input position in a table of contents. */
    TableOfContents,
    /** The menu context is a text selection or a text input position in a tracked change. */
    TrackedChange,
    /** The menu context is a text selection or a text input position in a comment. */
    Comment,
}
