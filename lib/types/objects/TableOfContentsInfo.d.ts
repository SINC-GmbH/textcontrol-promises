/** Information about a table of contents. */
export interface TableOfContentsInfo {
    /** Specifies whether each entry in the table of contents is a DocumentLink with a corresponding DocumentTarget. */
    hasLinks: boolean;
    /** Specifies whether the table of contents contains page numbers. */
    hasPageNumbers: boolean;
    /** Specifies whether the page numbers in the table of contents are right-aligned. */
    hasRightAlignedPageNumbers: boolean;
    /** The highlight color for the table of contents. */
    highlightColor: string;
    /** Indicates how the text of the table of contents is highlighted. */
    highlightMode: string;
    /** The table of contents' identifier. */
    id: Number;
    /** The number of characters which belong to the table of contents. */
    length: number;
    /** The maximum structure level for this table of contents. */
    maximumStructureLevel: number;
    /** The minimum structure level for this table of contents. */
    minimumStructureLevel: number;
    /** The table of contents' name. */
    name: string;
    /** The table of contents' one-based number in the document. */
    number: number;
    /** The one-based index of the first character which belongs to the table of contents. */
    start: number;
}
