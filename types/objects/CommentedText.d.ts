declare namespace TXTextControl {
    /**  
     * A CommentedText object represents a commented piece of text. 
     * A comment can be inserted through the context menu or programmatically. 
     */
    interface CommentedText {
        /** Gets whether the comment is currently active or not. */
        getActive(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Retrieves the comment text. */
        getComment(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the date and time when the comment has been inserted as a Unix timestamp in milliseconds. */
        getCreationTime(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the highlight color for the comment as a CSS color string. */
        getHighlightColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value indicating whether the comment is highlighted. */
        getHighlightMode(callback: RequestHighlightModeCallback, errorCallback?: ErrorCallback): void;
        /** Gets an identifier for a comment. */
        getID(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the number of characters which belong to the comment. */
        getLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the comment's number. */
        getNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the comment for which this comment is a reply. */
        getRepliedComment(callback: RequestCommentCallback, errorCallback?: ErrorCallback): void;
        /** Gets all replies of this comment or null if there are no replies. */
        getReplies(callback: RequestCommentsCallback, errorCallback?: ErrorCallback): void;
        /** Gets the index (one-based) of the first character which belongs to the comment. */
        getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the comment's text. */
        getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the name of the user who has commented the document. */
        getUserName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Sets the current input position to the beginning of a comment and scrolls it into the visible part of the document. */
        scrollTo(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets whether the comment is currently active or not. */
        setActive(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the comment text. */
        setComment(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the highlight color for the comment. */
        setHighlightColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value indicating whether the comment is highlighted. */
        setHighlightMode(value: HighlightMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets an identifier for the comment. */
        setID(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}