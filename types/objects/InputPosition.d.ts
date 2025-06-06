declare namespace TXTextControl {
    /** Represents the current text input position of a document. */
    interface InputPosition {
        /** Gets the size of the caret, in pixels, at the current text input position. */
        getCaretSize(callback: RequestSizeCallback, errorCallback?: ErrorCallback): void;
        /** Gets the column number of the current text input position. */
        getColumn(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets whether the current text input position when the TextControl is inactive and the blinking caret is not visible. */
        getInactiveMarker(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the line number of the current text input position. */
        getLine(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the geometric location of the current text input position. */
        getLocation(callback: RequestPointCallback, errorCallback?: ErrorCallback): void;
        /** Gets the page number of the current text input position. */
        getPage(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the page number in the section containing the current text input position. */
        getPageInSection(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the section number of the current text input position. */
        getSection(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the text position of the current text input position. */
        getTextPosition(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Scrolls the contents of a Text Control so that the current input position becomes visible. */
        scrollTo(scrollPosition: InputPosition.ScrollPosition, callback: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets whether the current text input position when the TextControl is inactive and the blinking caret is not visible. */
        setInactiveMarker(isInactive: boolean, callback: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}