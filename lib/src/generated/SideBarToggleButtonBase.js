import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SideBarToggleButton.d.ts.
 */
export class SideBarToggleButtonBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.SideBarToggleButton} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SideBarToggleButton} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.SideBarToggleButton} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getAllowedSideBars', 'getCurrentSideBar', 'setAllowedSideBars', 'setCurrentSideBar');
    }

    /**
     * Returns the side bars which are currently shown in the side bar toggle / drop down button at the top right of the ribbon bar.
     * @returns {Promise<TXTextControlTypeDefinition.SideBarType>}
     */
    getAllowedSideBars() {
        return RequestHelper.Promise(
            this._txInternal.getAllowedSideBars,
            CallbackType.SideBarTypeRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Returns the side bar which is shown in the side bar toggle / drop down button at the top right of the ribbon bar.
     * @returns {Promise<TXTextControlTypeDefinition.SideBarType>}
     */
    getCurrentSideBar() {
        return RequestHelper.Promise(
            this._txInternal.getCurrentSideBar,
            CallbackType.SideBarTypeRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the side bars which are shown in the side bar toggle / drop down button at the top right of the ribbon bar.
     * @param {TXTextControlTypeDefinition.SideBarType} value
     * @returns {Promise<void>}
     */
    setAllowedSideBars(value) {
        return RequestHelper.Promise(
            this._txInternal.setAllowedSideBars,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the side bar which is shown in the side bar toggle / drop down button at the top right of the ribbon bar.
     * @param {TXTextControlTypeDefinition.SideBarType} value
     * @returns {Promise<void>}
     */
    setCurrentSideBar(value) {
        return RequestHelper.Promise(
            this._txInternal.setCurrentSideBar,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}
