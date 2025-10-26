import { ChangeKind } from "../enums";

/** Callback function for requests expecting a ChangeKind value. */
export type RequestChangeKindCallback = (changeKind: ChangeKind) => void;
