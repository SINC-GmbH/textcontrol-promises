declare namespace TXTextControl {
    /** Represents the page's size of a TX Text Control document or document section. The measure depends on the page's unit. */
    interface PageSize {
        /** Gets the page height of a document or document section. */
        getHeight(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the page width of a document or document section. */
        getWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Sets the page height of a document or document section. */
        setHeight(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the page width of a document or document section. */
        setWidth(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}