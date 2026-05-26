import { HypertextLinkBase } from './generated/HypertextLinkBase.js';

export class HypertextLink extends HypertextLinkBase {
    /** @returns {Promise<string>} */
    get target() { return this._cached('target', () => super.getTarget()); }

    /** @param {string} value @returns {Promise<void>} */
    async setTarget(value) {
        this._invalidateCache('target');
        this._cached('target', () => Promise.resolve(value));
        await super.setTarget(value);
    }

    /** @returns {Promise<string>} */
    get descriptiveText() { return this._cached('descriptiveText', () => super.getDescriptiveText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setDescriptiveText(value) {
        this._invalidateCache('descriptiveText');
        this._cached('descriptiveText', () => Promise.resolve(value));
        await super.setDescriptiveText(value);
    }
}
