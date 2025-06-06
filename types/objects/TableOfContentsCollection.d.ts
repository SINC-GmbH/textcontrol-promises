declare namespace TXTextControl {
    /** Contains all tables of contents in a certain part of the document. */
    interface TableOfContentsCollection extends Collection<TableOfContents> {
        /** Adds a new table of contents to the document at the current text input position. */
        add(parameters?: TableOfContentsCollectionAddParams, callback?: RequestTableOfContentsCallback, errorCallback?: ErrorCallback): void;
        /** Gets the table of contents at the current input position or the table of contents with the specified identifier. */
        getItem(callback: RequestTableOfContentsCallback, errorCallback?: ErrorCallback, id?: number): void;
        /** Gets the table of contents with the specified name. */
        getItemByName(callback: RequestTableOfContentsCallback, errorCallback: ErrorCallback | null, name: string): void;
        /** Removes a table of contents from the collection including all its text and including all DocumentTargets to where the table's links point. */
        remove(element: TableOfContents, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}