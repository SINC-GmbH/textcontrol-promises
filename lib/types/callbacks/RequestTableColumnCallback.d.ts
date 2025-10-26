import { TableColumn } from "../objects";

/** Callback function for requests expecting a TableColumn object. */
export type RequestTableColumnCallback = (column: TableColumn) => void;
