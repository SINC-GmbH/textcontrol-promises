import {
    RequestBooleanCallback,
    RequestChangeKindCallback,
    RequestNumberCallback,
    RequestStringCallback,
    RequestHighlightModeCallback,
    SaveDocumentCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { StreamType, HighlightMode } from '../enums';
import { SaveSettings } from './SaveSettings';

/** A TrackedChange object represents a change made to the document after anyone has revised the document. */
export interface TrackedChange {
    /** Gets a value specifying whether the TrackedChange is currently active or not. */
    getActive(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the kind of change. */
    getChangeKind(callback: RequestChangeKindCallback, errorCallback?: ErrorCallback): void;
    /** Gets the date and time when the change has been made. */
    getChangeTime(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the highlight color for the tracked change. */
    getHighlightColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether the tracked change is highlighted. */
    getHighlightMode(callback: RequestHighlightModeCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number of changed characters. */
    getLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the change's number. */
    getNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the index (one-based) of the first changed character. */
    getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the changed text. */
    getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the name of the user who has done the change. */
    getUserName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Saves the tracked change in a certain format and sends the result back asynchronously by calling a given callback function. */
    save(streamType: StreamType, callback: SaveDocumentCallback, saveSettings?: SaveSettings, errorCallback?: ErrorCallback): void;
    /** Sets a value specifying whether the TrackedChange is currently active or not. */
    setActive(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the highlight color for the tracked change. */
    setHighlightColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether the tracked change is highlighted. */
    setHighlightMode(value: HighlightMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
