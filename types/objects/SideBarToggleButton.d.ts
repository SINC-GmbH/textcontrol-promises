declare namespace TXTextControl {
    /** The sidebar toggle button shown at the top right of the ribbon. */
    interface SideBarToggleButton {
        /** Returns the side bars which are currently shown in the side bar toggle / drop down button at the top right of the ribbon bar. */
        getAllowedSideBars(callback: SideBarTypeRequestCallback, errorCallback?: ErrorCallback): void;
        /** Returns the side bar which is shown in the side bar toggle / drop down button at the top right of the ribbon bar. */
        getCurrentSideBar(callback: SideBarTypeRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the side bars which are shown in the side bar toggle / drop down button at the top right of the ribbon bar. */
        setAllowedSideBars(value: SideBarType, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the side bar which is shown in the side bar toggle / drop down button at the top right of the ribbon bar. */
        setCurrentSideBar(value: SideBarType, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}