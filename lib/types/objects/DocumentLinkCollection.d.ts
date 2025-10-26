import { RequestBooleanCallback, EmptyRequestCallback, RequestDocumentLinkCallback } from "../callbacks";
import { Collection } from "./Collection";
import { DocumentLink } from "./DocumentLink";

/** The DocumentLinkCollection contains a collection of document links. */
export interface DocumentLinkCollection extends Collection<DocumentLink> {
    /** Gets a value indicating whether a new text field can be inserted at the current input position. */
    getCanAdd(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Removes all document links from the collection. */
    clear(keepText: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Gets the document link at the current text input position or the document link with the specified id. */
    getItem(callback: RequestDocumentLinkCallback, errorCallback?: ErrorCallback, id?: number): void;
    /**  */
    /**
     * Removes the link from the collection.
     * @param documentLink Specifies the link to remove.
     * @param callback Optional. Receives whether the remove was succesful.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    remove(documentLink: DocumentLink, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}
