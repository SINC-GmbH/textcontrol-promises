import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/CommentedText.d.ts.
 */
export class CommentedTextBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.CommentedText} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.CommentedText} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.CommentedText} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getActive', 'getComment', 'getCreationTime', 'getHighlightColor', 'getHighlightMode', 'getID', 'getLength', 'getNumber', 'getRepliedComment', 'getReplies', 'getStart', 'getText', 'getUserName', 'scrollTo', 'setActive', 'setComment', 'setHighlightColor', 'setHighlightMode', 'setID');
    }

    /**
     * Gets whether the comment is currently active or not.
     * @returns {Promise<boolean>}
     */
    getActive() {
        return RequestHelper.Promise(
            this._txInternal.getActive,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Retrieves the comment text.
     * @returns {Promise<string>}
     */
    getComment() {
        return RequestHelper.Promise(
            this._txInternal.getComment,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the date and time when the comment has been inserted as a Unix timestamp in milliseconds.
     * @returns {Promise<number>}
     */
    getCreationTime() {
        return RequestHelper.Promise(
            this._txInternal.getCreationTime,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the highlight color for the comment as a CSS color string.
     * @returns {Promise<string>}
     */
    getHighlightColor() {
        return RequestHelper.Promise(
            this._txInternal.getHighlightColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether the comment is highlighted.
     * @returns {Promise<TXTextControlTypeDefinition.HighlightMode>}
     */
    getHighlightMode() {
        return RequestHelper.Promise(
            this._txInternal.getHighlightMode,
            CallbackType.RequestHighlightModeCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets an identifier for a comment.
     * @returns {Promise<number>}
     */
    getID() {
        return RequestHelper.Promise(
            this._txInternal.getID,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of characters which belong to the comment.
     * @returns {Promise<number>}
     */
    getLength() {
        return RequestHelper.Promise(
            this._txInternal.getLength,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the comment's number.
     * @returns {Promise<number>}
     */
    getNumber() {
        return RequestHelper.Promise(
            this._txInternal.getNumber,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the comment for which this comment is a reply.
     * @returns {Promise<TXTextControlTypeDefinition.CommentedText>}
     */
    getRepliedComment() {
        return RequestHelper.Promise(
            this._txInternal.getRepliedComment,
            CallbackType.RequestCommentCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets all replies of this comment or null if there are no replies.
     * @returns {Promise<TXTextControlTypeDefinition.CommentedText[]>}
     */
    getReplies() {
        return RequestHelper.Promise(
            this._txInternal.getReplies,
            CallbackType.RequestCommentsCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the index (one-based) of the first character which belongs to the comment.
     * @returns {Promise<number>}
     */
    getStart() {
        return RequestHelper.Promise(
            this._txInternal.getStart,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the comment's text.
     * @returns {Promise<string>}
     */
    getText() {
        return RequestHelper.Promise(
            this._txInternal.getText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the name of the user who has commented the document.
     * @returns {Promise<string>}
     */
    getUserName() {
        return RequestHelper.Promise(
            this._txInternal.getUserName,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the current input position to the beginning of a comment and scrolls it into the visible part of the document.
     * @returns {Promise<void>}
     */
    scrollTo() {
        return RequestHelper.Promise(
            this._txInternal.scrollTo,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether the comment is currently active or not.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setActive(value) {
        return RequestHelper.Promise(
            this._txInternal.setActive,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the comment text.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setComment(value) {
        return RequestHelper.Promise(
            this._txInternal.setComment,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the highlight color for the comment.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setHighlightColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setHighlightColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether the comment is highlighted.
     * @param {TXTextControlTypeDefinition.HighlightMode} value
     * @returns {Promise<void>}
     */
    setHighlightMode(value) {
        return RequestHelper.Promise(
            this._txInternal.setHighlightMode,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets an identifier for the comment.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setID(value) {
        return RequestHelper.Promise(
            this._txInternal.setID,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}
