/** Determines the possible document edit modes. */
export enum EditMode {
    /** The document's text can be edited. */
    Edit,
    /** The document's text is read only but can be selected. */
    ReadAndSelect,
    /** The document's text is read only. */
    ReadOnly,
    /**
     * A dialog box to enter a password is opened to protect the edit mode.
     * This value can only be combined with EditMode.ReadAndSelect using the bitwise or operator.
     */
    UsePassword,
}
