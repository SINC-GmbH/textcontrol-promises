declare namespace TXTextControl {
    /** Callback function for the forEach function of a collection. */
    type ForEachCallback<T> = (item: T, index: number, itemCount: number) => void;
}