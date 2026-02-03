import { RequestLineCallback } from '../callbacks';
import { Collection } from './Collection';
import { Line } from './Line';

/** The LineCollection object contains all text lines in a Text Control document or part of the document. */
export interface LineCollection extends Collection<Line> {
    /** Gets a particular line from the collection. */
    getItemAtLocation(x: number, y: number, callback: RequestLineCallback, errorCallback?: ErrorCallback): void;
    /** Gets the line at a certain geometrical position. */
    getItem(callback: RequestLineCallback, textPosition: number, errorCallback?: ErrorCallback): void;
}
