import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/CommentedTextInfo.d.ts.
 */
export class CommentedTextInfoBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.CommentedTextInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.CommentedTextInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.CommentedTextInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * Comment activation state.
     * @type {boolean}
     */
    get active() { return this._txInternal.active; }

    /**
     * The comment text.
     * @type {string}
     */
    get comment() { return this._txInternal.comment; }

    /**
     * Creation time as a Unix time stamp in milliseconds.
     * @type {number}
     */
    get creationTime() { return this._txInternal.creationTime; }

    /**
     * Highlight color as a CSS color string.
     * @type {string}
     */
    get highlightColor() { return this._txInternal.highlightColor; }

    /**
     * The comment's highlight mode.
     * @type {TXTextControlTypeDefinition.HighlightMode}
     */
    get highlightMode() { return this._txInternal.highlightMode; }

    /**
     * The comment's identifier.
     * @type {number}
     */
    get id() { return this._txInternal.id; }

    /**
     * The comment's length in characters.
     * @type {number}
     */
    get length() { return this._txInternal.length; }

    /**
     * The number of the comment in the document's text flow.
     * @type {number}
     */
    get number() { return this._txInternal.number; }

    /**
     * The comment's 1-based start position in the document.
     * @type {number}
     */
    get start() { return this._txInternal.start; }

    /**
     * The name of the user who made the comment.
     * @type {string}
     */
    get userName() { return this._txInternal.userName; }

    //#endregion
}
