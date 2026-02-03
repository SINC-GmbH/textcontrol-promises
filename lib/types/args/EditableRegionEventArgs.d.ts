/** The event argument for editable region related events. */
export interface EditableRegionEventArgs {
    /** The editable region's identifier. */
    id: number;
    /** The number of characters which belong to the editable region. */
    length: number;
    /** The index (one-based) of the first character which belongs to the editable region. */
    start: number;
    /** the name of the user who can edit the region. */
    userName: string;
}
