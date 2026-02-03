import {
    RequestBooleanCallback,
    RequestStringCallback,
    RequestHighlightModeCallback,
    RequestNumberCallback,
    SaveDocumentCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { StreamType, HighlightMode } from '../enums';
import { SaveSettings } from './SaveSettings';

/**
 * A TableOfContents object defines the position and the properties of a table of contents.
 * A table of contents can be automatically genarated from the structure levels defined for each paragraph in the document.
 * A document can contain multiple tables of contents consisting of paragraphs with different levels.
 * To generate a new table of contents the TableOfContentsCollection.add method can be used.
 */
export interface TableOfContents {
    /** Gets value specifying whether each entry in the table of contents is a DocumentLink with a corresponding DocumentTarget. */
    getHasLinks(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value specifying whether the table of contents contains page numbers. */
    getHasPageNumbers(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value specifying whether the page numbers in the table of contents are right-aligned. */
    getHasRightAlignedPageNumbers(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the highlight color for the table of contents. */
    getHighlightColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether the table of contents is highlighted. */
    getHighlightMode(callback: RequestHighlightModeCallback, errorCallback?: ErrorCallback): void;
    /** Gets an identifier for a table of contents. */
    getID(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number of characters which belong to the table of contents. */
    getLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the maximum structure level for this table of contents. */
    getMaximumStructureLevel(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the minimum structure level for this table of contents. */
    getMinimumStructureLevel(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets a name for the table of contents. */
    getName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number of the table of contents in the text. */
    getNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the index (one-based) of the first character which belongs to the table of contents. */
    getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text of the table of contents. */
    getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets a title for the table of contents. */
    getTitle(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Saves the TableOfContents in a certain format and sends the result back asynchronously by calling a given callback function. */
    save(streamType: StreamType, callback: SaveDocumentCallback, saveSettings?: SaveSettings, errorCallback?: ErrorCallback): void;
    /** Sets the current input position to the beginning of a table of contents and scrolls it into the visible part of the document. */
    scrollTo(callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value specifying whether each entry in the table of contents is a DocumentLink with a corresponding DocumentTarget. */
    setHasLinks(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value specifying whether the table of contents contains page numbers. */
    setHasPageNumbers(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value specifying whether the page numbers in the table of contents are right-aligned. */
    setHasRightAlignedPageNumbers(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the highlight color for the table of contents. */
    setHighlightColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether the table of contents is highlighted. */
    setHighlightMode(value: HighlightMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets an identifier for the table of contents. */
    setID(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the maximum structure level for this table of contents. */
    setMaximumStructureLevel(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the minimum structure level for this table of contents. */
    setMinimumStructureLevel(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a name for the table of contents. */
    setName(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a title for the table of contents. */
    setTitle(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Updates the content and the page numbers of the table of contents. */
    update(callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}
