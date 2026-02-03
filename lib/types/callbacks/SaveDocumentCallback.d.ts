import { SaveDocumentResult } from "../args";

/** Callback function receiving the document data when saving a document or a selection. */
export type SaveDocumentCallback = (result: SaveDocumentResult) => void;
