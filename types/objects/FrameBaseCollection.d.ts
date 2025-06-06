declare namespace TXTextControl {
    /** Base of all collections containing frame objects. */
    interface FrameBaseCollection<T extends FrameBase> extends Collection<T> {
        /** Removes all objects from the collection and from the document. */
        clear(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}