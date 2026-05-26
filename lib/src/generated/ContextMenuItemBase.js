import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/ContextMenuItem.d.ts.
 */
export class ContextMenuItemBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.ContextMenuItem} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.ContextMenuItem} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.ContextMenuItem} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * Optional
     * @type {boolean | undefined}
     */
    get isChecked() { return this._txInternal.isChecked; }

    /**
     * Optional
     * @type {boolean | undefined}
     */
    get isEnabled() { return this._txInternal.isEnabled; }

    /**
     * The menu item text.
     * @type {string}
     */
    get text() { return this._txInternal.text; }

    /**
     * Optional
     * @type {string | undefined}
     */
    get imageUrl() { return this._txInternal.imageUrl; }

    /**
     * Optional
     * @type {TXTextControlTypeDefinition.ContextMenuItem[] | undefined}
     */
    get items() { return this._txInternal.items; }

    /**
     * Optional
     * @type {boolean | undefined}
     */
    get dropDownIsScrollable() { return this._txInternal.dropDownIsScrollable; }

    /**
     * Optional
     * @type {TXTextControlTypeDefinition.ContextMenuItemClickHandler | undefined}
     */
    get clickHandler() { return this._txInternal.clickHandler; }

    //#endregion
}
