import {
    RequestBooleanCallback,
    RequestStringCallback,
    RequestFrameStyleCallback,
    RequestNumberCallback,
    RequestDistancesCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { FrameStyle } from '../enums';
import { Distances } from './Distances';
import { FormattedText } from './FormattedText';
import { FrameBase } from './FrameBase';

/** The TextFrame object represents a rectangle that can be filled with text by an end-user and can be edited like the main text. */
export interface TextFrame extends FrameBase, FormattedText {
    /** Activates the text frame. */
    activate(callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the background color of the text frame. */
    getBackColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the border color of the text frame. */
    getBorderColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the style of a text frame's border line. */
    getBorderStyle(callback: RequestFrameStyleCallback, errorCallback?: ErrorCallback): void;
    /** Gets the width, in twips, of a text frame's border line. */
    getBorderWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Sets the distances, in twips, between the text frame's border line and the text. */
    getInternalMargins(callback: RequestDistancesCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text frame's transparency. */
    getTransparency(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Sets the background color for the text frame. */
    setBackColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the border color for the text frame. */
    setBorderColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the style of a text frame's border line. */
    setBorderStyle(value: FrameStyle, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the width, in twips, of a text frame's border line. */
    setBorderWidth(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the distances, in twips, between the text frame's border line and the text. */
    setInternalMargins(value: Distances, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the text frame's transparency. */
    setTransparency(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
