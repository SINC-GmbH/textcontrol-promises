import {
    EmptyRequestCallback,
    RequestAutoBaselineCallback,
    RequestNumberCallback,
    RequestFormattingStyleCallback,
    RequestBooleanCallback,
    RequestCapitalsCallback,
    RequestStringCallback,
    RequestFontUnderlineStyleCallback,
} from '../callbacks';
import { AutoBaseline, Capitals, FontUnderlineStyle } from '../enums';

/** The FormattingStyle object represents a styling for a text range. */
export interface FormattingStyle {
    /** Applies all set attributes of the style to the current document. */
    apply(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Gets values specifying automatic sub- or superscripted text. */
    getAutoBaseline(callback: RequestAutoBaselineCallback, errorCallback?: ErrorCallback): void;
    /** Gets the baseline alignment, in twips, of the style. */
    getBaseline(callback: RequestNumberCallback): void;
    /** Gets the FormattingStyle which is the base style of this style. */
    getBaseStyle(callback: RequestFormattingStyleCallback): void;
    /** Gets the bold attribute of the style. */
    getBold(callback: RequestBooleanCallback): void;
    /** Gets values specifying wheather lowercase letters are displayed with capital letters. */
    getCapitals(callback: RequestCapitalsCallback, errorCallback?: ErrorCallback): void;
    /** Gets the style's character scaling, in percent of the average character width. */
    getCharacterScaling(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the style's character spacing value, in twips. */
    getCharacterSpacing(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the culture as a languagecode2-country / regioncode2 string value. */
    getCulture(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the font of the style. */
    getFontName(callback: RequestStringCallback): void;
    /** Gets the font's size of the style. */
    getFontSize(callback: RequestNumberCallback): void;
    /** Gets the style's color used to display the text. */
    getForeColor(callback: RequestStringCallback): void;
    /** Gets the italic attribute of the style. */
    getItalic(callback: RequestBooleanCallback): void;
    /** Gets the name of the style. */
    getName(callback: RequestStringCallback): void;
    /** Gets the strikeout attribute of the style. */
    getStrikeout(callback: RequestBooleanCallback): void;
    /** Gets the style's text background color. */
    getTextBackColor(callback: RequestStringCallback): void;
    /** Gets the underlining styles for the style. */
    getUnderline(callback: RequestFontUnderlineStyleCallback): void;
    /** Sets values specifying automatic sub- or superscripted text. */
    setAutoBaseline(autoBaseline: AutoBaseline, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the baseline alignment, in twips, of the style. */
    setBaseline(baseline: number, callback: EmptyRequestCallback): void;
    /** Sets the bold attribute of the style. */
    setBold(isBold: boolean, callback: EmptyRequestCallback): void;
    /** Sets values specifying wheather lowercase letters are displayed with capital letters. */
    setCapitals(capitals: Capitals, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets or sets the style's character scaling, in percent of the average character width. */
    setCharacterScaling(characterScaling: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the style's character spacing value, in twips. */
    setCharacterSpacing(characterSpacing: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the culture as a languagecode2-country / regioncode2 string value. */
    setCulture(culture: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the font of the style. */
    setFontName(fontName: string, callback: EmptyRequestCallback): void;
    /** Sets the font's size of the style. */
    setFontSize(fontSize: number, callback: EmptyRequestCallback): void;
    /** Sets the style's color used to display the text. */
    setForeColor(color: string, callback: EmptyRequestCallback): void;
    /** Sets the italic attribute of the style. */
    setItalic(isItalic: boolean, callback: EmptyRequestCallback): void;
    /** Sets the name of the style. */
    setName(name: string, callback: EmptyRequestCallback): void;
    /** Sets the strikeout attribute of the style. */
    setStrikeout(strikeout: boolean, callback: EmptyRequestCallback): void;
    /** Sets the style's text background color. */
    setTextBackColor(color: string, callback: EmptyRequestCallback): void;
    /** Sets the underlining styles for the style. */
    setUnderline(underlineStyle: FontUnderlineStyle, callback: EmptyRequestCallback): void;
}
