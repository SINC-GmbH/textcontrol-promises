import { MisspelledWordInfo } from "../objects";

/** The event argument for a spell check related event. */
export interface SpellCheckTextEventArgs {
    /** The text to check. */
    text: string;
    /** An array of misspelled words. */
    misspelledWords: MisspelledWordInfo[];
}
