import { RequestNumberCallback, RequestDocumentTargetCallback, EmptyRequestCallback } from "../callbacks";
import { DocumentTarget } from "./DocumentTarget";
import { TextField } from "./TextField";

/** The DocumentLink object represents a text position in a Text Control document that is a target of a document link. */
export interface DocumentLink extends TextField {
    /**
     * Gets the type of auto-generation.
     * A document link in a table of contents is automatically generated when the table of contents is inserted into the document.
     */
    getAutoGenerationType(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets an object of the type DocumentTarget specifying to where the link points. */
    getDocumentTarget(callback: RequestDocumentTargetCallback, errorCallback?: ErrorCallback): void;
    /** Sets an object of the type DocumentTarget specifying to where the link points. */
    setDocumentTarget(documentTarget: DocumentTarget, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
