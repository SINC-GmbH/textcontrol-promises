declare namespace TXTextControl {
    /** The callback function argument for the saveDocument and the saveSelection functions. */
    interface SaveDocumentResult {
        /** The Document data. */
        data: string;
        /** Specifies one of the StreamType values. */
        streamType: StreamType;
        /** Specifies the number of bytes written during a save operation. */
        bytesWritten: number;
    }
}