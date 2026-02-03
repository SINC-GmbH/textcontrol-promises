import { RequestBooleanCallback, RequestTextCharCallback } from '../callbacks';
import { ControlChars } from '../enums';
import { Collection } from './Collection';
import { Point } from './Point';
import { TextChar } from './TextChar';

/** Contains all characters in a Text Control document or part of the document. */
export interface TextCharCollection extends Collection<TextChar> {
    /** Inserts a character at the specified position using the specified font. */
    add(character: string, fontName: string, textPosition: number, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Inserts a control character at the specified text input position. */
    addControlChar(controlChar: ControlChars, textPosition: number, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /**
     * Gets a particular character from the collection specified through a certain geometrical position.
     * @param location Specifies the character's location. The point must be specified in pixels with an origin at the top left corner of the control.
     * @param getNearest Specifies whether the nearest character is returned.
     * If this parameter is set to true, the nearest character is returned.
     * Otherwise, if set to false, a character is only returned, if the specified location is inside the bounding rectangle of an existing character.
     * @param callback Receives the textchar at the certain geometrical position.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    getItem(location: Point, getNearest: boolean, callback: RequestTextCharCallback, errorCallback?: ErrorCallback): void;
    /**
     * Removes the character by number.
     * @param number Specifies which character to remove by the textchar's number. The first character has the number 1.
     * @param callback Optional. Receives whether the textchar is succesfully removed.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    remove(number: number, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}
