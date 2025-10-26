import {
    EmptyRequestCallback,
    RequestAutoBaselineCallback,
    RequestNumberCallback,
    RequestBooleanCallback,
    RequestCapitalsCallback,
    RequestStringCallback,
    RequestFontUnderlineStyleCallback,
    SaveDocumentCallback,
} from '../callbacks';
import { CapitalizationSettings, Direction, StreamType, AutoBaseline, Capitals, FontUnderlineStyle } from '../enums';
import { ListFormat } from './ListFormat';
import { LoadSettings } from './LoadSettings';
import { PageBorder } from './PageBorder';
import { PageMargins } from './PageMargins';
import { PageSize } from './PageSize';
import { ParagraphFormat } from './ParagraphFormat';
import { SaveSettings } from './SaveSettings';
import { SectionFormat } from './SectionFormat';
import { SelectionBounds } from './SelectionBounds';

export namespace Selection {
    /** Determines a certain selection attribute. */
    export enum Attribute {
        /** Specifies the attribute set through the Baseline property. */
        Baseline,
        /** Specifies the attribute set through the Bold property. */
        Bold,
        /** Specifies the attribute set through the Italic property. */
        Italic,
        /** Specifies the attribute set through the FontName property. */
        FontName,
        /** Specifies the attribute set through the FontSize property. */
        FontSize,
        /** Specifies the attribute set through the Strikeout property. */
        Strikeout,
        /** Specifies the attribute set through the Underline property. */
        Underline,
        /** Specifies the attribute set through the ForeColor property. */
        ForeColor,
        /** Specifies the attribute set through the TextBackColor property. */
        TextBackColor,
        /** Specifies the attribute set through the Start property. */
        Start,
        /** Specifies the attribute set through the Length property. */
        Length,
        /** Specifies the attribute set through the Text property. */
        Text,
        /** Specifies the attribute set through the FormattingStyle property. */
        FormattingStyle,
        /** Specifies the attribute set through the Culture property. */
        Culture,
        /** Specifies all attributes of the Selection. */
        All,
    }
}

/**
 * Describes and handles the attributes of a text selection.
 * Each of the properties of this class returns the property's default value if the selection does not contain a common value.
 */
