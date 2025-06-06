declare namespace TXTextControl {
    /** The event argument object for the clipboardDataTransferProgress event. */
    interface ClipboardTransferProgressEventArgs {
        /** The unique transfer ID string. */
        id: string;
        /** The progress of the clipboard data transfer in percent. */
        progress: number;
    }
}