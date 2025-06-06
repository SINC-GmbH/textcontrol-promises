declare namespace TXTextControl {
    /** 
     * The InputFormat object represents all formatting attributes at the current text input position. 
     * If text is selected and the selection has no common value for a certain attribute, the corresponding property is null.
     */
    interface InputFormat {
        /** The addEventListener function registers event listener functions on the InputFormat object. */
        addEventListener<T extends keyof InputFormatEventMap>(eventName: T, callback: InputFormatEventMap[T]): void;
        /** Gets a value specifying whether all frame lines, including all inner frame lines, are set for the selected text. */
        getAllFrameLines(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether text is bold at the current input position. */
        getBold(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether text is bottom aligned at the current input position. */
        getBottomAligned(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets bottom's paragraph distance, in twips, at the current input position. */
        getBottomDistance(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether there is a complete frame around the text. */
        getBoxFrame(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the bullet character at the current input position. */
        getBulletCharacter(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether there is a bulleted list at the current input position. */
        getBulletedList(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether text is centered at the current input position. */
        getCentered(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the font family at the current input position. */
        getFontFamily(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the font's size, in points, at the current input position. */
        getFontSize(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the color used to display the frame fill color at the current input position. */
        getFrameFillColor(callback: RequestColorStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the color used to display the color of frame lines at the current text input position. */
        getFrameLineColor(callback: RequestColorStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the line width, in twips, of the paragraph's or table's frame at the current input position. */
        getFrameLineWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the hanging indent, in twips, at the current input position. */
        getHangingIndent(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether all inner horizontal frame lines are set for the selected text. */
        getInnerHorizontalFrameLines(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether all inner vertical frame lines are set for the selected text. */
        getInnerVerticalFrameLines(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether the text is italic at the current input position. */
        getItalic(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether text is justified at the current input position. */
        getJustified(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether text is left aligned at the current input position. */
        getLeftAligned(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether there is a frame line at the left side of the text. */
        getLeftFrameLine(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the left indent, in twips, at the current input position. */
        getLeftIndent(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether the writung direction is left-to-right at the current input position. */
        getLeftToRight(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the line spacing, in percent, at the current input position. */
        getLinespacing(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets an array of all supported number formats for numbered and structured lists. */
        getNumberFormats(callback: RequestNumberFormatsCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether there is a numbered list at the current input position. */
        getNumberedList(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the number format for a numbered list at the current input position. */
        getNumberedListFormat(callback: RequestNumberFormatCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether text is right aligned at the current input position. */
        getRightAligned(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether there is a frame line at the right side of the text. */
        getRightFrameLine(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the right indent, in twips, at the current input position. */
        getRightIndent(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether the writing direction is right-to-left at the current input position. */
        getRightToLeft(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether the text is strikeout at the current input position. */
        getStrikeout(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the structure level of all selected paragraphs. */
        getStructureLevel(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether there is a structured list at the current input position. */
        getStructuredList(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the number format for a structured list at the current input position. */
        getStructuredListFormat(callback: RequestNumberFormatCallback, errorCallback?: ErrorCallback): void;
        /** Gets the formatting style name at the current input position. */
        getStyleName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Returns an array of the names of all formatting styles, the document contains. */
        getStyleNames(callback: RequestStringsCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether text is subscript at the current input position. */
        getSubscript(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether text is superscript at the current input position. */
        getSuperscript(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Returns an array of strings specifying all supported fonts. */
        getSupportedFontFamilies(callback: RequestStringsCallback, errorCallback?: ErrorCallback): void;
        /** Gets an array of strings specifying all possible font sizes for the font at the text input position. */
        getSupportedFontSizes(callback: RequestNumbersCallback, fontFamily?: string, errorCallback?: ErrorCallback): void;
        /** Gets an array of all supported underline styles. */
        getSupportedUnderlineStyles(callback: RequestNumbersCallback, errorCallback?: ErrorCallback): void;
        /** Gets the color used to display the text's background color at the current input position. */
        getTextBackColor(callback: RequestColorStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the color used to display the text at the current input position. */
        getTextColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether text is top aligned at the current input position. */
        getTopAligned(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a top paragraph distance, in twips, at the current input position. */
        getTopDistance(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether there is a frame line at the top of the text. */
        getTopFrameLine(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether text is underlined at the current input position. */
        getUnderline(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying the style at the current input position. */
        getUnderlineStyle(callback: RequestFontUnderlineStyleCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether text is vertically centered at the current text input position. */
        getVerticallyCentered(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** The removeListener function removes the specified event listener from the InputFormat object. */
        removeEventListener<T extends keyof EventMap>(eventName: T, callback: EventMap[T]): void;
        /** Sets a value specifying whether all frame lines, including all inner frame lines, are set for the selected text. */
        setAllFrameLines(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether text is bold at the current input position. */
        setBold(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether text is bottom aligned at the current input position. */
        setBottomAligned(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a bottom paragraph distance, in twips, at the current input position. */
        setBottomDistance(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether there is a complete frame around the text. */
        setBoxFrame(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the bullet character at the current input position. */
        setBulletCharacter(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether there is a bulleted list at the current input position. */
        setBulletedList(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether text is centered at the current input position. */
        setCentered(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the font family at the current input position. */
        setFontFamily(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the font's size, in points, at the current input position. */
        setFontSize(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the color used to display the frame fill color at the current input position. */
        setFrameFillColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the color used to display the color of frame lines at the current text input position. */
        setFrameLineColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the line width, in twips, of the paragraph's or table's frame at the current input position. */
        setFrameLineWidth(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the hanging indent, in twips, at the current input position. */
        setHangingIndent(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether all inner horizontal frame lines are set for the selected text. */
        setInnerHorizontalFrameLines(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether all inner vertical frame lines are set for the selected text. */
        setInnerVerticalFrameLines(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether the text is italic at the current input position. */
        setItalic(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether text is justified at the current input position. */
        setJustified(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether text is left aligned at the current input position. */
        setLeftAligned(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether there is a frame line at the left side of the text. */
        setLeftFrameLine(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the left indent, in twips, at the current input position. */
        setLeftIndent(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether the writung direction is left-to-right at the current input position. */
        setLeftToRight(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the line spacing, in percent, at the current input position. */
        setLinespacing(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether there is a numbered list at the current input position. */
        setNumberedList(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the number format for a numbered list at the current input position. */
        setNumberedListFormat(value: NumberFormat, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether text is right aligned at the current input position. */
        setRightAligned(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether there is a frame line at the right side of the text. */
        setRightFrameLine(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the right indent, in twips, at the current input position. */
        setRightIndent(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether the writing direction is right-to-left at the current input position. */
        setRightToLeft(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether the text is strikeout at the current input position. */
        setStrikeout(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the structure level of all selected paragraphs. */
        setStructureLevel(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether there is a structured list at the current input position. */
        setStructuredList(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the number format for a structured list at the current input position. */
        setStructuredListFormat(value: NumberFormat, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the formatting style name at the current input position. */
        setStyleName(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether text is subscript at the current input position. */
        setSubscript(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether text is superscript at the current input position. */
        setSuperscript(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the color used to display the text background color at the current input position. */
        setTextBackColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the color used to display the text at the current input position as a CSS color string. */
        setTextColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether text is top aligned at the current input position. */
        setTopAligned(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a top paragraph distance, in twips, at the current input position. */
        setTopDistance(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether there is a frame line at the top of the text. */
        setTopFrameLine(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether text is underlined at the current input position. */
        setUnderline(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying the style at the current input position. */
        setUnderlineStyle(value: FontUnderlineStyle, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether text is vertically centered at the current text input position. */
        setVerticallyCentered(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}