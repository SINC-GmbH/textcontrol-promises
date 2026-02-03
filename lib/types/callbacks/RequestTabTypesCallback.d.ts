import { TabType } from "../enums";

/** Callback function for requests expecting a list of TabType objects. */
export type RequestTabTypesCallback = (result: TabType[]) => void;
