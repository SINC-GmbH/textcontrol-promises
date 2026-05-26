import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SaveSettings.d.ts.
 */
export class SaveSettingsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.SaveSettings} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SaveSettings} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.SaveSettings} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The document's author which will be saved in the document.
     * @type {string | undefined}
     */
    get author() { return this._txInternal.author; }

    /**
     * The document's creation date which will be saved in the document.
     * @type {number | undefined}
     */
    get creationDate() { return this._txInternal.creationDate; }

    /**
     * The application, which has created the document.
     * @type {string | undefined}
     */
    get creatorApplication() { return this._txInternal.creatorApplication; }

    /**
     * HTML only.
     * @type {TXTextControlTypeDefinition.SaveSettings.CssSaveMode | undefined}
     */
    get cssSaveMode() { return this._txInternal.cssSaveMode; }

    /**
     * Specifies how a document can be accessed after it has been opened.
     * @type {TXTextControlTypeDefinition.DocumentAccessPermissions | undefined}
     */
    get documentAccessPermissions() { return this._txInternal.documentAccessPermissions; }

    /**
     * Sets the document's keywords which will be saved in the document.
     * @type {Array<string> | undefined}
     */
    get documentKeywords() { return this._txInternal.documentKeywords; }

    /**
     * Specifies an array of strings containing Javascript.
     * @type {string | undefined}
     */
    get documentLevelJavaScriptActions() { return this._txInternal.documentLevelJavaScriptActions; }

    /**
     * Sets the document's subject string which will be saved in the document.
     * @type {string | undefined}
     */
    get documentSubject() { return this._txInternal.documentSubject; }

    /**
     * Sets the document's title that will be saved in the document.
     * @type {string | undefined}
     */
    get documentTitle() { return this._txInternal.documentTitle; }

    /**
     * Specifies whether or not form fields are flattened when the document is saved.
     * @type {boolean}
     */
    get flattenFormFields() { return this._txInternal.flattenFormFields; }

    /**
     * Sets a value between 1 and 100, which is the quality of a lossy image compression used when a document is saved.
     * @type {number | undefined}
     */
    get imageCompressionQuality() { return this._txInternal.imageCompressionQuality; }

    /**
     * Sets the format used for saving all images contained in the document.
     * @type {number | undefined}
     */
    get imageExportFilterIndex() { return this._txInternal.imageExportFilterIndex; }

    /**
     * Sets the maximum resolution for all images in the document in dots per inch when the document is saved.
     * @type {number | undefined}
     */
    get imageMaxResolution() { return this._txInternal.imageMaxResolution; }

    /**
     * Sets the date the document is last modified.
     * @type {number | undefined}
     */
    get lastModificationDate() { return this._txInternal.lastModificationDate; }

    /**
     * Specifies a password for the document's access permissions.
     * @type {string | undefined}
     */
    get masterPassword() { return this._txInternal.masterPassword; }

    /**
     * Specifies data to be omitted when the document is saved.
     * @type {TXTextControlTypeDefinition.SaveSettings.OmittedContent | undefined}
     */
    get omittedContent() { return this._txInternal.omittedContent; }

    /**
     * Specifies how reporting merge blocks are handled when a document is saved.
     * @type {TXTextControlTypeDefinition.SaveSettings.ReportingMergeBlockFormat | undefined}
     */
    get reportingMergeBlockFormat() { return this._txInternal.reportingMergeBlockFormat; }

    /**
     * Specifies whether or not the document background color is saved.
     * @type {boolean | undefined}
     */
    get saveDocumentBackColor() { return this._txInternal.saveDocumentBackColor; }

    /**
     * Specifies the password for the user when the document is reopened.
     * @type {string | undefined}
     */
    get userPassword() { return this._txInternal.userPassword; }

    //#endregion
}
