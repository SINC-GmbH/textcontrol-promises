import { ObjectBase } from '../ObjectBase.js';
import { FormattingStyle } from '../FormattingStyle.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/FormattingStyle.d.ts.
 */
export class FormattingStyleBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.FormattingStyle} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.FormattingStyle} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.FormattingStyle} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('apply', 'getAutoBaseline', 'getBaseline', 'getBaseStyle', 'getBold', 'getCapitals', 'getCharacterScaling', 'getCharacterSpacing', 'getCulture', 'getFontName', 'getFontSize', 'getForeColor', 'getItalic', 'getName', 'getStrikeout', 'getTextBackColor', 'getUnderline', 'setAutoBaseline', 'setBaseline', 'setBold', 'setCapitals', 'setCharacterScaling', 'setCharacterSpacing', 'setCulture', 'setFontName', 'setFontSize', 'setForeColor', 'setItalic', 'setName', 'setStrikeout', 'setTextBackColor', 'setUnderline');
    }

    /**
     * Applies all set attributes of the style to the current document.
     * @returns {Promise<void>}
     */
    apply() {
        return RequestHelper.Promise(
            this._txInternal.apply,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets values specifying automatic sub- or superscripted text.
     * @returns {Promise<TXTextControlTypeDefinition.AutoBaseline>}
     */
    getAutoBaseline() {
        return RequestHelper.Promise(
            this._txInternal.getAutoBaseline,
            CallbackType.RequestAutoBaselineCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the baseline alignment, in twips, of the style.
     * @returns {Promise<number>}
     */
    getBaseline() {
        return RequestHelper.Promise(
            this._txInternal.getBaseline,
            CallbackType.RequestNumberCallback
        );
    }

    /**
     * Gets the FormattingStyle which is the base style of this style.
     * @returns {Promise<FormattingStyle>}
     */
    async getBaseStyle() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getBaseStyle,
            CallbackType.RequestFormattingStyleCallback
        );
        return tx && new FormattingStyle(tx);
    }

    /**
     * Gets the bold attribute of the style.
     * @returns {Promise<boolean>}
     */
    getBold() {
        return RequestHelper.Promise(this._txInternal.getBold, CallbackType.RequestBooleanCallback);
    }

    /**
     * Gets values specifying wheather lowercase letters are displayed with capital letters.
     * @returns {Promise<TXTextControlTypeDefinition.Capitals>}
     */
    getCapitals() {
        return RequestHelper.Promise(
            this._txInternal.getCapitals,
            CallbackType.RequestCapitalsCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the style's character scaling, in percent of the average character width.
     * @returns {Promise<number>}
     */
    getCharacterScaling() {
        return RequestHelper.Promise(
            this._txInternal.getCharacterScaling,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the style's character spacing value, in twips.
     * @returns {Promise<number>}
     */
    getCharacterSpacing() {
        return RequestHelper.Promise(
            this._txInternal.getCharacterSpacing,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the culture as a languagecode2-country / regioncode2 string value.
     * @returns {Promise<string>}
     */
    getCulture() {
        return RequestHelper.Promise(
            this._txInternal.getCulture,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the font of the style.
     * @returns {Promise<string>}
     */
    getFontName() {
        return RequestHelper.Promise(
            this._txInternal.getFontName,
            CallbackType.RequestStringCallback
        );
    }

    /**
     * Gets the font's size of the style.
     * @returns {Promise<number>}
     */
    getFontSize() {
        return RequestHelper.Promise(
            this._txInternal.getFontSize,
            CallbackType.RequestNumberCallback
        );
    }

    /**
     * Gets the style's color used to display the text.
     * @returns {Promise<string>}
     */
    getForeColor() {
        return RequestHelper.Promise(
            this._txInternal.getForeColor,
            CallbackType.RequestStringCallback
        );
    }

    /**
     * Gets the italic attribute of the style.
     * @returns {Promise<boolean>}
     */
    getItalic() {
        return RequestHelper.Promise(
            this._txInternal.getItalic,
            CallbackType.RequestBooleanCallback
        );
    }

    /**
     * Gets the name of the style.
     * @returns {Promise<string>}
     */
    getName() {
        return RequestHelper.Promise(this._txInternal.getName, CallbackType.RequestStringCallback);
    }

    /**
     * Gets the strikeout attribute of the style.
     * @returns {Promise<boolean>}
     */
    getStrikeout() {
        return RequestHelper.Promise(
            this._txInternal.getStrikeout,
            CallbackType.RequestBooleanCallback
        );
    }

    /**
     * Gets the style's text background color.
     * @returns {Promise<string>}
     */
    getTextBackColor() {
        return RequestHelper.Promise(
            this._txInternal.getTextBackColor,
            CallbackType.RequestStringCallback
        );
    }

    /**
     * Gets the underlining styles for the style.
     * @returns {Promise<TXTextControlTypeDefinition.FontUnderlineStyle>}
     */
    getUnderline() {
        return RequestHelper.Promise(
            this._txInternal.getUnderline,
            CallbackType.RequestFontUnderlineStyleCallback
        );
    }

    /**
     * Sets values specifying automatic sub- or superscripted text.
     * @param {TXTextControlTypeDefinition.AutoBaseline} autoBaseline
     * @returns {Promise<void>}
     */
    setAutoBaseline(autoBaseline) {
        return RequestHelper.Promise(
            this._txInternal.setAutoBaseline,
            autoBaseline,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the baseline alignment, in twips, of the style.
     * @param {number} baseline
     * @returns {Promise<void>}
     */
    setBaseline(baseline) {
        return RequestHelper.Promise(
            this._txInternal.setBaseline,
            baseline,
            CallbackType.EmptyRequestCallback
        );
    }

    /**
     * Sets the bold attribute of the style.
     * @param {boolean} isBold
     * @returns {Promise<void>}
     */
    setBold(isBold) {
        return RequestHelper.Promise(
            this._txInternal.setBold,
            isBold,
            CallbackType.EmptyRequestCallback
        );
    }

    /**
     * Sets values specifying wheather lowercase letters are displayed with capital letters.
     * @param {TXTextControlTypeDefinition.Capitals} capitals
     * @returns {Promise<void>}
     */
    setCapitals(capitals) {
        return RequestHelper.Promise(
            this._txInternal.setCapitals,
            capitals,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets or sets the style's character scaling, in percent of the average character width.
     * @param {number} characterScaling
     * @returns {Promise<void>}
     */
    setCharacterScaling(characterScaling) {
        return RequestHelper.Promise(
            this._txInternal.setCharacterScaling,
            characterScaling,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the style's character spacing value, in twips.
     * @param {number} characterSpacing
     * @returns {Promise<void>}
     */
    setCharacterSpacing(characterSpacing) {
        return RequestHelper.Promise(
            this._txInternal.setCharacterSpacing,
            characterSpacing,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the culture as a languagecode2-country / regioncode2 string value.
     * @param {string} culture
     * @returns {Promise<void>}
     */
    setCulture(culture) {
        return RequestHelper.Promise(
            this._txInternal.setCulture,
            culture,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the font of the style.
     * @param {string} fontName
     * @returns {Promise<void>}
     */
    setFontName(fontName) {
        return RequestHelper.Promise(
            this._txInternal.setFontName,
            fontName,
            CallbackType.EmptyRequestCallback
        );
    }

    /**
     * Sets the font's size of the style.
     * @param {number} fontSize
     * @returns {Promise<void>}
     */
    setFontSize(fontSize) {
        return RequestHelper.Promise(
            this._txInternal.setFontSize,
            fontSize,
            CallbackType.EmptyRequestCallback
        );
    }

    /**
     * Sets the style's color used to display the text.
     * @param {string} color
     * @returns {Promise<void>}
     */
    setForeColor(color) {
        return RequestHelper.Promise(
            this._txInternal.setForeColor,
            color,
            CallbackType.EmptyRequestCallback
        );
    }

    /**
     * Sets the italic attribute of the style.
     * @param {boolean} isItalic
     * @returns {Promise<void>}
     */
    setItalic(isItalic) {
        return RequestHelper.Promise(
            this._txInternal.setItalic,
            isItalic,
            CallbackType.EmptyRequestCallback
        );
    }

    /**
     * Sets the name of the style.
     * @param {string} name
     * @returns {Promise<void>}
     */
    setName(name) {
        return RequestHelper.Promise(
            this._txInternal.setName,
            name,
            CallbackType.EmptyRequestCallback
        );
    }

    /**
     * Sets the strikeout attribute of the style.
     * @param {boolean} strikeout
     * @returns {Promise<void>}
     */
    setStrikeout(strikeout) {
        return RequestHelper.Promise(
            this._txInternal.setStrikeout,
            strikeout,
            CallbackType.EmptyRequestCallback
        );
    }

    /**
     * Sets the style's text background color.
     * @param {string} color
     * @returns {Promise<void>}
     */
    setTextBackColor(color) {
        return RequestHelper.Promise(
            this._txInternal.setTextBackColor,
            color,
            CallbackType.EmptyRequestCallback
        );
    }

    /**
     * Sets the underlining styles for the style.
     * @param {TXTextControlTypeDefinition.FontUnderlineStyle} underlineStyle
     * @returns {Promise<void>}
     */
    setUnderline(underlineStyle) {
        return RequestHelper.Promise(
            this._txInternal.setUnderline,
            underlineStyle,
            CallbackType.EmptyRequestCallback
        );
    }}
