import { ContextMenuItem } from "../objects";

/** Context menu item click event arguments. */
export interface ContextMenuItemClickEventArgs {
    /** The clicked context menu item. */
    item: ContextMenuItem;
    /** Set this to true to prevent the click from being sent to the backend. */
    cancel: boolean;
}
