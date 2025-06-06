declare namespace TXTextControl {
    /** Represents the page margins of a document or document section. The measure depends on the page's unit. */
    interface PageMargins {
        /** Gets the bottom margin of a TX Text Control document or document section. */
        getBottom(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the left margin of a TX Text Control document or document section. */
        getLeft(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the right margin of a TX Text Control document or document section. */
        getRight(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the top margin of a TX Text Control document or document section. */
        getTop(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Sets the bottom margin of a TX Text Control document or document section. */
        setBottom(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the left margin of a TX Text Control document or document section. */
        setLeft(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the right margin of a TX Text Control document or document section. */
        setRight(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the top margin of a TX Text Control document or document section. */
        setTop(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}