import { Direction } from "../enums";

/** Callback function for requests expecting a writing direction value. */
export type RequestDirectionCallback = (direction: Direction) => void;
