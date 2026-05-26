import { ObjectBase } from '../ObjectBase.js';
import { ListFormat } from '../ListFormat.js';
import { LoadSettings } from '../LoadSettings.js';
import { ParagraphFormat } from '../ParagraphFormat.js';
import { SaveSettings } from '../SaveSettings.js';
import { SectionFormat } from '../SectionFormat.js';
import { SelectionBounds } from '../SelectionBounds.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Selection.d.ts.
 */
export class SelectionBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Selection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Selection} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Selection} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('changeCapitalization', 'changeDirection', 'decreaseIndent', 'getAutoBaseline', 'getBaseline', 'getBold', 'getCapitals', 'getCharacterScaling', 'getCharacterSpacing', 'getCulture', 'getFontName', 'getFontSize', 'getForeColor', 'getFormattingStyle', 'getItalic', 'getLength', 'getStart', 'getStrikeout', 'getText', 'getTextBackColor', 'getUnderline', 'growFont', 'increaseIndent', 'isCommonListFormatValueSelected', 'isCommonPageBorderValueSelected', 'isCommonPageMarginsValueSelected', 'isCommonPageSizeValueSelected', 'isCommonParagraphFormatValueSelected', 'isCommonSectionFormatValueSelected', 'isCommonSelectionValueSelected', 'load', 'removeFormatting', 'removeInlineStyles', 'save', 'setAutoBaseline', 'setBaseline', 'setBold', 'setBounds', 'setCapitals', 'setCharacterScaling', 'setCharacterSpacing', 'setCulture', 'setFontName', 'setFontSize', 'setForeColor', 'setFormattingStyle', 'setItalic', 'setLength', 'setStart', 'setStrikeout', 'setText', 'setTextBackColor', 'setUnderline', 'shrinkFont');
    }

    /**
     * Changes the capitalization of all selected characters depending on the 'capitalizationParameter' parameter.
     * @param {TXTextControlTypeDefinition.CapitalizationSettings} capitalizationSettings
     * @returns {Promise<void>}
     */
    changeCapitalization(capitalizationSettings) {
        return RequestHelper.Promise(
            this._txInternal.changeCapitalization,
            capitalizationSettings,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Changes the writing direction of all selected paragraphs.
     * @param {TXTextControlTypeDefinition.Direction} direction
     * @returns {Promise<void>}
     */
    changeDirection(direction) {
        return RequestHelper.Promise(
            this._txInternal.changeDirection,
            direction,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Decreases the left indent of all paragraphs contained in the current text selection.
     * @returns {Promise<void>}
     */
    decreaseIndent() {
        return RequestHelper.Promise(
            this._txInternal.decreaseIndent,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets values specifying automatic sub - or superscripted text.
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
     * Gets the baseline alignment, in twips, of the selected text.
     * @returns {Promise<number>}
     */
    getBaseline() {
        return RequestHelper.Promise(
            this._txInternal.getBaseline,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the bold attribute of the selected text.
     * @returns {Promise<boolean>}
     */
    getBold() {
        return RequestHelper.Promise(
            this._txInternal.getBold,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
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
     * Gets or sets the style's character scaling, in percent of the average character width.
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
     * Gets the culture as a languagecode2 - country / regioncode2 string value.
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
     * Gets the font name of the selected text.
     * @returns {Promise<string>}
     */
    getFontName() {
        return RequestHelper.Promise(
            this._txInternal.getFontName,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the font's size, in points, of the selected text.
     * @returns {Promise<number>}
     */
    getFontSize() {
        return RequestHelper.Promise(
            this._txInternal.getFontSize,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the color used to display the selected text.
     * @returns {Promise<string>}
     */
    getForeColor() {
        return RequestHelper.Promise(
            this._txInternal.getForeColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the formatting style of the selected text.
     * @returns {Promise<string>}
     */
    getFormattingStyle() {
        return RequestHelper.Promise(
            this._txInternal.getFormattingStyle,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the italic attribute of the selected text.
     * @returns {Promise<boolean>}
     */
    getItalic() {
        return RequestHelper.Promise(
            this._txInternal.getItalic,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of selected characters.
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
     * Gets the starting point of selected text.
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
     * Gets the strikeout attribute of the selected text.
     * @returns {Promise<boolean>}
     */
    getStrikeout() {
        return RequestHelper.Promise(
            this._txInternal.getStrikeout,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the currently selected text.
     * @returns {Promise<string>}
     */
    getText() {
        return RequestHelper.Promise(
            this._txInternal.getText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the background color of the selected text.
     * @returns {Promise<string>}
     */
    getTextBackColor() {
        return RequestHelper.Promise(
            this._txInternal.getTextBackColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the underlining styles of the selected text.
     * @returns {Promise<TXTextControlTypeDefinition.FontUnderlineStyle>}
     */
    getUnderline() {
        return RequestHelper.Promise(
            this._txInternal.getUnderline,
            CallbackType.RequestFontUnderlineStyleCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Increases the font size of each font contained in the current text selection.If no text is selected, this method increases the font size at the text input position.
     * @returns {Promise<void>}
     */
    growFont() {
        return RequestHelper.Promise(
            this._txInternal.growFont,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Increases the left indent of all paragraphs contained in the current text selection.
     * @returns {Promise<void>}
     */
    increaseIndent() {
        return RequestHelper.Promise(
            this._txInternal.increaseIndent,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs about whether an attribute from the ListFormat.Attribute enumeration has the same value for the complete selection.
     * @param {TXTextControlTypeDefinition.ListFormat.Attribute} listFormatAttribute
     * @returns {Promise<void>}
     */
    isCommonListFormatValueSelected(listFormatAttribute) {
        return RequestHelper.Promise(
            this._txInternal.isCommonListFormatValueSelected,
            listFormatAttribute,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs about whether an attribute from the PageBorder.Attribute enumeration has the same value for the complete selection.
     * @param {TXTextControlTypeDefinition.PageBorder.Attribute} pageBorderAttribute
     * @returns {Promise<void>}
     */
    isCommonPageBorderValueSelected(pageBorderAttribute) {
        return RequestHelper.Promise(
            this._txInternal.isCommonPageBorderValueSelected,
            pageBorderAttribute,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs about whether an attribute from the PageMargins.Attribute enumeration has the same value for the complete selection.
     * @param {TXTextControlTypeDefinition.PageMargins.Attribute} pageMarginsAttribute
     * @returns {Promise<void>}
     */
    isCommonPageMarginsValueSelected(pageMarginsAttribute) {
        return RequestHelper.Promise(
            this._txInternal.isCommonPageMarginsValueSelected,
            pageMarginsAttribute,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs about whether an attribute from the PageSize.Attribute enumeration has the same value for the complete selection.
     * @param {TXTextControlTypeDefinition.PageSize.Attribute} pageSizeAttribute
     * @returns {Promise<void>}
     */
    isCommonPageSizeValueSelected(pageSizeAttribute) {
        return RequestHelper.Promise(
            this._txInternal.isCommonPageSizeValueSelected,
            pageSizeAttribute,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs about whether an attribute from the ParagraphFormat.Attribute enumeration has the same value for the complete selection.
     * @param {TXTextControlTypeDefinition.ParagraphFormat.Attribute} paragraphFormatAttribute
     * @returns {Promise<void>}
     */
    isCommonParagraphFormatValueSelected(paragraphFormatAttribute) {
        return RequestHelper.Promise(
            this._txInternal.isCommonParagraphFormatValueSelected,
            paragraphFormatAttribute,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs about whether an attribute from the SectionFormat.Attribute enumeration has the same value for the complete selection.
     * @param {TXTextControlTypeDefinition.SectionFormat.Attribute} sectionFormatAttribute
     * @returns {Promise<void>}
     */
    isCommonSectionFormatValueSelected(sectionFormatAttribute) {
        return RequestHelper.Promise(
            this._txInternal.isCommonSectionFormatValueSelected,
            sectionFormatAttribute,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs about whether an attribute from the Selection.Attribute enumeration has the same value for the complete selection.
     * @param {TXTextControlTypeDefinition.Selection.Attribute} selectionAttribute
     * @returns {Promise<void>}
     */
    isCommonSelectionValueSelected(selectionAttribute) {
        return RequestHelper.Promise(
            this._txInternal.isCommonSelectionValueSelected,
            selectionAttribute,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Loads text in a certain format into the current selection.
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {string} base64Data
     * @param {LoadSettings} [loadSettings]
     * @returns {Promise<void>}
     */
    load(streamType, base64Data, loadSettings) {
        return RequestHelper.Promise(
            this._txInternal.load,
            streamType,
            base64Data,
            CallbackType.EmptyRequestCallback,
            loadSettings?._txInternal,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets all character based formatting attributes of the selected text to its default values.
     * @returns {Promise<void>}
     */
    removeFormatting() {
        return RequestHelper.Promise(
            this._txInternal.removeFormatting,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Removes all character based styles of the selected text so that all attributes are reset to the attributes of the paragraph style.
     * @returns {Promise<void>}
     */
    removeInlineStyles() {
        return RequestHelper.Promise(
            this._txInternal.removeInlineStyles,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Saves the current selection in a certain format and sends the result back asynchronously by calling a given callback function.
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {SaveSettings} [saveSettings]
     * @returns {Promise<void>}
     */
    save(streamType, saveSettings) {
        return RequestHelper.Promise(
            this._txInternal.save,
            streamType,
            CallbackType.SaveDocumentCallback,
            saveSettings?._txInternal,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets values specifying automatic sub - or superscripted text.
     * @param {TXTextControlTypeDefinition.AutoBaseline} value
     * @returns {Promise<void>}
     */
    setAutoBaseline(value) {
        return RequestHelper.Promise(
            this._txInternal.setAutoBaseline,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the baseline alignment, in twips, of the selected text.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setBaseline(value) {
        return RequestHelper.Promise(
            this._txInternal.setBaseline,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the bold attribute of the selected text.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setBold(value) {
        return RequestHelper.Promise(
            this._txInternal.setBold,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the selection's start position and length.
     * @deprecated
     * @param {SelectionBounds} value
     * @returns {Promise<void>}
     */
    setBounds(value) {
        return RequestHelper.Promise(
            this._txInternal.setBounds,
            value?._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets values specifying wheather lowercase letters are displayed with capital letters.
     * @param {TXTextControlTypeDefinition.Capitals} value
     * @returns {Promise<void>}
     */
    setCapitals(value) {
        return RequestHelper.Promise(
            this._txInternal.setCapitals,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets or sets the style's character scaling, in percent of the average character width.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setCharacterScaling(value) {
        return RequestHelper.Promise(
            this._txInternal.setCharacterScaling,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the style's character spacing value, in twips.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setCharacterSpacing(value) {
        return RequestHelper.Promise(
            this._txInternal.setCharacterSpacing,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the culture as a languagecode2 - country / regioncode2 string value.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setCulture(value) {
        return RequestHelper.Promise(
            this._txInternal.setCulture,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the font's name of the selected text.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setFontName(value) {
        return RequestHelper.Promise(
            this._txInternal.setFontName,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the font's size, in points, of the selected text.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setFontSize(value) {
        return RequestHelper.Promise(
            this._txInternal.setFontSize,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the selection's foreground color.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setForeColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setForeColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the formatting style of the selected text.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setFormattingStyle(value) {
        return RequestHelper.Promise(
            this._txInternal.setFormattingStyle,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the italic attribute of the selected text.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setItalic(value) {
        return RequestHelper.Promise(
            this._txInternal.setItalic,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the number of selected characters.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setLength(value) {
        return RequestHelper.Promise(
            this._txInternal.setLength,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the starting point of selected text.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setStart(value) {
        return RequestHelper.Promise(
            this._txInternal.setStart,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the strikeout attribute of the selected text.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setStrikeout(value) {
        return RequestHelper.Promise(
            this._txInternal.setStrikeout,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the currently selected text.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setText(value) {
        return RequestHelper.Promise(
            this._txInternal.setText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the selection's background color.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setTextBackColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setTextBackColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the underlining styles for the selected text.
     * @param {TXTextControlTypeDefinition.FontUnderlineStyle} value
     * @returns {Promise<void>}
     */
    setUnderline(value) {
        return RequestHelper.Promise(
            this._txInternal.setUnderline,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Decreases the font size of each font contained in the current text selection.
     * @returns {Promise<void>}
     */
    shrinkFont() {
        return RequestHelper.Promise(
            this._txInternal.shrinkFont,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * Gets a bulleted or numbered list and / or its formatting attributes for the selected text.
     * @type {ListFormat}
     */
    get listFormat() { return new ListFormat(this._txInternal.listFormat); }

    /**
     * Gets the formatting attributes of the selected paragraphs.
     * @type {ParagraphFormat}
     */
    get paragraphFormat() { return new ParagraphFormat(this._txInternal.paragraphFormat); }

    /**
     * Gets page settings such as margins, size and orientation for the selected text.
     * @type {SectionFormat}
     */
    get sectionFormat() { return new SectionFormat(this._txInternal.sectionFormat); }

    //#endregion
}
