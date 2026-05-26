import { SideBarToggleButtonBase } from './generated/SideBarToggleButtonBase.js';

export class SideBarToggleButton extends SideBarToggleButtonBase {
    /** @returns {Promise<*>} */
    get allowedSideBars() { return this._cached('allowedSideBars', () => super.getAllowedSideBars()); }

    /** @param {*} value @returns {Promise<void>} */
    async setAllowedSideBars(value) {
        this._invalidateCache('allowedSideBars');
        this._cached('allowedSideBars', () => Promise.resolve(value));
        await super.setAllowedSideBars(value);
    }

    /** @returns {Promise<*>} */
    get currentSideBar() { return this._cached('currentSideBar', () => super.getCurrentSideBar()); }

    /** @param {*} value @returns {Promise<void>} */
    async setCurrentSideBar(value) {
        this._invalidateCache('currentSideBar');
        this._cached('currentSideBar', () => Promise.resolve(value));
        await super.setCurrentSideBar(value);
    }
}
