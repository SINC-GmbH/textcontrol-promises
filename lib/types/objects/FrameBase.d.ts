import {
    RequestBooleanCallback,
    RequestHorizontalAlignmentCallback,
    RequestRectangleCallback,
    RequestNumberCallback,
    RequestFrameInsertionModeCallback,
    RequestPointCallback,
    RequestStringCallback,
    RequestSizeCallback,
    RequestDistancesCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { ZOrder, HorizontalAlignment, FrameInsertionMode } from '../enums';
import { Distances } from './Distances';
import { Point } from './Point';
import { Size } from './Size';

/**
 * It implements general frame features like the position in the text, the insertion mode
 * or the distances between the text and the frame.
 */
export interface FrameBase {
    /** Changes the frame's z-order. */
    changeZOrder(zOrder: ZOrder, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the frame's horizontal alignment when it is anchored to a paragraph. */
    getAlignment(callback: RequestHorizontalAlignmentCallback, errorCallback?: ErrorCallback): void;
    /** Gets the frame's bounding rectangle relative to the upper left corner of the document. */
    getBounds(callback: RequestRectangleCallback, errorCallback?: ErrorCallback): void;
    /** Gets an identifier for the frame. */
    getID(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value determining whether the frame is treated as a single character or the document's text either flows around or overwrites the frame. */
    getInsertionMode(callback: RequestFrameInsertionModeCallback, errorCallback?: ErrorCallback): void;
    /** Gets, in twips, the frame's current location. */
    getLocation(callback: RequestPointCallback, errorCallback?: ErrorCallback): void;
    /** Gets whether a frame can be moved in the document at run time with the built-in mouse interface. */
    getMoveable(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the name for the frame. */
    getName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the frame's size in twips. */
    getSize(callback: RequestSizeCallback, errorCallback?: ErrorCallback): void;
    /** Gets whether the frame can be resized at run time with the built-in mouse interface. */
    getSizeable(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the distances, in twips, between the frame and the document's text. */
    getTextDistances(callback: RequestDistancesCallback, errorCallback?: ErrorCallback): void;
    /** Gets the frame's character position in the document's text (one-based). */
    getTextPosition(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Sets the frame's horizontal alignment when it is anchored to a paragraph. */
    setAlignment(value: HorizontalAlignment, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets an identifier for the frame. */
    setID(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value determining whether the frame is treated as a single character or the document's text either flows around or overwrites the frame. */
    setInsertionMode(value: FrameInsertionMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets, in twips, the frame's current location. */
    setLocation(value: Point, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets whether a frame can be moved in the document at run time with the built-in mouse interface. */
    setMoveable(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a name for the frame. */
    setName(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the frame's size in twips. */
    setSize(value: Size, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets whether the frame can be resized at run time with the built-in mouse interface. */
    setSizeable(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the distances, in twips, between the frame and the document's text. */
    setTextDistances(value: Distances, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Gets the frame's descriptive text. An empty string indicates that the link has no such text. */
    getDescriptiveText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Sets the frame's descriptive text. An empty string or null can be used to delete a previously set text. */
    setDescriptiveText(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
