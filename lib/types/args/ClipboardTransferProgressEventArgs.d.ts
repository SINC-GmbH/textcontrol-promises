/** The event argument object for the clipboardDataTransferProgress event. */
export interface ClipboardTransferProgressEventArgs {
    /** The unique transfer ID string. */
    id: string;
    /** The progress of the clipboard data transfer in percent. */
    progress: number;
}
