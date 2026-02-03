/** Information about a misspelled word. */
export interface MisspelledWordInfo {
    /** A value which marks the misspelled word as duplicate. */
    isDuplicate: boolean;
    /** A value which marks the misspelled word as ignored. */
    isIgnored: boolean;
    /** The length of the misspelled word. */
    length: number;
    /** The number of the misspelled word. */
    number: number;
    /** The starting position of the misspelled word. */
    start: number;
    /** The text of the misspelled word. */
    text: string;
}
