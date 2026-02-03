import { ContextMenuItemClickHandler } from "../callbacks";

/** A context menu item. */
export interface ContextMenuItem {
    /** Optional */
    isChecked?: boolean;
    /** Optional */
    isEnabled?: boolean;
    /** The menu item text. */
    text: string;
    /** Optional */
    imageUrl?: string;
    /** Optional */
    items?: ContextMenuItem[];
    /** Optional */
    dropDownIsScrollable?: boolean;
    /** Optional */
    clickHandler?: ContextMenuItemClickHandler;
}
