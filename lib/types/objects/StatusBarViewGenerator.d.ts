import { Callback, RequestStringCallback, RequestBooleanCallback, EmptyRequestCallback } from '../callbacks';
import { StatusBarBorderStyle } from '../enums';
import { StatusBarViewGeneratorColors } from './StatusBarViewGeneratorColors';

/** Provides functions and properties for requesting properties and executing server side methods for the status bar. */
export interface StatusBarViewGenerator {
    /**
     * Gets the border style of the status bar.
     * @returns Always returns Fixed3D.
     */
    getBorderStyle(callback: Callback<StatusBarBorderStyle>, errorCallback?: ErrorCallback): void;
    /** Gets the text in the 'Column' area of the status bar. */
    getColumnText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text in the 'Line' area of the status bar. */
    getLineText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text in the 'Page counter' area of the status bar. */
    getPageCounterText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text in the 'Page' area of the status bar. */
    getPageText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text in the 'Section counter' area of the status bar. */
    getSectionCounterText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text in the 'Section' area of the status bar. */
    getSectionText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the column number of the current text input position. */
    getShowColumn(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the key state of the current insertion mode, insert or overwrite. */
    getShowKeyStates(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the language of the text selection or the text input position. */
    getShowLanguage(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the line number of the current text input position. */
    getShowLine(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the page number of the current text input position. */
    getShowPage(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the number of pages the document consists of. */
    getShowPageCounter(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the section number of the current text input position. */
    getShowSection(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the number of sections the document consists of. */
    getShowSectionCounter(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the current zoom factor. */
    getShowZoom(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar displays a track bar instead of a simple number to show and to set the zooming factor. */
    getShowZoomTrackBar(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Resets all display colors of a status bar to their system dependent default values. */
    resetDisplayColors(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /**
     * Sets the border style of the status bar.
     * @deprecated Obsolete. This method will be removed in one of the next versions. Since version 33.0 it's not possible to change the border style of the status bar anymore.
     */
    setBorderStyle(value: StatusBarBorderStyle, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the text in the 'Column' area of the status bar. */
    setColumnText(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the text in the 'Line' area of the status bar. */
    setLineText(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the text in the 'Page counter' area of the status bar. */
    setPageCounterText(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the text in the 'Page' area of the status bar. */
    setPageText(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the text in the 'Section counter' area of the status bar. */
    setSectionCounterText(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the text in the 'Section' area of the status bar. */
    setSectionText(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the column number of the current text input position. */
    setShowColumn(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the key state of the current insertion mode, insert or overwrite. */
    setShowKeyStates(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the language of the text selection or the text input position. */
    setShowLanguage(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the line number of the current text input position. */
    setShowLine(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the page number of the current text input position. */
    setShowPage(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the number of pages the document consists of. */
    setShowPageCounter(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the section number of the current text input position. */
    setShowSection(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the number of sections the document consists of. */
    setShowSectionCounter(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar shows the current zoom factor. */
    setShowZoom(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Specifies whether the status bar displays a track bar instead of a simple number to show and to set the zooming factor. */
    setShowZoomTrackBar(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;

    /** The displayed colors of the status bar. */
    displayColors: StatusBarViewGeneratorColors;
}
