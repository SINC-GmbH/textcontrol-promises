/**
 * The type of the ribbonPermissionsTab property.
 * The RibbonPermissionsTab object provides properties which can be used to configure the beahviour of the "Permissions" ribbon tab.
 */
export interface RibbonPermissionsTab {
    /**
     * Gets or sets a value indicating whether the user can add user names
     * by the RibbonPermissionsTab's Add Users dialog that are not represented by the registeredUserNames property.
     * The default value is true.
     */
    allowAdditionalUserNames: boolean;
    /**
     * Gets or sets an array of strings that represents those registered user names
     * that can be added by the "Permissions" ribbon tab's Add Users dialog.
     * The default value is an empty array.
     */
    registeredUserNames: string[];
}
