import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableOfContentsCollectionAddParams.d.ts.
 */
export class TableOfContentsCollectionAddParamsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TableOfContentsCollectionAddParams} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableOfContentsCollectionAddParams} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TableOfContentsCollectionAddParams} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The title for the table of contents.
     * @type {string | undefined}
     */
    get title() { return this._txInternal.title; }

    /**
     * Specifies whether each entry in the table of contents is a DocumentLink with a corresponding DocumentTarget.
     * @type {boolean | undefined}
     */
    get hasLinks() { return this._txInternal.hasLinks; }

    /**
     * Specifies whether the table of contents contains page numbers.
     * @type {boolean | undefined}
     */
    get hasPageNumbers() { return this._txInternal.hasPageNumbers; }

    /**
     * Specifies whether the page numbers in the table of contents are right-aligned.
     * @type {boolean | undefined}
     */
    get hasRightAlignedPageNumbers() { return this._txInternal.hasRightAlignedPageNumbers; }

    /**
     * The minimum structure level for this table of contents.
     * @type {number | undefined}
     */
    get minimumStructureLevel() { return this._txInternal.minimumStructureLevel; }

    /**
     * The maximum structure level for this table of contents.
     * @type {number | undefined}
     */
    get maximumStructureLevel() { return this._txInternal.maximumStructureLevel; }

    //#endregion
}
