declare namespace TXTextControl {
    /** The border style of a ruler bar. */
    enum RulerBarBorderStyle {
        /** The ruler bar has a 3D design and no border. */
        Simple3D,
        /** The ruler bar has a flat design and no border. */
        Flat,
        /** The ruler bar has a 3D design and a border with a single line. */
        Fixed3D,
        /** The ruler bar has has a flat design and a border with a single line. */
        FixedSingle,
        /** 
         * The ruler bar has a flat design without a border. 
         * The colors depend on the color scheme currently set through the system 
         * or on the colors set with the displayColors property.
         */
        ColorScheme
    }
}