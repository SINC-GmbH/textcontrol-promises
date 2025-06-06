declare namespace TXTextControl {
    /** Context menu item click event arguments. */
    interface ContextMenuItemClickEventArgs {
        /** The clicked context menu item. */
        item: ContextMenuItem;
        /** Set this to true to prevent the click from being sent to the backend. */
        cancel: boolean;
    }
}

