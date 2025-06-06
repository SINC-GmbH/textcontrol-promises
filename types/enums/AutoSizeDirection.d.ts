declare namespace TXTextControl {
    /** Determines values for the AutoSize.AutoExpand and AutoSize.AutoShrink properties. */
    enum AutoSizeDirection {
        /** The control does not shrink automatically. */
        None,
        /** The control automatically shrinks vertically. */
        Vertical,
        /** The control automatically shrinks horizontally. */
        Horizontal,
        /** The control automatically shrinks in both directions. */
        Both
    }
}