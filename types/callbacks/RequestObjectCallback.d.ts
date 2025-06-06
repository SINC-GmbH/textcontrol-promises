declare namespace TXTextControl {
    /** Callback function for requests expecting arbitrary objects. */
    type RequestObjectCallback<T> = (obj: T) => void;
}