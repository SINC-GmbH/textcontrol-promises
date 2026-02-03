import { HighlightMode } from "../enums";

/** Information about a comment. */
export interface CommentedTextInfo {
    /** Comment activation state. */
    active: boolean;
    /** The comment text. */
    comment: string;
    /** Creation time as a Unix time stamp in milliseconds. */
    creationTime: number;
    /** Highlight color as a CSS color string. */
    highlightColor: string;
    /** The comment's highlight mode. */
    highlightMode: HighlightMode;
    /** The comment's identifier. */
    id: number;
    /** The comment's length in characters. */
    length: number;
    /** The number of the comment in the document's text flow. */
    number: number;
    /** The comment's 1-based start position in the document. */
    start: number;
    /** The name of the user who made the comment. */
    userName: string;
}
