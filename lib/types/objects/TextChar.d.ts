import { RequestRectangleCallback, RequestStringCallback, RequestNumberCallback } from '../callbacks';

/** The TextChar object represents a single character in a document. */
export interface TextChar {
    /** Gets the bounding rectangle of the character. */
    getBounds(callback: RequestRectangleCallback, errorCallback?: ErrorCallback): void;
    /** Gets the value of the character. */
    getChar(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the character's number. */
    getNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
}
