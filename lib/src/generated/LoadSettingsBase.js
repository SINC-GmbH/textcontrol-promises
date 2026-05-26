import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/LoadSettings.d.ts.
 */
export class LoadSettingsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.LoadSettings} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.LoadSettings} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.LoadSettings} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * Specifies how the document structure is generated when a PDF document is imported.
     * @type {TXTextControlTypeDefinition.PDFImportSettings | undefined}
     */
    get PDFImportSettings() { return this._txInternal.PDFImportSettings; }

    /**
     * Specifies whether or not a new paragraph is created before text is loaded.
     * @type {boolean | undefined}
     */
    get addParagraph() { return this._txInternal.addParagraph; }

    /**
     * Specifies the format of text fields which are imported.
     * @type {TXTextControlTypeDefinition.ApplicationFieldFormat | undefined}
     */
    get applicationFieldFormat() { return this._txInternal.applicationFieldFormat; }

    /**
     * Specifies an array of strings containing the type names of fields which are to be imported.
     * @type {string[] | undefined}
     */
    get applicationFieldTypeNames() { return this._txInternal.applicationFieldTypeNames; }

    /**
     * Specifies how a document can be accessed after it has been loaded.
     * @type {TXTextControlTypeDefinition.DocumentAccessPermissions | undefined}
     */
    get documentAccessPermissions() { return this._txInternal.documentAccessPermissions; }

    /**
     * Sets a file path that is used to search for resources like images or hypertext links.
     * @type {string | undefined}
     */
    get documentBasePath() { return this._txInternal.documentBasePath; }

    /**
     * SpreadsheetML only.
     * @type {string | undefined}
     */
    get documentPartName() { return this._txInternal.documentPartName; }

    /**
     * Sets a file path that is used to search for resources like images or hypertext links.
     * @type {string | undefined}
     */
    get imageSearchPath() { return this._txInternal.imageSearchPath; }

    /**
     * Specifies whether or not the document background color is loaded.
     * @type {boolean | undefined}
     */
    get loadDocumentBackColor() { return this._txInternal.loadDocumentBackColor; }

    /**
     * Specifies whether or not hypertext links are loaded.
     * @type {boolean | undefined}
     */
    get loadHypertextLinks() { return this._txInternal.loadHypertextLinks; }

    /**
     * Specifies whether or not images are loaded.
     * @type {boolean | undefined}
     */
    get loadImages() { return this._txInternal.loadImages; }

    /**
     * DOCX Format only: Specifies whether or not bookmarks which extend over several characters are converted to SubTextParts.
     * @type {boolean | undefined}
     */
    get loadSubTextParts() { return this._txInternal.loadSubTextParts; }

    /**
     * Specifies the password when the document is restricted with access permissions.
     * @type {number | undefined}
     */
    get masterPassword() { return this._txInternal.masterPassword; }

    /**
     * Specifies how reporting merge blocks are handled when a document is loaded.
     * @type {TXTextControlTypeDefinition.SaveSettings.ReportingMergeBlockFormat | undefined}
     */
    get reportingMergeBlockFormat() { return this._txInternal.reportingMergeBlockFormat; }

    /**
     * Specifies the password for the user to open a password protected document.
     * @type {string | undefined}
     */
    get userPassword() { return this._txInternal.userPassword; }

    //#endregion
}
