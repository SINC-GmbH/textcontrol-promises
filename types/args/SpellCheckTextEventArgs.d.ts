declare namespace TXTextControl {
    /** The event argument for a spell check related event. */
    interface SpellCheckTextEventArgs {
        /** The text to check. */
        text: string;
        /** An array of misspelled words. */
        misspelledWords: MisspelledWordInfo[];
    }
}

