import { ParagraphBase } from './generated/ParagraphBase.js';

export class Paragraph extends ParagraphBase {
    /** @returns {Promise<*>} */
    get formattingStyle() { return this._cached('formattingStyle', () => super.getFormattingStyle()); }

    /** @param {*} value @returns {Promise<void>} */
    async setFormattingStyle(value) {
        this._invalidateCache('formattingStyle');
        this._cached('formattingStyle', () => Promise.resolve(value));
        await super.setFormattingStyle(value);
    }
}
