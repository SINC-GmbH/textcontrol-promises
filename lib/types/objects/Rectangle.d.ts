import { Point } from './Point';
import { Size } from './Size';

/** Stores a Point and a Size object that represent the location and size of a rectangle. */
export interface Rectangle {
    /** The location of the rectangle. */
    location: Point;
    /** The size of the rectangle. */
    size: Size;
}
