import { RequestNumberCallback, RequestTextFieldInfoArrayCallback } from "../callbacks";
import { FindOptions, TextFieldType } from "../enums";
import { ApplicationFieldCollection } from "./ApplicationFieldCollection";
import { CommentCollection } from "./CommentCollection";
import { DocumentLinkCollection } from "./DocumentLinkCollection";
import { DocumentTargetCollection } from "./DocumentTargetCollection";
import { EditableRegionCollection } from "./EditableRegionCollection";
import { FormFieldCollection } from "./FormFieldCollection";
import { FrameCollection } from "./FrameCollection";
import { HypertextLinkCollection } from "./HypertextLinkCollection";
import { LineCollection } from "./LineCollection";
import { MisspelledWordCollection } from "./MisspelledWordCollection";
import { ParagraphCollection } from "./ParagraphCollection";
import { SubTextPartCollection } from "./SubTextPartCollection";
import { TableCollection } from "./TableCollection";
import { TableOfContentsCollection } from "./TableOfContentsCollection";
import { TextCharCollection } from "./TextCharCollection";
import { TextFieldCollection } from "./TextFieldCollection";
import { TrackedChangeCollection } from "./TrackedChangeCollection";

/** Represents a part of the document. */
export interface FormattedText {
    /**
     * Finds a text string. The search starts at the specified position.
     * @param text Specifies the text to search for.
     * @param start Specifies the text position where the search starts, beginning with 0. If this value is -1, the search begins at the current text input position.
     * @param options Optional. Specifies search options. It can be a combination of the FindOptions values.
     * @param callback If the text searched for is found, the method receives the index (zero-based) of the first character of the search string. If the specified text is not found the method receives -1.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    find(text: string, start: number, options: FindOptions | null, callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Returns an array of static text field information objects. */
    getTextFieldsByType(fieldType: TextFieldType, callback: RequestTextFieldInfoArrayCallback, errorCallback: ErrorCallback): void;

    /** Gets a collection of all Microsoft Word fields that have been created or imported from a Microsoft Word or RTF document. */
    applicationFields: ApplicationFieldCollection;
    /** Gets a collection of all comments in this text part. */
    comments: CommentCollection;
    /** Gets a collection of all links which point to targets in the same document. */
    documentLinks: DocumentLinkCollection;
    /** Gets a collection of all document targets. */
    documentTargets: DocumentTargetCollection;
    /** Gets a collection of all editable regions. */
    editableRegions: EditableRegionCollection;
    /** Gets a collection of all form fields in the text part. */
    formFields: FormFieldCollection;
    /** Gets a collection of all frames in the document. */
    frames: FrameCollection;
    /** Gets a collection of all hypertext links. */
    hypertextLinks: HypertextLinkCollection;
    /** Gets a collection of all text lines. */
    lines: LineCollection;
    /** Gets a collection of all misspelled words. */
    misspelledWords: MisspelledWordCollection;
    /** Gets a collection of all paragraphs. */
    paragraphs: ParagraphCollection;
    /** Gets the current selection. */
    selection: Selection;
    /** Gets the current subtextparts. */
    subTextParts: SubTextPartCollection;
    /** Gets a collection of all tables. */
    tables: TableCollection;
    /** Gets the current tables of contents. */
    tablesOfContents: TableOfContentsCollection;
    /** Gets a collection of all text characters. */
    textChars: TextCharCollection;
    /** Gets a collection of all standard text fields. */
    textFields: TextFieldCollection;
    /** Gets the Text part type. */
    textPartType: string;
    /** Gets a collection of all tracked changes. */
    trackedChanges: TrackedChangeCollection;
}
