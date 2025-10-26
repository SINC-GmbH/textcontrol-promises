/** Contains all possible highlight mode values. */
export enum HighlightMode {
    /** The element is never highlighted. */
    Never,
    /**
     * The element is only highlighted, when it contains the current text input position
     * and when the control has the input focus.
     */
    Activated,
    /** The element is always highlighted. */
    Always,
    /** The element's highlight mode is governed by the global highlight mode property. */
    Auto,
}
