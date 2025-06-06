declare namespace TXTextControl {
    /** 
     * Contains all comments in the main text or another part of a document. 
     * All comments are associated with a certain piece of text of the document.
     */
    interface CommentCollection extends Collection<CommentedText> {
        /** Creates a comment with the specified comment string. */
        add(comment: string, callback?: AddCommentCallback, errorCallback?: ErrorCallback): void;
        /** Creates a comment with the specified comment string, start position and length. */
        addAtPosition(comment: string, start: number, length: number, callback?: AddCommentCallback, errorCallback?: ErrorCallback): void;
        /** Creates a reply to an existing comment using the specified comment string. */
        addReply(comment: string, repliedComment: CommentedText, callback?: AddCommentCallback, errorCallback?: ErrorCallback): void;
        /** Gets the Comment containing the current text input position from the collection. */
        getItem(callback: RequestCommentCallback, errorCallback?: ErrorCallback): void;
        /** Gets the next comment in the text flow. */
        getNextItem(callback: RequestCommentCallback, errorCallback?: ErrorCallback): void;
        /** Gets the previous comment in the text flow. */
        getPreviousItem(callback: RequestCommentCallback, errorCallback?: ErrorCallback): void;
        /** Removes a comment from the collection. */
        remove(comment: CommentedText, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;

    }
}