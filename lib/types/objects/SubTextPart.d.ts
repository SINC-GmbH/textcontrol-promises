import {
    RequestSubTextPartsCallback,
    RequestStringCallback,
    RequestHighlightModeCallback,
    RequestNumberCallback,
    RequestSubTextPartCallback,
    RequestTextFieldInfoArrayCallback,
    SaveDocumentCallback,
    RequestBooleanCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { TextFieldType, StreamType, HighlightMode } from '../enums';
import { SaveSettings } from './SaveSettings';

/**
 * A SubTextPart object represents a user-defined part of a document.
 * A document consists of the main text, and additionally other pieces of text such as text frames and headers or footers, called textparts.
 * A programmer can define further parts called subtextparts to perform operations on smaller pieces of text.
 * Each of the main textparts has a SubTextPartCollection which can be used to add and remove subtextparts or to save the subtextpart's text
 */
export interface SubTextPart {
    /** Returns an array of the children of this SubTextPart. */
    getChildren(callback: RequestSubTextPartsCallback, errorCallback?: ErrorCallback): void;
    /** Gets additional data of the subtextpart. */
    getData(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the highlight color for the subtextpart. */
    getHighlightColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating when the subtextpart is highlighted. */
    getHighlightMode(callback: RequestHighlightModeCallback, errorCallback?: ErrorCallback): void;
    /** Gets an identifier for a subtextpart. */
    getID(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number of characters in a subtextpart. */
    getLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Relates a user-defined name to a subtextpart. */
    getName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the subtextpart's nested level. */
    getNestedLevel(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the subtextpart's number. */
    getNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets a subtextpart's outermost subtextpart. */
    getOuterMostSubTextPart(callback: RequestSubTextPartCallback, errorCallback?: ErrorCallback): void;
    /** Gets a subtextpart's outer subtextpart. */
    getOuterSubTextPart(callback: RequestSubTextPartCallback, errorCallback?: ErrorCallback): void;
    /** Gets the first character position (one-based) of a subtextpart. */
    getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the subtextpart's text. */
    getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Returns an array of static text field information objects. */
    getTextFields(fieldType: TextFieldType, callback: RequestTextFieldInfoArrayCallback, errorCallback: ErrorCallback): void;
    /** Saves the subtextpart in a certain format and sends the result back asynchronously by calling a given callback function. */
    save(streamType: StreamType, callback: SaveDocumentCallback, saveSettings?: SaveSettings, errorCallback?: ErrorCallback): void;
    /** Sets the current input position to the beginning of a subtextpart and scrolls it into the visible part of the document. */
    scrollTo(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Sets additional data of the subtextpart. */
    setData(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the highlight color for the subtextpart. */
    setHighlightColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating when the subtextpart is highlighted. */
    setHighlightMode(value: HighlightMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets an identifier for the subtextpart. */
    setID(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the name of a subtextpart. */
    setName(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
