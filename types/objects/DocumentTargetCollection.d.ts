declare namespace TXTextControl {
    /** The DocumentTargetCollection contains a collection of targets. */
    interface DocumentTargetCollection extends Collection<DocumentTarget> {
        /** Adds a new document target to the collection. */
        add(targetName: string, callback?: RequestDocumentTargetCallback, errorCallback?: ErrorCallback): void;
        /** Removes all document targets from the collection. */
        clear(callback?: RequestDocumentTargetCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value indicating whether a new document target can be inserted at the current input position. */
        getCanAdd(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the document target at the current text input position or the document target with the specified id. */
        getItem(callback: RequestDocumentTargetCallback, errorCallback?: ErrorCallback, nameOrId?: number): void;
        /** Removes the target from the collection. */
        remove(documentTarget: DocumentTarget, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}