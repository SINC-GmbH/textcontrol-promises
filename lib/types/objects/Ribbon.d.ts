import { TabName } from '../helper';

/**
 * The type of the ribbon property of the TXTextControl object.
 * Provides functions and properties for manipulating the control's ribbon bar.
 */
export interface Ribbon {
    /** Expands the ribbon bar if it is currently minimized. */
    expand(): void;
    /** Minimizes the ribbon bar so that only the tab names stay visible. */
    minimize(): void;

    /** Gets or sets the currently selected ribbon tab name. */
    selectedTab: TabName;
}
