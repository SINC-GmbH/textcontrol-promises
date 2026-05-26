import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableOfContentsInfo.d.ts.
 */
export class TableOfContentsInfoBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TableOfContentsInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableOfContentsInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TableOfContentsInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * Specifies whether each entry in the table of contents is a DocumentLink with a corresponding DocumentTarget.
     * @type {boolean}
     */
    get hasLinks() { return this._txInternal.hasLinks; }

    /**
     * Specifies whether the table of contents contains page numbers.
     * @type {boolean}
     */
    get hasPageNumbers() { return this._txInternal.hasPageNumbers; }

    /**
     * Specifies whether the page numbers in the table of contents are right-aligned.
     * @type {boolean}
     */
    get hasRightAlignedPageNumbers() { return this._txInternal.hasRightAlignedPageNumbers; }

    /**
     * The highlight color for the table of contents.
     * @type {string}
     */
    get highlightColor() { return this._txInternal.highlightColor; }

    /**
     * Indicates how the text of the table of contents is highlighted.
     * @type {string}
     */
    get highlightMode() { return this._txInternal.highlightMode; }

    /**
     * The table of contents' identifier.
     * @type {number}
     */
    get id() { return this._txInternal.id; }

    /**
     * The number of characters which belong to the table of contents.
     * @type {number}
     */
    get length() { return this._txInternal.length; }

    /**
     * The maximum structure level for this table of contents.
     * @type {number}
     */
    get maximumStructureLevel() { return this._txInternal.maximumStructureLevel; }

    /**
     * The minimum structure level for this table of contents.
     * @type {number}
     */
    get minimumStructureLevel() { return this._txInternal.minimumStructureLevel; }

    /**
     * The table of contents' name.
     * @type {string}
     */
    get name() { return this._txInternal.name; }

    /**
     * The table of contents' one-based number in the document.
     * @type {number}
     */
    get number() { return this._txInternal.number; }

    /**
     * The one-based index of the first character which belongs to the table of contents.
     * @type {number}
     */
    get start() { return this._txInternal.start; }

    //#endregion
}
