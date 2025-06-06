declare namespace TXTextControl {
    /** The event argument for context menu related events. */
    interface ContextMenuEventArgs {
        /** Set this to true to suppress the context menu. */
        cancel: boolean;
        /** Context menu items */
        items: ContextMenuItem[];
        /** A binary combination of ContextMenuLocation values. */
        location: number;
    }
}
