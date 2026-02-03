import {
    RequestSectionBreakKindCallback,
    RequestNumbersCallback,
    RequestStringCallback,
    RequestNumberCallback,
    RequestBooleanCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { SectionBreakKind } from '../enums';
import { PageBorder } from './PageBorder';
import { PageMargins } from './PageMargins';
import { PageSize } from './PageSize';

export namespace SectionFormat {
    /** Determines a certain section format attribute. */
    export enum Attribute {
        /** Specifies the attribute set through the BreakKind property. */
        BreakKind,
        /** Specifies the attribute set through the Landscape property. */
        Landscape,
        /** Specifies the attribute set through the Columns property. */
        Columns,
        /** Specifies the attribute set through the ColumnWidths property. */
        ColumnWidths,
        /** Specifies the attribute set through the ColumnDistances property. */
        ColumnDistances,
        /** Specifies the attribute set through the ColumnLineWidth property. */
        ColumnLineWidth,
        /** Specifies the attribute set through the ColumnLineColor property. */
        ColumnLineColor,
        /** Specifies the attribute set through the EqualColumnWidth property. */
        EqualColumnWidth,
        /** Specifies the attribute set through the RestartPageNumbering property. */
        RestartPageNumbering,
        /** Specifies all attributes of the SectionFormat. */
        All,
    }
}

/** Represents the formatting attributes of a section. */
export interface SectionFormat {
    /** Gets the kind of the section break the section starts with. */
    getBreakKind(callback: RequestSectionBreakKindCallback, errorCallback?: ErrorCallback): void;
    /** Gets the distances, in twips, between the columns on a page. */
    getColumnDistances(callback: RequestNumbersCallback, errorCallback?: ErrorCallback): void;
    /** Gets the color of a dividing line between two columns. */
    getColumnLineColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the width of a dividing line between two columns. */
    getColumnLineWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the widths, in twips, of the columns on a page. */
    getColumnWidths(callback: RequestNumbersCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number of columns on a page. */
    getColumns(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether the columns on a page have all the same width and the same distance between them. */
    getEqualColumnWidth(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether the section's page size is in landscape orientation. */
    getLandscape(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether page numbering is restarted at the section's beginning. */
    getRestartPageNumbering(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Sets the kind of the section break the section starts with. */
    setBreakKind(value: SectionBreakKind, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the color of a dividing line between two columns. */
    setColumnLineColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the width of a dividing line between two columns. */
    setColumnLineWidth(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the widths, in twips, of the columns on a page. */
    setColumnWidths(value: number[], callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the number of columns on a page. */
    setColumns(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether the columns on a page have all the same width and the same distance between them. */
    setEqualColumnWidth(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether the section's page size is in landscape orientation. */
    setLandscape(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether page numbering is restarted at the section's beginning. */
    setRestartPageNumbering(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;

    /** Gets the attributes of a section's page border. */
    pageBorder: PageBorder;
    /** Gets the section's page margins. */
    pageMargins: PageMargins;
    /** Gets the section's page size. */
    pageSize: PageSize;
}
