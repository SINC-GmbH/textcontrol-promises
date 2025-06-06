declare namespace TXTextControl {
    /** Contains all tables of a Text Control document or part of the document. */
    interface TableCollection extends TableBaseCollection {
        /** Adds a table at the current input position. */
        add(rows: number, columns: number, id?: number, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value indicating whether a new table can be inserted at the current input position. */
        getCanAdd(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets a value indicating whether table's gridlines are shown or not. */
        getGridLines(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Sets a value indicating wether table grid lines are shown or not. */
        setGridLines(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}