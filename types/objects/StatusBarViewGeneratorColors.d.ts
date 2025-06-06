declare namespace TXTextControl {
    /** 
     * The StatusBarViewGeneratorColors object provides methods for getting, setting or resetting the display colors of a status bar. 
     * By default the display colors depend on sytem colors on the server. With this object all colors can be individually designed. 
     */
    interface StatusBarViewGeneratorColors {
        /** Gets the background color at the left edge of the status bar. */
        getBackColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the background color at the bottom of the status bar. */
        getBackColorBottom(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the background color in the middle of the status bar. */
        getBackColorMiddle(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the background color at the top of the status bar. */
        getBackColorTop(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the color used for text and numbers. */
        getForeColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** 
         * Gets the color of the status bar's frames.
         * @deprecated Obsolete. This method will be removed in one of the next versions. Since version 33.0 the status bar doesn't support frames anymore.
         */
        getFrameColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** 
         * Gets the background color at the right edge of the status bar.
         * @deprecated Obsolete. This method will be removed in one of the next versions. Since version 33.0 the status bar doesn't support horizontal gradients anymore.
         */
        getGradientBackColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /**
         * Gets the color of the dark part of a separator. 
         * @deprecated Obsolete. This method will be removed in one of the next versions. Since version 33.0 the status bar doesn't support gradients in separators anymore.
         */
        getSeparatorColorDark(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /**
         * Gets the color of the light part of a separator. 
         * @deprecated Obsolete. This method will be removed in one of the next versions. Since version 33.0 the status bar doesn't support gradients in separators anymore.
         */
        getSeparatorColorLight(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Resets all colors to their system dependent default values. */
        reset(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Resets the ruler bar's backColor to its system dependent default value. */
        resetBackColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Resets the status bar's backColorBottom to its system dependent default value. */
        resetBackColorBottom(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Resets the status bar's backColorMiddle to its system dependent default value. */
        resetBackColorMiddle(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Resets the status bar's backColorTop to its system dependent default value. */
        resetBackColorTop(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Resets the status bar's foreColor to its system dependent default value. */
        resetForeColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** 
         * Resets the status bar's frameColor to its system dependent default value.
         * @deprecated Obsolete. This method will be removed in one of the next versions. Since version 33.0 the status bar doesn't support frames anymore. 
         */
        resetFrameColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** 
         * Resets the status bar's gradientBackColor to its system dependent default value.
         * @deprecated Obsolete. This method will be removed in one of the next versions. Since version 33.0 the status bar doesn't support horizontal gradients anymore.
         */
        resetGradientBackColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Resets the separator color to its default value. */
        resetSeparatorColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** 
         * Resets the status bar's separatorColorDark to its system dependent default value.
         * @deprecated Obsolete. This method will be removed in one of the next versions. Since version 33.0 the status bar doesn't support gradients in separators anymore.
         */
        resetSeparatorColorDark(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** 
         * Resets the status bar's separatorColorLight to its system dependent default value.
         * @deprecated Obsolete. This method will be removed in one of the next versions. Since version 33.0 the status bar doesn't support gradients in separators anymore.
         */
        resetSeparatorColorLight(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the background color at the left edge of the ruler bar. */
        setBackColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the background color at the bottom of the status bar. */
        setBackColorBottom(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the background color in the middle of the status bar. */
        setBackColorMiddle(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the background color at the top of the status bar. */
        setBackColorTop(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the color used for text and numbers. */
        setForeColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** 
         * Sets the color of the status bar's frames.
         * @deprecated Obsolete. This method will be removed in one of the next versions. Since version 33.0 the status bar doesn't support frames anymore.
         */
        setFrameColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** 
         * Sets the background color at the right edge of the status bar.
         * @deprecated Obsolete. This method will be removed in one of the next versions. Since version 33.0 the status bar doesn't support horizontal gradients anymore.
         */
        setGradientBackColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the separator color. */
        setSeparatorColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** 
         * Sets the color of the dark part of a separator.
         * @deprecated Obsolete. This method will be removed in one of the next versions. Since version 33.0 the status bar doesn't support gradients in separators anymore.
         */
        setSeparatorColorDark(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** 
         * Sets the color of the light part of a separator.
         * @deprecated Obsolete. This method will be removed in one of the next versions. Since version 33.0 the status bar doesn't support gradients in separators anymore.
         */
        setSeparatorColorLight(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}