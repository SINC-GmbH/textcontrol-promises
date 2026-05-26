import { TextField } from '../TextField.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/ApplicationField.d.ts.
 */
export class ApplicationFieldBase extends TextField {
    /** @returns {TXTextControlTypeDefinition.ApplicationField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.ApplicationField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.ApplicationField} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getFormat', 'getParameters', 'getTypeName', 'setFormat', 'setParameters', 'setTypeName');
    }

    /**
     * Gets the field's format.
     * @returns {Promise<number>}
     */
    getFormat() {
        return RequestHelper.Promise(
            this._txInternal.getFormat,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the field' parameters.
     * @returns {Promise<string[]>}
     */
    getParameters() {
        return RequestHelper.Promise(
            this._txInternal.getParameters,
            CallbackType.RequestStringsCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the field's type name.
     * @returns {Promise<string>}
     */
    getTypeName() {
        return RequestHelper.Promise(
            this._txInternal.getTypeName,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the field's format.
     * @param {TXTextControlTypeDefinition.ApplicationFieldFormat} format
     * @returns {Promise<void>}
     */
    setFormat(format) {
        return RequestHelper.Promise(
            this._txInternal.setFormat,
            format,
            CallbackType.EmptyRequestCallback
        );
    }

    /**
     * Sets the field's parameters.
     * @param {string[]} parameters
     * @returns {Promise<void>}
     */
    setParameters(parameters) {
        return RequestHelper.Promise(
            this._txInternal.setParameters,
            parameters,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the field's type name.
     * @param {string} typeName
     * @returns {Promise<void>}
     */
    setTypeName(typeName) {
        return RequestHelper.Promise(
            this._txInternal.setTypeName,
            typeName,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}
