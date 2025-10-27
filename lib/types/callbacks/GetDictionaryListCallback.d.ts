import { DictionaryInfo } from "../objects";

/** Callback function for retrieving a list of dictionary file names. */
export type GetDictionaryListCallback = (dictionaries: DictionaryInfo[]) => void;
