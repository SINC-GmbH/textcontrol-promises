declare namespace TXTextControl {
    /** Contains all frames of a Text Control document or part of the document. */
    interface FrameCollection extends FrameBaseCollection<FrameBase> {
        /** Gets the frame selected by the user or the frame with the specified identifier. */
        getItem(callback: RequestFrameBaseCallback, errorCallback?: ErrorCallback, id?: number): void;
        /** Gets the frame with the specified name. */
        getItemByName(callback: RequestFrameBaseCallback, errorCallback: ErrorCallback | null, name: string): void;
        /** Removes a frame from a Text Control document. */
        remove(frame: FrameBase, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}