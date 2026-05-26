import { Collection } from '../Collection.js';
// TODO: create lib/src/Comment.js — item wrapper not found
import { CommentedText } from '../CommentedText.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<object>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/CommentCollection.d.ts.
 */
export class CommentCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.CommentCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.CommentCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.CommentCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => tx /* TODO: wrap with Comment */) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'addAtPosition', 'addReply', 'getItem', 'getNextItem', 'getPreviousItem', 'remove');
    }

    /**
     * Creates a comment with the specified comment string.
     * @param {string} comment
     * @returns {Promise<TXTextControlTypeDefinition.CommentCallbackData>}
     */
    add(comment) {
        return RequestHelper.Promise(
            this._txInternal.add,
            comment,
            CallbackType.AddCommentCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Creates a comment with the specified comment string, start position and length.
     * @param {string} comment
     * @param {number} start
     * @param {number} length
     * @returns {Promise<TXTextControlTypeDefinition.CommentCallbackData>}
     */
    addAtPosition(comment, start, length) {
        return RequestHelper.Promise(
            this._txInternal.addAtPosition,
            comment,
            start,
            length,
            CallbackType.AddCommentCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Creates a reply to an existing comment using the specified comment string.
     * @param {string} comment
     * @param {CommentedText} repliedComment
     * @returns {Promise<TXTextControlTypeDefinition.CommentCallbackData>}
     */
    addReply(comment, repliedComment) {
        return RequestHelper.Promise(
            this._txInternal.addReply,
            comment,
            repliedComment?._txInternal,
            CallbackType.AddCommentCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the Comment containing the current text input position from the collection.
     * @returns {Promise<TXTextControlTypeDefinition.CommentedText>}
     */
    getItem() {
        return RequestHelper.Promise(
            this._txInternal.getItem,
            CallbackType.RequestCommentCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the next comment in the text flow.
     * @returns {Promise<TXTextControlTypeDefinition.CommentedText>}
     */
    getNextItem() {
        return RequestHelper.Promise(
            this._txInternal.getNextItem,
            CallbackType.RequestCommentCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the previous comment in the text flow.
     * @returns {Promise<TXTextControlTypeDefinition.CommentedText>}
     */
    getPreviousItem() {
        return RequestHelper.Promise(
            this._txInternal.getPreviousItem,
            CallbackType.RequestCommentCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Removes a comment from the collection.
     * @param {CommentedText} comment
     * @returns {Promise<boolean>}
     */
    remove(comment) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            comment?._txInternal,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}
