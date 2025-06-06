declare namespace TXTextControl {
    /** Represents a single row of a table in a Text Control document. */
    interface TableRow {
        /** Gets a value specifying how the table row is formatted at page breaks. */
        getAllowPageBreak(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the formatting attributes of a table row. */
        getCellFormat(callback: RequestCellFormatCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value specifying whether the table row is part of the table's header. */
        getIsHeader(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the minimum height, in twips, of the table row. */
        getMinimumHeight(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the number of the table row represented through this table row object. */
        getRow(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Selects the table row. */
        select(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying how the table row is formatted at page breaks. */
        setAllowPageBreak(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value specifying whether the table row is part of the table's header. */
        setIsHeader(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the minimum height, in twips, of the table row. */
        setMinimumHeight(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}