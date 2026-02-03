/** Specifies the result when a subtextpart has been added to the document. */
export enum AddResult {
    /** An unexpected error has occurred. */
    Error,
    /** The subtextpart has successfully been inserted. */
    Successful,
    /** The subtextpart wasn't inserted because there is no selection. */
    NoSelection,
    /** The subtextpart wasn't inserted because the selection is too complex. It is not a continuous sequence of characters. */
    SelectionTooComplex,
    /** The subtextpart wasn't inserted because the specified position values are invalid. Invalid start and / or length values have been specified. */
    PositionInvalid,
    /** The subtextpart wasn't inserted because it already exists. */
    AlreadyExist,
    /** The subtextpart wasn't inserted because it overlaps with an existing textpart. */
    Overlapping,
    /** The subtextpart was inserted and combined with an existing one. A subtextpart is combined with an existing one, when it immediately follows it and has the same name and id. */
    Combined,
}
