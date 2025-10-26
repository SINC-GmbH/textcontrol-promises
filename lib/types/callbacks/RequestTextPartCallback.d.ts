import { FormattedText } from "../objects";

/** Callback function for requests expecting a FormattedText object. */
export type RequestTextPartCallback = (textPart: FormattedText) => void;
