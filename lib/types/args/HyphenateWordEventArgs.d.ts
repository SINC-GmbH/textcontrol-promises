/** The event argument for a word-hyphenation related event. */
export interface HyphenateWordEventArgs {
    /** The word to hyphenate. */
    word: string;
    /** The maximum dividing position. */
    maxDividePos: number;
    /** The position at which the word should be divided. */
    dividePos: number;
}
