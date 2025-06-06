declare namespace TXTextControl {
    /** The DocumentTarget object represents a text position in a Text Control document that is a target of a document link. */
    interface DocumentTarget {
        /** Gets the type of auto-generation. */
        getAutoGenerationType(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets whether a document target can be deleted by the end-user while a TX Text Control document is being edited. */
        getDeleteable(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets an identifier for a document target. */
        getID(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Relates a user-defined name to a document target. */
        getName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the one-based number of the document target in the document. */
        getNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the first character position (one-based) of a document target. */
        getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the name of the document target. */
        getTargetName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Sets the current input position to the beginning of the document target and scrolls it into the visible part of the document. */
        scrollTo(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets whether a document target can be deleted by the end-user while a TX Text Control document is being edited. */
        setDeleteable(deleteable: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets an identifier for the document target. */
        setID(id: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the name of a document target. */
        setName(name: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the name of the document target. */
        setTargetName(targetName: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}