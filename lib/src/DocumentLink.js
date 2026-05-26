import { DocumentLinkBase } from './generated/DocumentLinkBase.js';

export class DocumentLink extends DocumentLinkBase {
    /** @returns {Promise<string>} */
    get descriptiveText() { return this._cached('descriptiveText', () => super.getDescriptiveText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setDescriptiveText(value) {
        this._invalidateCache('descriptiveText');
        this._cached('descriptiveText', () => Promise.resolve(value));
        await super.setDescriptiveText(value);
    }
}
