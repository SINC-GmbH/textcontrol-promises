import { TextPart } from "../objects";

/** Callback function for requesting an array of text part objects. */
export type RequestTextPartsCallback = (result: TextPart[]) => void;
