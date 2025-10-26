import { RequestNumberCallback, EmptyRequestCallback } from '../callbacks';

export namespace PageMargins {
    /** Determines a certain page margins attribute. */
    export enum Attribute {
        /** Specifies the attribute set through the Left property. */
        Left,
        /** Specifies the attribute set through the Top property. */
        Top,
        /** Specifies the attribute set through the Right property. */
        Right,
        /** Specifies the attribute set through the Bottom property. */
        Bottom,
        /** Specifies all attributes of the PageMargins. */
        All,
    }
}

/** Represents the page margins of a document or document section. The measure depends on the page's unit. */
export interface PageMargins {
    /** Gets the bottom margin of a TX Text Control document or document section. */
    getBottom(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the left margin of a TX Text Control document or document section. */
    getLeft(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the right margin of a TX Text Control document or document section. */
    getRight(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the top margin of a TX Text Control document or document section. */
    getTop(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Sets the bottom margin of a TX Text Control document or document section. */
    setBottom(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the left margin of a TX Text Control document or document section. */
    setLeft(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the right margin of a TX Text Control document or document section. */
    setRight(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the top margin of a TX Text Control document or document section. */
    setTop(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
