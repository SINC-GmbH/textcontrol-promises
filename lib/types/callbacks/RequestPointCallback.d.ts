import { Point } from "../objects";

/** Callback function for requests expecting a Point object. */
export type RequestPointCallback = (position: Point) => void;
