import { RequestStringCallback, RequestHighlightModeCallback, RequestNumberCallback, SaveDocumentCallback, EmptyRequestCallback } from '../callbacks';
import { StreamType, HighlightMode } from '../enums';
import { SaveSettings } from './SaveSettings';

/** An EditableRegion object represents an editable region in a document. */
export interface EditableRegion {
    /** Gets the highlight color for the editable region. */
    getHighlightColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether the editable region is highlighted. */
    getHighlightMode(callback: RequestHighlightModeCallback, errorCallback?: ErrorCallback): void;
    /** Gets an identifier for a editable region. */
    getID(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number of characters which belong to the editable region. */
    getLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the index (one-based) of the first character which belongs to the editable region. */
    getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the editable region's text. */
    getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the name of the user who can edit the region. */
    getUserName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Saves this editable region in a certain format and sends the result back asynchronously by calling a given callback function. */
    save(streamType: StreamType, callback: SaveDocumentCallback, saveSettings?: SaveSettings, errorCallback?: ErrorCallback): void;
    /** Sets the current input position to the beginning of an editable region and scrolls it into the visible part of the document. */
    scrollTo(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the highlight color for the editable region. */
    setHighlightColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether the editable region is highlighted. */
    setHighlightMode(value: HighlightMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets an identifier for the editable region. */
    setID(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the name of the user who can edit the region. */
    setUserName(username: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
