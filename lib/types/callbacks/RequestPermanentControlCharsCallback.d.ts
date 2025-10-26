import { PermanentControlChar } from "../enums";

/** Callback function for requests expecting a PermanentControlChar value. */
export type RequestPermanentControlCharsCallback = (controlChars: PermanentControlChar) => void;
