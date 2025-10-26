import { RequestSizeCallback, RequestNumberCallback, RequestBooleanCallback, RequestPointCallback, EmptyRequestCallback } from '../callbacks';

export namespace InputPosition {
    /** Determines a position to where the input position is scrolled. */
    export enum ScrollPosition {
        /**
         * Scrolls the current input position into the visible part of the document
         * using a default position depending on the previous position.
         */
        Auto,
        /** Scrolls the input position to the left side of the visible portion of the document */
        Left,
        /** Scrolls the input position to the right side of the visible portion of the document. */
        Right,
        /** Scrolls the input position to the top of the visible portion of the document. */
        Top,
        /** Scrolls the input position to the bottom of the visible portion of the document. */
        Bottom,
    }
}
/** Represents the current text input position of a document. */
export interface InputPosition {
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
