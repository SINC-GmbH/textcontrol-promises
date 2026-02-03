/**
 * An object of this type is returned by the function getCultures.
 * It contains the currently used language culture names. (e. g. "de-DE" or "en-US").
 */
export interface CultureSettings {
    /** The control's culture. */
    culture: string;
    /** The control's user interface culture. */
    uiCulture: string;
}
