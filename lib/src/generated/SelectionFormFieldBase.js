import { FormField } from '../FormField.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SelectionFormField.d.ts.
 */
export class SelectionFormFieldBase extends FormField {
    /** @returns {TXTextControlTypeDefinition.SelectionFormField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SelectionFormField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.SelectionFormField} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getEmptyWidth', 'getIsDropDownArrowVisible', 'getItems', 'getSelectedIndex', 'setEmptyWidth', 'setIsDropDownArrowVisible', 'setItems', 'setSelectedIndex');
    }

    /**
     * Gets the horizontal extension, in twips, of the text formfield, when it is empty.
     * @returns {Promise<number>}
     */
    getEmptyWidth() {
        return RequestHelper.Promise(
            this._txInternal.getEmptyWidth,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether a dropdown arrow is shown so that the user can select an item.
     * @returns {Promise<boolean>}
     */
    getIsDropDownArrowVisible() {
        return RequestHelper.Promise(
            this._txInternal.getIsDropDownArrowVisible,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a list of items for the SelectionFormField. An item must not be an empty string.
     * @returns {Promise<string[]>}
     */
    getItems() {
        return RequestHelper.Promise(
            this._txInternal.getItems,
            CallbackType.RequestStringsCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the index of the selected item of the SelectionFormField. If the property value is -1, no item is selected and the currently selected item is deselected.
     * @returns {Promise<number>}
     */
    getSelectedIndex() {
        return RequestHelper.Promise(
            this._txInternal.getSelectedIndex,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the horizontal extension, in twips, of the text formfield, when it is empty.
     * @param {number} emptyWidth
     * @returns {Promise<void>}
     */
    setEmptyWidth(emptyWidth) {
        return RequestHelper.Promise(
            this._txInternal.setEmptyWidth,
            emptyWidth,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether a dropdown arrow is shown so that the user can select an item.
     * @param {boolean} isDropDownArrowVisible
     * @returns {Promise<void>}
     */
    setIsDropDownArrowVisible(isDropDownArrowVisible) {
        return RequestHelper.Promise(
            this._txInternal.setIsDropDownArrowVisible,
            isDropDownArrowVisible,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a list of items for the SelectionFormField. An item must not be an empty string.
     * @param {string[]} items
     * @returns {Promise<void>}
     */
    setItems(items) {
        return RequestHelper.Promise(
            this._txInternal.setItems,
            items,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the index of the selected item of the SelectionFormField. If the property value is -1, no item is selected and the currently selected item is deselected.
     * @param {number} index
     * @returns {Promise<void>}
     */
    setSelectedIndex(index) {
        return RequestHelper.Promise(
            this._txInternal.setSelectedIndex,
            index,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}
