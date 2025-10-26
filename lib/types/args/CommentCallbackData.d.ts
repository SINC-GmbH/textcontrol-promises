import { AddResult } from "../enums";
import { CommentedText } from "../objects";

/** The type of the response parameter of the AddCommentCallback callback function. */
export interface CommentCallbackData {
    /** The added comment. */
    comment: CommentedText;
    /** Indicates whether the comment was added successfully. */
    addResult: AddResult;
}
