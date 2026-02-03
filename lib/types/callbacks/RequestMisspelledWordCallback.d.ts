import { MisspelledWord } from "../objects";

/** Callback function for requesting a misspelled word. */
export type RequestMisspelledWordCallback = (result: MisspelledWord) => void;
