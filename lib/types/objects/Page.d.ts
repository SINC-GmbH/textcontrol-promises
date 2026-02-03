import {
    RequestRectangleCallback,
    RequestHeaderFooterCallback,
    RequestStringCallback,
    RequestNumberCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { ImageFormat, PageContent } from '../enums';

/**
 * A Page object represents a formatted page of a document. Pages are numbered from the beginning to the end of the document beginning with 1.
 * A document has at least one page. Each section of a document can have one or more pages depending on the text that is contained in the section.
 * A section does not have to begin at the top of a page. Therefore more than one section can be on one page.
 * This collection is only available, if the ViewMode has been set to PageView.
 */
export interface Page {
    /** Gets the bounding rectangle of the page, in twips, relative to the top of the document. */
    getBounds(callback: RequestRectangleCallback, errorCallback?: ErrorCallback): void;
    /** Gets the footer of the page. */
    getFooter(callback: RequestHeaderFooterCallback, errorCallback?: ErrorCallback): void;
    /** Gets the header of the page. */
    getHeader(callback: RequestHeaderFooterCallback, errorCallback?: ErrorCallback): void;
    /**
     * Gets an image of the page's contents as in the specified format in screen resolution.
     * @param imageFormat Specifies the format used to save the image.
     * @param zoomFactor Specifies a zooming factor in percent. It can be a value between 10 and 400 percent.
     * @param contents Specifies the image's contents.
     * @param callback Receives an image of the page's contents.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    getImage(
        imageFormat: ImageFormat,
        zoomFactor: number,
        contents: PageContent,
        callback: RequestStringCallback,
        errorCallback?: ErrorCallback
    ): void;
    /** Gets the number of characters of the page, including the page break character at the end of the page. */
    getLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the page's number. */
    getNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the page number relative to the beginning of the section the page belongs to. */
    getNumberInSection(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number, one-based, of the section the page belongs to. */
    getSection(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number (one-based) of the page's first character. */
    getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the bounding rectangle of the page's text, in twips, relative to the top of the document. */
    getTextBounds(callback: RequestRectangleCallback, errorCallback?: ErrorCallback): void;
    /** Selects the text of the page. */
    select(callback: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
