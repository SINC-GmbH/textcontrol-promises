import {
    RequestRulerBarBorderStyleCallback,
    RequestBooleanCallback,
    RequestRulerBarFormulaModeCallback,
    RequestRulerBarScaleUnitCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { RulerBarBorderStyle, RulerBarFormulaMode, RulerBarScaleUnit } from '../enums';
import { RulerBarViewGeneratorColors } from './RulerBarViewGeneratorColors';

/** Provides functions and properties for requesting properties and executing server side methods for a ruler bar. */
export interface RulerBarViewGenerator {
    /** Gets the border style of the ruler bar. */
    getBorderStyle(callback: RequestRulerBarBorderStyleCallback, errorCallback?: ErrorCallback): void;
    /** Gets whether page margins can be set via the ruler bar. */
    getEnablePageMargins(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the formula mode of the ruler bar. */
    getFormulaMode(callback: RequestRulerBarFormulaModeCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value determining the ruler bar's read only mode. */
    getReadOnly(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the scale unit of the ruler bar. */
    getScaleUnit(callback: RequestRulerBarScaleUnitCallback, errorCallback?: ErrorCallback): void;
    /** Resets all display colors of a ruler bar to their system dependent default values. */
    resetDisplayColors(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the border style of the ruler bar. */
    setBorderStyle(value: RulerBarBorderStyle, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets whether page margins can be set via the ruler bar. */
    setEnablePageMargins(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the formula mode of the ruler bar. */
    setFormulaMode(value: RulerBarFormulaMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value determining the ruler bar's read only mode. */
    setReadOnly(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the scale unit of the ruler bar. */
    setScaleUnit(value: RulerBarScaleUnit, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;

    /** The displayed colors of the ruler bar. */
    displayColors: RulerBarViewGeneratorColors;
}
