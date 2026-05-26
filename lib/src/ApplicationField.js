import { ApplicationFieldBase } from './generated/ApplicationFieldBase.js';
/** @import * as TXTextControlTypeDefinition from "../types/TXTextControlNamespace" */

export class ApplicationField extends ApplicationFieldBase {
    /** @returns {Promise<*>} */
    get format() { return this._cached('format', () => super.getFormat()); }

    /** @param {*} value @returns {Promise<void>} */
    async setFormat(value) {
        this._invalidateCache('format');
        this._cached('format', () => Promise.resolve(value));
        await super.setFormat(value);
    }

    /** @returns {Promise<*>} */
    get parameters() { return this._cached('parameters', () => super.getParameters()); }

    /** @param {*} value @returns {Promise<void>} */
    async setParameters(value) {
        this._invalidateCache('parameters');
        this._cached('parameters', () => Promise.resolve(value));
        await super.setParameters(value);
    }

    /** @returns {Promise<string>} */
    get typeName() { return this._cached('typeName', () => super.getTypeName()); }

    /** @param {string} value @returns {Promise<void>} */
    async setTypeName(value) {
        this._invalidateCache('typeName');
        this._cached('typeName', () => Promise.resolve(value));
        await super.setTypeName(value);
    }

    /**
     * Sets parameters from a structured object.
     * Supported keys: name, textBefore, textFollowing, dateFormat, numberFormat
     * @param {TXTextControlTypeDefinition.ApplicationFieldParametersArgs} parameters
     * @returns {Promise<void>}
     */
    async setParametersObj(parameters) {
        const params = [];
        params.push(parameters.name ?? await this.getName());
        params.push(`\\b "${parameters.textBefore ?? ''}"`);
        params.push(`\\f "${parameters.textFollowing ?? ''}"`);
        params.push(`\\@ "${parameters.dateFormat ?? ''}"`);
        params.push(`\\# "${parameters.numberFormat ?? ''}"`);
        await this.setParameters(params);
    }
}
