import { StatusBarViewGeneratorBase } from './generated/StatusBarViewGeneratorBase.js';

export class StatusBarViewGenerator extends StatusBarViewGeneratorBase {
    /** @returns {Promise<string>} */
    get columnText() { return this._cached('columnText', () => super.getColumnText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setColumnText(value) {
        this._invalidateCache('columnText');
        this._cached('columnText', () => Promise.resolve(value));
        await super.setColumnText(value);
    }

    /** @returns {Promise<string>} */
    get lineText() { return this._cached('lineText', () => super.getLineText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setLineText(value) {
        this._invalidateCache('lineText');
        this._cached('lineText', () => Promise.resolve(value));
        await super.setLineText(value);
    }

    /** @returns {Promise<string>} */
    get pageCounterText() { return this._cached('pageCounterText', () => super.getPageCounterText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setPageCounterText(value) {
        this._invalidateCache('pageCounterText');
        this._cached('pageCounterText', () => Promise.resolve(value));
        await super.setPageCounterText(value);
    }

    /** @returns {Promise<string>} */
    get pageText() { return this._cached('pageText', () => super.getPageText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setPageText(value) {
        this._invalidateCache('pageText');
        this._cached('pageText', () => Promise.resolve(value));
        await super.setPageText(value);
    }

    /** @returns {Promise<string>} */
    get sectionCounterText() { return this._cached('sectionCounterText', () => super.getSectionCounterText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setSectionCounterText(value) {
        this._invalidateCache('sectionCounterText');
        this._cached('sectionCounterText', () => Promise.resolve(value));
        await super.setSectionCounterText(value);
    }

    /** @returns {Promise<string>} */
    get sectionText() { return this._cached('sectionText', () => super.getSectionText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setSectionText(value) {
        this._invalidateCache('sectionText');
        this._cached('sectionText', () => Promise.resolve(value));
        await super.setSectionText(value);
    }

    /** @returns {Promise<boolean>} */
    get showColumn() { return this._cached('showColumn', () => super.getShowColumn()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setShowColumn(value) {
        this._invalidateCache('showColumn');
        this._cached('showColumn', () => Promise.resolve(value));
        await super.setShowColumn(value);
    }

    /** @returns {Promise<boolean>} */
    get showKeyStates() { return this._cached('showKeyStates', () => super.getShowKeyStates()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setShowKeyStates(value) {
        this._invalidateCache('showKeyStates');
        this._cached('showKeyStates', () => Promise.resolve(value));
        await super.setShowKeyStates(value);
    }

    /** @returns {Promise<boolean>} */
    get showLanguage() { return this._cached('showLanguage', () => super.getShowLanguage()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setShowLanguage(value) {
        this._invalidateCache('showLanguage');
        this._cached('showLanguage', () => Promise.resolve(value));
        await super.setShowLanguage(value);
    }

    /** @returns {Promise<boolean>} */
    get showLine() { return this._cached('showLine', () => super.getShowLine()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setShowLine(value) {
        this._invalidateCache('showLine');
        this._cached('showLine', () => Promise.resolve(value));
        await super.setShowLine(value);
    }

    /** @returns {Promise<boolean>} */
    get showPage() { return this._cached('showPage', () => super.getShowPage()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setShowPage(value) {
        this._invalidateCache('showPage');
        this._cached('showPage', () => Promise.resolve(value));
        await super.setShowPage(value);
    }

    /** @returns {Promise<boolean>} */
    get showPageCounter() { return this._cached('showPageCounter', () => super.getShowPageCounter()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setShowPageCounter(value) {
        this._invalidateCache('showPageCounter');
        this._cached('showPageCounter', () => Promise.resolve(value));
        await super.setShowPageCounter(value);
    }

    /** @returns {Promise<boolean>} */
    get showSection() { return this._cached('showSection', () => super.getShowSection()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setShowSection(value) {
        this._invalidateCache('showSection');
        this._cached('showSection', () => Promise.resolve(value));
        await super.setShowSection(value);
    }

    /** @returns {Promise<boolean>} */
    get showSectionCounter() { return this._cached('showSectionCounter', () => super.getShowSectionCounter()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setShowSectionCounter(value) {
        this._invalidateCache('showSectionCounter');
        this._cached('showSectionCounter', () => Promise.resolve(value));
        await super.setShowSectionCounter(value);
    }

    /** @returns {Promise<boolean>} */
    get showZoom() { return this._cached('showZoom', () => super.getShowZoom()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setShowZoom(value) {
        this._invalidateCache('showZoom');
        this._cached('showZoom', () => Promise.resolve(value));
        await super.setShowZoom(value);
    }

    /** @returns {Promise<boolean>} */
    get showZoomTrackBar() { return this._cached('showZoomTrackBar', () => super.getShowZoomTrackBar()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setShowZoomTrackBar(value) {
        this._invalidateCache('showZoomTrackBar');
        this._cached('showZoomTrackBar', () => Promise.resolve(value));
        await super.setShowZoomTrackBar(value);
    }
}
