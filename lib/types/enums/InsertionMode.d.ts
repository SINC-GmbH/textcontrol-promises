/** Determines how text is inserted at the current input position when text is typed or inserted. */
export enum InsertionMode {
    /** Text is inserted at the current input position, and existing text is moved to the right. */
    Insert,
    /** Text at the current input position is overwritten by the newly inserted text. */
    Overwrite
}
