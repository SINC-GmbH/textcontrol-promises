declare namespace TXTextControl {
    /** 
     * The TextViewGeneratorColors object provides methods for getting, setting or resetting the display colors of the TextControl. 
     * By default the display colors depend on sytem colors on the server. 
     * With this object all colors can be individually designed.
     */
    interface TextViewGeneratorColors {
        /** Gets the highlight color of a form field containing the current text input position. */
        getActiveFormFieldColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the display color for the shadow at the right and the bottom edge of the pages. */
        getDarkShadowColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the display color for the area around the pages. */
        getDesktopColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the default highlight color of form fields. */
        getFormFieldColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the display color for the label showing which header or footer is activated. */
        getHeaderFooterLabelColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the display color for the dividing line between headers and footers and the main text. */
        getHeaderFooterLineColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** 	Gets the display color for the shadow at the left and the top edge of the pages. */
        getLightShadowColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Resets the text control's DarkShadowColor to its system dependent default value. */
        resetDarkShadowColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Resets the text control's DesktopColor to its system dependent default value. */
        resetDesktopColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** 	Resets the text control's HeaderFooterLabelColor to its system dependent default value. */
        resetHeaderFooterLabelColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Resets the text control's HeaderFooterLineColor to its system dependent default value. */
        resetHeaderFooterLineColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Resets the text control's LightShadowColor to its system dependent default value. */
        resetLightShadowColor(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the highlight color of a form field containing the current text input position. */
        setActiveFormFieldColor(color: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the display color for the shadow at the right and the bottom edge of the pages. */
        setDarkShadowColor(color: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the display color for the area around the pages. */
        setDesktopColor(color: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the default highlight color of a form field. */
        setFormFieldColor(color: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the display color for the label showing which header or footer is activated. */
        setHeaderFooterLabelColor(color: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the display color for the dividing line between headers and footers and the main text. */
        setHeaderFooterLineColor(color: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the display color for the shadow at the left and the top edge of the pages. */
        setLightShadowColor(color: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}