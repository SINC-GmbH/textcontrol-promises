import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Ribbon.d.ts.
 */
export class RibbonBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Ribbon} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Ribbon} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Ribbon} txObj */
    constructor(txObj) {
        super(txObj);
    }

    /**
     * Expands the ribbon bar if it is currently minimized.
     */
    expand() {
        return this._txInternal.expand();
    }

    /**
     * Minimizes the ribbon bar so that only the tab names stay visible.
     */
    minimize() {
        return this._txInternal.minimize();
    }
    //#region properties

    /**
     * Gets or sets the currently selected ribbon tab name.
     * @type {TXTextControlTypeDefinition.TabName}
     */
    get selectedTab() { return this._txInternal.selectedTab; }

    //#endregion
}
