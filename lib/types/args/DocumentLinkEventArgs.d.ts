import { DocumentTargetInfo } from "../objects";

/** The event argument object for document nink related events. */
export interface DocumentLinkEventArgs {
    /** Information about the document target the link points to. */
    target: DocumentTargetInfo;
}
