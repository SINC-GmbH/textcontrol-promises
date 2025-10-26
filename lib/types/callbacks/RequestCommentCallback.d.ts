import { CommentedText } from "../objects";

/** Callback function for requests retrieving a CommentedText object from a comment collection. */
export type RequestCommentCallback = (comment: CommentedText) => void;
