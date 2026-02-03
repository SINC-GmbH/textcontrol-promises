import { RequestPageCallback } from '../callbacks';
import { Collection } from './Collection';
import { Page } from './Page';

/** Contains all pages in a Text Control document or part of the document. */
export interface PageCollection extends Collection<Page> {
    /** Gets the Page containing the current text input position from the collection. */
    getItem(callback: RequestPageCallback, errorCallback?: ErrorCallback): void;
    /** Gets the page at a certain text input position. */
    getItemAtTextPosition(textPosition: number, callback: RequestPageCallback, errorCallback?: ErrorCallback): void;
}
