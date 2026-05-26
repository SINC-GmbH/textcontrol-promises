import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableInfo.d.ts.
 */
export class TableInfoBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TableInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TableInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The table's id.
     * @type {number}
     */
    get id() { return this._txInternal.id; }

    /**
     * The table's nesting level.
     * @type {number}
     */
    get nestedLevel() { return this._txInternal.nestedLevel; }

    //#endregion
}
