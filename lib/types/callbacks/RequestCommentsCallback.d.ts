import { CommentedText } from "../objects";

/** Callback function for requests retrieving an array of CommentedText objects. */
export type RequestCommentsCallback = (comments: CommentedText[]) => void;
