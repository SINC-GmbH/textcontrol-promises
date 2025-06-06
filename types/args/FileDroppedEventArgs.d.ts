declare namespace TXTextControl {
    /** The event argument object for the fileDropped event. */
    interface FileDroppedEventArgs {
        /** Set this property to true to cancel the event. */
        fileName: string;
        /** The file name of the dropped file. */
        fileType: string;
        /** The size of the file in bytes. */
        fileSize: number;
        /** The MIME type of the file. */
        cancel: boolean;
    }
}