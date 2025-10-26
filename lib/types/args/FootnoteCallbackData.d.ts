import { Footnote } from "../objects";

/** The type of the response parameter of the AddFootnoteCallback callback function. */
export interface FootnoteCallbackData {
    /** The added Footnote */
    footnote: Footnote;
    /** Indicates whether the footnote was added successfully. */
    added: boolean;
}
