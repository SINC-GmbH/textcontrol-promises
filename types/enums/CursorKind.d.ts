declare namespace TXTextControl {
    /** Determines the kind of the cursor at a certain location in a document. */
    enum CursorKind {
        /** The cursor is an I-beam. */
        IBeam,
        /** The cursor is an arrow cursor pointing to northeast. */
        ArrowNE,
        /** The cursor is a vertical splitting cursor. */
        VSplit,
        /** The cursor is an up arrow cursor. */
        UpArrow,
        /** The cursor is a standard arrow cursor pointing to northwest. */
        Arrow,
        /** The cursor is a down arrow cursor. */
        DownArrow,
        /** The cursor is a two-headed horizontal (west/east) sizing cursor. */
        SizeWE,
        /** The cursor is the two-headed vertical (north/south) sizing cursor. */
        SizeNS,
        /** The cursor is the two-headed diagonal (northwest/southeast) sizing cursor. */
        SizeNWSE,
        /** The cursor is the two-headed diagonal (northeast/southwest) sizing cursor. */
        SizeNESW,
        /** The cursor is the four-headed sizing cursor, which consists of four joined arrows that point north, south, east, and west. */
        SizeAll,
        /** The cursor is the crosshair cursor. */
        Cross,
        /** The cursor is the cursor that indicates that a particular region is invalid for the current operation. */
        No,
        /** The cursor is the standard cursor for copying data during a drag and drop operation. */
        DragDropCopy,
        /** The cursor is the standard cursor for moving data during a drag and drop operation. */
        DragDropMove
    }
}