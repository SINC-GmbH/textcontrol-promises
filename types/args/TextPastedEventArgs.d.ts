declare namespace TXTextControl {
    /** The event argument object for the textPasted event. */
    interface TextPastedEventArgs {
        /** Set this property to true to cancel the event. */
        cancel: boolean;
        /** The pasted text. */
        text: string;
        /** The MIME type of the text. */
        textType: string;
    }
}