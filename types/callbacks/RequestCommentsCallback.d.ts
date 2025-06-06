declare namespace TXTextControl {
    /** Callback function for requests retrieving an array of CommentedText objects. */
    type RequestCommentsCallback = (comments: CommentedText[]) => void;
}