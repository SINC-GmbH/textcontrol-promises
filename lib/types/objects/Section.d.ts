import { RequestNumberCallback, EmptyRequestCallback } from '../callbacks';
import { HeaderFooterCollection } from './HeaderFooterCollection';
import { SectionFormat } from './SectionFormat';

/**
 * Represents a section of a document. Sections are numbered from the beginning to the end of the document beginning with 1.
 * A document has at least one section. A section is a part of the document that specifies the page size, the page margins and the headers and footers.
 */
export interface Section {
    /** Gets the number of characters in the section. */
    getLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the section's number. */
    getNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number (one-based) of the first character in the section. */
    getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Selects the section. */
    select(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;

    /** The section's formatting attributes. */
    format: SectionFormat;
    /** The section's headers and footers. */
    headersAndFooters: HeaderFooterCollection;
}
