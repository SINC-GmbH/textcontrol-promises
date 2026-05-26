import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/CultureSettings.d.ts.
 */
export class CultureSettingsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.CultureSettings} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.CultureSettings} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.CultureSettings} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The control's culture.
     * @type {string}
     */
    get culture() { return this._txInternal.culture; }

    /**
     * The control's user interface culture.
     * @type {string}
     */
    get uiCulture() { return this._txInternal.uiCulture; }

    //#endregion
}
