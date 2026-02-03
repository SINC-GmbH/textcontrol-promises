import { TextFrame } from "../objects";

/** Callback function for requests creating and adding a new TextFrame object to a text frame collection. */
export type RequestTextFrameCallback = (textFrame: TextFrame) => void;
