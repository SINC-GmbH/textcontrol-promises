import { CommentedTextInfo } from "../objects";

/** Event argument for comment related events. */
export interface CommentEventArgs {
    /** Information about the comment. */
    commentedText: CommentedTextInfo;
}
