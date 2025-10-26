/** Contains the start position and the length of a selection. */
export interface SelectionBounds {
    /** The length of the selection in characters. */
    start: number;
    /** The 0-based start character position of the selection. */
    length: number;
}
