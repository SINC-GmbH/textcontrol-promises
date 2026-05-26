import { FormattedText } from '../FormattedText.js';
import { PageNumberFieldCollection } from '../PageNumberFieldCollection.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/HeaderFooter.d.ts.
 */
export class HeaderFooterBase extends FormattedText {
    /** @returns {TXTextControlTypeDefinition.HeaderFooter} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.HeaderFooter} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.HeaderFooter} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('activate', 'deactivate', 'getConnectedToPrevious', 'getDistance', 'getType', 'setConnectedToPrevious', 'setDistance');
    }

    /**
     * Activates the this header or footer.
     * @returns {Promise<boolean>}
     */
    activate() {
        return RequestHelper.Promise(
            this._txInternal.activate,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Deactivates the this header or footer.
     * @returns {Promise<boolean>}
     */
    deactivate() {
        return RequestHelper.Promise(
            this._txInternal.deactivate,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether the header or footer is connected with the header or footer of the previous section.
     * @returns {Promise<boolean>}
     */
    getConnectedToPrevious() {
        return RequestHelper.Promise(
            this._txInternal.getConnectedToPrevious,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the distance, in twips, of a header or footer to the top or bottom of the page.
     * @returns {Promise<number>}
     */
    getDistance() {
        return RequestHelper.Promise(
            this._txInternal.getDistance,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the type of the header or footer.
     * @returns {Promise<TXTextControlTypeDefinition.HeaderFooterType>}
     */
    getType() {
        return RequestHelper.Promise(
            this._txInternal.getType,
            CallbackType.RequestHeaderFooterTypeCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether the header or footer is connected with the header or footer of the previous section.
     * @param {boolean} connectedToPrevious
     * @returns {Promise<void>}
     */
    setConnectedToPrevious(connectedToPrevious) {
        return RequestHelper.Promise(
            this._txInternal.setConnectedToPrevious,
            connectedToPrevious,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the distance, in twips, of a header or footer to the top or bottom of the page.
     * @param {number} distance
     * @returns {Promise<void>}
     */
    setDistance(distance) {
        return RequestHelper.Promise(
            this._txInternal.setDistance,
            distance,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * A collection of page number fields in the header or footer.
     * @type {PageNumberFieldCollection}
     */
    get pageNumberFields() { return new PageNumberFieldCollection(this._txInternal.pageNumberFields); }

    //#endregion
}
