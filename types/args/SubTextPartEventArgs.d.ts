declare namespace TXTextControl {
    /** The event argument object for SubTextPart related events. */
    interface SubTextPartEventArgs {
        /** The subtextpart's identifier. */
        id: number;
        /** The 1-based position of the first character which belongs to the subtextpart. */
        start: number;
        /** The length of the SubTextPart in characters. */
        length: number;
        /** The name of the subtextpart. */
        name: string;
        /** The subtextpart's number. */
        number: number;
        /** The subtextpart's nested level. */
        nestedLevel: number;
    }
}