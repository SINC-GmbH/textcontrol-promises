import { InputPositionBase } from './generated/InputPositionBase.js';

export class InputPosition extends InputPositionBase {
    /** @returns {Promise<*>} */
    get inactiveMarker() { return this._cached('inactiveMarker', () => super.getInactiveMarker()); }

    /** @param {*} value @returns {Promise<void>} */
    async setInactiveMarker(value) {
        this._invalidateCache('inactiveMarker');
        this._cached('inactiveMarker', () => Promise.resolve(value));
        await super.setInactiveMarker(value);
    }
}
