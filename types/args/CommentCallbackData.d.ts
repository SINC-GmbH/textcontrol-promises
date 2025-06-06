declare namespace TXTextControl {
    /** The type of the response parameter of the AddCommentCallback callback function. */
    interface CommentCallbackData {
        /** The added comment. */
        comment: CommentedText;
        /** Indicates whether the comment was added successfully. */
        addResult: AddResult;
    }
}