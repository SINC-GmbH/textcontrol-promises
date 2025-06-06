declare namespace TXTextControl {
    /**
     * The border style of a status bar.
     * @deprecated Obsolete. This enumeration will be removed in one of the next versions. Since version 33.0 it's not possible to change the border style of the status bar anymore. 
     */
    enum StatusBarBorderStyle {
        /** The status bar has a 3D design and a border with a single line. */
        Fixed3D,
        /** The status bar has a 3D design and no border. */
        Simple3D,
        /** The status bar has a flat design and a border with a single line. */
        FixedSingle,
        /** The status bar has a flat design and no border. */
        Flat,
        /** The status bar has a flat design without a border and with a horizontal color gradient in the background. The colors depend on the color scheme currently set through the system or on the colors set with the DisplayColors property. */
        ColorScheme,
        /** The status bar has a flat design without a border and with a vertical color gradient in the background. The colors depend on the color scheme currently set through the system or on the colors set with the DisplayColors property. */
        VerticalColorScheme
    }
}