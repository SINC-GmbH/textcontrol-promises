import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/DocumentPermissions.d.ts.
 */
export class DocumentPermissionsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.DocumentPermissions} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.DocumentPermissions} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.DocumentPermissions} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * Specifies whether document content can be copied to the clipboard.
     * @type {boolean}
     */
    get allowCopy() { return this._txInternal.allowCopy; }

    /**
     * Gets or sets a value specifying whether the document can be formatted.
     * @type {boolean}
     */
    get allowFormatting() { return this._txInternal.allowFormatting; }

    /**
     * Gets or sets a value specifying whether formatting styles can be used to format the document.
     * @type {boolean}
     */
    get allowFormattingStyles() { return this._txInternal.allowFormattingStyles; }

    /**
     * Gets or sets a value specifying whether the document can be printed.
     * @type {boolean}
     */
    get allowPrinting() { return this._txInternal.allowPrinting; }

    /**
     * Gets or sets a value specifying whether form fields can be filled in.
     * @type {boolean}
     */
    get allowEditingFormFields() { return this._txInternal.allowEditingFormFields; }

    /**
     * Gets or sets a value specifying whether the document is read only.
     * @type {boolean}
     */
    get readOnly() { return this._txInternal.readOnly; }

    //#endregion
}