export interface Selection {
    /** Changes the capitalization of all selected characters depending on the 'capitalizationParameter' parameter. */
    changeCapitalization(capitalizationSettings: CapitalizationSettings, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Changes the writing direction of all selected paragraphs. */
    changeDirection(direction: Direction, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Decreases the left indent of all paragraphs contained in the current text selection. */
    decreaseIndent(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Gets values specifying automatic sub - or superscripted text. */
    getAutoBaseline(callback: RequestAutoBaselineCallback, errorCallback?: ErrorCallback): void;
    /** Gets the baseline alignment, in twips, of the selected text. */
    getBaseline(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the bold attribute of the selected text. */
    getBold(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets values specifying wheather lowercase letters are displayed with capital letters. */
    getCapitals(callback: RequestCapitalsCallback, errorCallback?: ErrorCallback): void;
    /** Gets or sets the style's character scaling, in percent of the average character width. */
    getCharacterScaling(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the style's character spacing value, in twips. */
    getCharacterSpacing(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the culture as a languagecode2 - country / regioncode2 string value. */
    getCulture(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the font name of the selected text. */
    getFontName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the font's size, in points, of the selected text. */
    getFontSize(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the color used to display the selected text. */
    getForeColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the formatting style of the selected text. */
    getFormattingStyle(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the italic attribute of the selected text. */
    getItalic(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number of selected characters. */
    getLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the starting point of selected text. */
    getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the strikeout attribute of the selected text. */
    getStrikeout(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the currently selected text. */
    getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the background color of the selected text. */
    getTextBackColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the underlining styles of the selected text. */
    getUnderline(callback: RequestFontUnderlineStyleCallback, errorCallback?: ErrorCallback): void;
    /** Increases the font size of each font contained in the current text selection.If no text is selected, this method increases the font size at the text input position. */
    growFont(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Increases the left indent of all paragraphs contained in the current text selection. */
    increaseIndent(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Informs about whether an attribute from the ListFormat.Attribute enumeration has the same value for the complete selection. */
    isCommonListFormatValueSelected(listFormatAttribute: ListFormat.Attribute, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Informs about whether an attribute from the PageBorder.Attribute enumeration has the same value for the complete selection. */
    isCommonPageBorderValueSelected(pageBorderAttribute: PageBorder.Attribute, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Informs about whether an attribute from the PageMargins.Attribute enumeration has the same value for the complete selection. */
    isCommonPageMarginsValueSelected(
        pageMarginsAttribute: PageMargins.Attribute,
        callback?: EmptyRequestCallback,
        errorCallback?: ErrorCallback
    ): void;
    /** Informs about whether an attribute from the PageSize.Attribute enumeration has the same value for the complete selection. */
    isCommonPageSizeValueSelected(pageSizeAttribute: PageSize.Attribute, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Informs about whether an attribute from the ParagraphFormat.Attribute enumeration has the same value for the complete selection. */
    isCommonParagraphFormatValueSelected(
        paragraphFormatAttribute: ParagraphFormat.Attribute,
        callback?: EmptyRequestCallback,
        errorCallback?: ErrorCallback
    ): void;
    /** Informs about whether an attribute from the SectionFormat.Attribute enumeration has the same value for the complete selection. */
    isCommonSectionFormatValueSelected(
        sectionFormatAttribute: SectionFormat.Attribute,
        callback?: EmptyRequestCallback,
        errorCallback?: ErrorCallback
    ): void;
    /** Informs about whether an attribute from the Selection.Attribute enumeration has the same value for the complete selection. */
    isCommonSelectionValueSelected(selectionAttribute: Selection.Attribute, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Loads text in a certain format into the current selection. */
    load(
        streamType: StreamType,
        base64Data: string,
        callback?: EmptyRequestCallback,
        loadSettings?: LoadSettings,
        errorCallback?: ErrorCallback
    ): void;
    /** Resets all character based formatting attributes of the selected text to its default values. */
    removeFormatting(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Removes all character based styles of the selected text so that all attributes are reset to the attributes of the paragraph style. */
    removeInlineStyles(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Saves the current selection in a certain format and sends the result back asynchronously by calling a given callback function. */
    save(streamType: StreamType, callback: SaveDocumentCallback, saveSettings?: SaveSettings, errorCallback?: ErrorCallback): void;
    /** Sets values specifying automatic sub - or superscripted text. */
    setAutoBaseline(value: AutoBaseline, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the baseline alignment, in twips, of the selected text. */
    setBaseline(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the bold attribute of the selected text. */
    setBold(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /**
     * Sets the selection's start position and length.
     * @deprecated Obsolete. This method will be removed in one of the next versions.
     */
    setBounds(value: SelectionBounds, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets values specifying wheather lowercase letters are displayed with capital letters. */
    setCapitals(value: Capitals, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets or sets the style's character scaling, in percent of the average character width. */
    setCharacterScaling(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the style's character spacing value, in twips. */
    setCharacterSpacing(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the culture as a languagecode2 - country / regioncode2 string value. */
    setCulture(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the font's name of the selected text. */
    setFontName(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the font's size, in points, of the selected text. */
    setFontSize(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the selection's foreground color. */
    setForeColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the formatting style of the selected text. */
    setFormattingStyle(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the italic attribute of the selected text. */
    setItalic(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the number of selected characters. */
    setLength(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the starting point of selected text. */
    setStart(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the strikeout attribute of the selected text. */
    setStrikeout(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the currently selected text. */
    setText(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the selection's background color. */
    setTextBackColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the underlining styles for the selected text. */
    setUnderline(value: FontUnderlineStyle, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Decreases the font size of each font contained in the current text selection. */
    shrinkFont(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;

    /** Gets a bulleted or numbered list and / or its formatting attributes for the selected text. */
    listFormat: ListFormat;
    /** Gets the formatting attributes of the selected paragraphs. */
    paragraphFormat: ParagraphFormat;
    /** Gets page settings such as margins, size and orientation for the selected text. */
    sectionFormat: SectionFormat;
}
