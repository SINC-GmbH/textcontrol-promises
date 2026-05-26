import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TrackedChangeInfo.d.ts.
 */
export class TrackedChangeInfoBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TrackedChangeInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TrackedChangeInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TrackedChangeInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The tracked change's kind.
     * @type {number}
     */
    get changeKind() { return this._txInternal.changeKind; }

    /**
     * The tracked change's highlighting color.
     * @type {number}
     */
    get highlightColor() { return this._txInternal.highlightColor; }

    /**
     * The tracked change's highlighting mode.
     * @type {number}
     */
    get highlightMode() { return this._txInternal.highlightMode; }

    /**
     * The tracked change's time.
     * @type {number}
     */
    get changeTime() { return this._txInternal.changeTime; }

    /**
     * The tracked change's length.
     * @type {number}
     */
    get length() { return this._txInternal.length; }

    /**
     * The tracked change's number.
     * @type {number}
     */
    get number() { return this._txInternal.number; }

    /**
     * The tracked change's starting position.
     * @type {number}
     */
    get start() { return this._txInternal.start; }

    /**
     * The tracked change's user name.
     * @type {number}
     */
    get userName() { return this._txInternal.userName; }

    //#endregion
}
