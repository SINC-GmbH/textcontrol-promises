declare namespace TXTextControl {
    /** Component render mode. */
    enum ComponentRenderMode {
        /** Bitmap based render mode (PNG). */
        Bitmap,
        /** Vector based render mode (SVG). */
        Vector,
        /** Automatic render mode selection depending on current connection quality. */
        Auto
    }
}