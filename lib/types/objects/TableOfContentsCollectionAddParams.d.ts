/** The method parameters for the TableOfContentsCollection.add() method. */
export interface TableOfContentsCollectionAddParams {
    /** The title for the table of contents. */
    title?: string;
    /** Specifies whether each entry in the table of contents is a DocumentLink with a corresponding DocumentTarget. */
    hasLinks?: boolean;
    /** Specifies whether the table of contents contains page numbers. */
    hasPageNumbers?: boolean;
    /** Specifies whether the page numbers in the table of contents are right-aligned. */
    hasRightAlignedPageNumbers?: boolean;
    /** The minimum structure level for this table of contents. */
    minimumStructureLevel?: number;
    /** The maximum structure level for this table of contents. */
    maximumStructureLevel?: number;
}
