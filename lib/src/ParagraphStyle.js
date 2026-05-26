import { ParagraphStyleBase } from './generated/ParagraphStyleBase.js';

export class ParagraphStyle extends ParagraphStyleBase {
    /** @returns {Promise<string>} */
    get followingStyle() { return this._cached('followingStyle', () => super.getFollowingStyle()); }

    /** @param {string} value @returns {Promise<void>} */
    async setFollowingStyle(value) {
        this._invalidateCache('followingStyle');
        this._cached('followingStyle', () => Promise.resolve(value));
        await super.setFollowingStyle(value);
    }
}
