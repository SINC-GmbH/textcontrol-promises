import { ObjectBase } from '../ObjectBase.js';
import { HeaderFooter } from '../HeaderFooter.js';
import { Rectangle } from '../Rectangle.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Page.d.ts.
 */
export class PageBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Page} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Page} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Page} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getBounds', 'getFooter', 'getHeader', 'getImage', 'getLength', 'getNumber', 'getNumberInSection', 'getSection', 'getStart', 'getTextBounds', 'select');
    }

    /**
     * Gets the bounding rectangle of the page, in twips, relative to the top of the document.
     * @returns {Promise<Rectangle>}
     */
    async getBounds() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getBounds,
            CallbackType.RequestRectangleCallback,
            CallbackType.ErrorCallback
        );
        return tx && new Rectangle(tx);
    }

    /**
     * Gets the footer of the page.
     * @returns {Promise<HeaderFooter>}
     */
    async getFooter() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getFooter,
            CallbackType.RequestHeaderFooterCallback,
            CallbackType.ErrorCallback
        );
        return tx && new HeaderFooter(tx);
    }

    /**
     * Gets the header of the page.
     * @returns {Promise<HeaderFooter>}
     */
    async getHeader() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getHeader,
            CallbackType.RequestHeaderFooterCallback,
            CallbackType.ErrorCallback
        );
        return tx && new HeaderFooter(tx);
    }

    /**
     * Gets an image of the page's contents as in the specified format in screen resolution.
     * @param {TXTextControlTypeDefinition.ImageFormat} imageFormat Specifies the format used to save the image.
     * @param {number} zoomFactor Specifies a zooming factor in percent. It can be a value between 10 and 400 percent.
     * @param {TXTextControlTypeDefinition.PageContent} contents Specifies the image's contents.
     * @returns {Promise<string>}
     */
    getImage(imageFormat, zoomFactor, contents) {
        return RequestHelper.Promise(
            this._txInternal.getImage,
            imageFormat,
            zoomFactor,
            contents,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of characters of the page, including the page break character at the end of the page.
     * @returns {Promise<number>}
     */
    getLength() {
        return RequestHelper.Promise(
            this._txInternal.getLength,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the page's number.
     * @returns {Promise<number>}
     */
    getNumber() {
        return RequestHelper.Promise(
            this._txInternal.getNumber,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the page number relative to the beginning of the section the page belongs to.
     * @returns {Promise<number>}
     */
    getNumberInSection() {
        return RequestHelper.Promise(
            this._txInternal.getNumberInSection,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number, one-based, of the section the page belongs to.
     * @returns {Promise<number>}
     */
    getSection() {
        return RequestHelper.Promise(
            this._txInternal.getSection,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number (one-based) of the page's first character.
     * @returns {Promise<number>}
     */
    getStart() {
        return RequestHelper.Promise(
            this._txInternal.getStart,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the bounding rectangle of the page's text, in twips, relative to the top of the document.
     * @returns {Promise<Rectangle>}
     */
    async getTextBounds() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getTextBounds,
            CallbackType.RequestRectangleCallback,
            CallbackType.ErrorCallback
        );
        return tx && new Rectangle(tx);
    }

    /**
     * Selects the text of the page.
     * @returns {Promise<void>}
     */
    select() {
        return RequestHelper.Promise(
            this._txInternal.select,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}
