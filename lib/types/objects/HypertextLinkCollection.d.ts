import { RequestHypertextLinkCallback, RequestBooleanCallback } from '../callbacks';
import { Collection } from './Collection';
import { HypertextLink } from './HypertextLink';

/** The HypertextLinkCollection object contains all hypertext links in a Text Control document. */
export interface HypertextLinkCollection extends Collection<HypertextLink> {
    /** Inserts a new hypertext link at the current input position. */
    add(text: string, target: string, callback?: RequestHypertextLinkCallback, errorCallback?: ErrorCallback): void;
    /** Gets the hypertext link with the specified id. */
    getItem(callback: RequestHypertextLinkCallback, errorCallback?: ErrorCallback, id?: number): void;
    /** Removes a hypertext link from a Text Control document. */
    remove(HypertextLink: HypertextLink, keepText: boolean, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}
