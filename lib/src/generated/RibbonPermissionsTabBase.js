import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/RibbonPermissionsTab.d.ts.
 */
export class RibbonPermissionsTabBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.RibbonPermissionsTab} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.RibbonPermissionsTab} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.RibbonPermissionsTab} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * Gets or sets a value indicating whether the user can add user names by the RibbonPermissionsTab's Add Users dialog that are not represented by the registeredUserNames property. The default value is true.
     * @type {boolean}
     */
    get allowAdditionalUserNames() { return this._txInternal.allowAdditionalUserNames; }

    /**
     * Gets or sets an array of strings that represents those registered user names that can be added by the "Permissions" ribbon tab's Add Users dialog. The default value is an empty array.
     * @type {string[]}
     */
    get registeredUserNames() { return this._txInternal.registeredUserNames; }

    //#endregion
}
