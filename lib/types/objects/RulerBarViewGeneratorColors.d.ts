import { RequestStringCallback, EmptyRequestCallback } from '../callbacks';

/**
 * The RulerBarViewGeneratorColors object provides methods for getting, setting or resetting the display colors of a ruler bar.
 * By default the display colors depend on sytem colors on the server. With this object all colors can be individually designed.
 */
export interface RulerBarViewGeneratorColors {
    /** Gets the background color at the left or top edge of the ruler bar. */
    getBackColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the color used for the numbers of the ruler. */
    getForeColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the background color at the right or bottom edge of the ruler bar. */
    getGradientBackColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the color of the ruler. */
    getRulerColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the color of dark separators. */
    getSeparatorColorDark(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the color of light separators. */
    getSeparatorColorLight(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Resets the ruler bar's backColor to its system dependent default value. */
    resetBackColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Resets the ruler bar's foreColor to its system dependent default value. */
    resetForeColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Resets the ruler bar's gradientBackColor to its system dependent default value. */
    resetGradientBackColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Resets the ruler bar's rulerColor to its system dependent default value. */
    resetRulerColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Resets the ruler bar's separatorColorDark to its system dependent default value. */
    resetSeparatorColorDark(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Resets the ruler bar's separatorColorLight to its system dependent default value. */
    resetSeparatorColorLight(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the background color at the left or top edge of the ruler bar. */
    setBackColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the color used for the numbers of the ruler. */
    setForeColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the background color at the right or bottom edge of the ruler bar. */
    setGradientBackColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the color of the ruler. */
    setRulerColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the color of dark separators. */
    setSeparatorColorDark(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the color of light separators. */
    setSeparatorColorLight(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
