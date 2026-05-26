import { ObjectBase } from '../ObjectBase.js';
import { ApplicationFieldCollection } from '../ApplicationFieldCollection.js';
import { CommentCollection } from '../CommentCollection.js';
import { DocumentLinkCollection } from '../DocumentLinkCollection.js';
import { DocumentTargetCollection } from '../DocumentTargetCollection.js';
import { EditableRegionCollection } from '../EditableRegionCollection.js';
import { FormFieldCollection } from '../FormFieldCollection.js';
import { FrameCollection } from '../FrameCollection.js';
import { HypertextLinkCollection } from '../HypertextLinkCollection.js';
import { LineCollection } from '../LineCollection.js';
import { MisspelledWordCollection } from '../MisspelledWordCollection.js';
import { ParagraphCollection } from '../ParagraphCollection.js';
import { Selection } from '../Selection.js';
import { SubTextPartCollection } from '../SubTextPartCollection.js';
import { TableCollection } from '../TableCollection.js';
import { TableOfContentsCollection } from '../TableOfContentsCollection.js';
import { TextCharCollection } from '../TextCharCollection.js';
import { TextFieldCollection } from '../TextFieldCollection.js';
import { TrackedChangeCollection } from '../TrackedChangeCollection.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/FormattedText.d.ts.
 */
export class FormattedTextBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.FormattedText} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.FormattedText} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.FormattedText} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('find', 'getTextFieldsByType');
    }

    /**
     * Finds a text string. The search starts at the specified position.
     * @param {string} text Specifies the text to search for.
     * @param {number} start Specifies the text position where the search starts, beginning with 0. If this value is -1, the search begins at the current text input position.
     * @param {TXTextControlTypeDefinition.FindOptions | null} options Optional. Specifies search options. It can be a combination of the FindOptions values.
     * @returns {Promise<number>}
     */
    find(text, start, options) {
        return RequestHelper.Promise(
            this._txInternal.find,
            text,
            start,
            options,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Returns an array of static text field information objects.
     * @param {TXTextControlTypeDefinition.TextFieldType} fieldType
     * @returns {Promise<TXTextControlTypeDefinition.TextFieldInfo[]>}
     */
    getTextFieldsByType(fieldType) {
        return RequestHelper.Promise(
            this._txInternal.getTextFieldsByType,
            fieldType,
            CallbackType.RequestTextFieldInfoArrayCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * Gets a collection of all Microsoft Word fields that have been created or imported from a Microsoft Word or RTF document.
     * @type {ApplicationFieldCollection}
     */
    get applicationFields() { return new ApplicationFieldCollection(this._txInternal.applicationFields); }

    /**
     * Gets a collection of all comments in this text part.
     * @type {CommentCollection}
     */
    get comments() { return new CommentCollection(this._txInternal.comments); }

    /**
     * Gets a collection of all links which point to targets in the same document.
     * @type {DocumentLinkCollection}
     */
    get documentLinks() { return new DocumentLinkCollection(this._txInternal.documentLinks); }

    /**
     * Gets a collection of all document targets.
     * @type {DocumentTargetCollection}
     */
    get documentTargets() { return new DocumentTargetCollection(this._txInternal.documentTargets); }

    /**
     * Gets a collection of all editable regions.
     * @type {EditableRegionCollection}
     */
    get editableRegions() { return new EditableRegionCollection(this._txInternal.editableRegions); }

    /**
     * Gets a collection of all form fields in the text part.
     * @type {FormFieldCollection}
     */
    get formFields() { return new FormFieldCollection(this._txInternal.formFields); }

    /**
     * Gets a collection of all frames in the document.
     * @type {FrameCollection}
     */
    get frames() { return new FrameCollection(this._txInternal.frames); }

    /**
     * Gets a collection of all hypertext links.
     * @type {HypertextLinkCollection}
     */
    get hypertextLinks() { return new HypertextLinkCollection(this._txInternal.hypertextLinks); }

    /**
     * Gets a collection of all text lines.
     * @type {LineCollection}
     */
    get lines() { return new LineCollection(this._txInternal.lines); }

    /**
     * Gets a collection of all misspelled words.
     * @type {MisspelledWordCollection}
     */
    get misspelledWords() { return new MisspelledWordCollection(this._txInternal.misspelledWords); }

    /**
     * Gets a collection of all paragraphs.
     * @type {ParagraphCollection}
     */
    get paragraphs() { return new ParagraphCollection(this._txInternal.paragraphs); }

    /**
     * Gets the current selection.
     * @type {Selection}
     */
    get selection() { return new Selection(this._txInternal.selection); }

    /**
     * Gets the current subtextparts.
     * @type {SubTextPartCollection}
     */
    get subTextParts() { return new SubTextPartCollection(this._txInternal.subTextParts); }

    /**
     * Gets a collection of all tables.
     * @type {TableCollection}
     */
    get tables() { return new TableCollection(this._txInternal.tables); }

    /**
     * Gets the current tables of contents.
     * @type {TableOfContentsCollection}
     */
    get tablesOfContents() { return new TableOfContentsCollection(this._txInternal.tablesOfContents); }

    /**
     * Gets a collection of all text characters.
     * @type {TextCharCollection}
     */
    get textChars() { return new TextCharCollection(this._txInternal.textChars); }

    /**
     * Gets a collection of all standard text fields.
     * @type {TextFieldCollection}
     */
    get textFields() { return new TextFieldCollection(this._txInternal.textFields); }

    /**
     * Gets the Text part type.
     * @type {string}
     */
    get textPartType() { return this._txInternal.textPartType; }

    /**
     * Gets a collection of all tracked changes.
     * @type {TrackedChangeCollection}
     */
    get trackedChanges() { return new TrackedChangeCollection(this._txInternal.trackedChanges); }

    //#endregion
}
