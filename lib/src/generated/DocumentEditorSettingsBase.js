import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/DocumentEditorSettings.d.ts.
 */
export class DocumentEditorSettingsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.DocumentEditorSettings} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.DocumentEditorSettings} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.DocumentEditorSettings} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The unique connection ID string.
     * @type {number | undefined}
     */
    get connectionID() { return this._txInternal.connectionID; }

    /**
     * The culture. (e. g. 'de-DE') Affects date and time string formats, for example.
     * @type {string | undefined}
     */
    get culture() { return this._txInternal.culture; }

    /**
     * The user interface culture. (e. g. 'en-US') Affects the string resource language.
     * @type {string | undefined}
     */
    get uiCulture() { return this._txInternal.uiCulture; }

    /**
     * Sets whether the document's text is read-only, can be selected or is editable.
     * @type {TXTextControlTypeDefinition.EditMode | undefined}
     */
    get editMode() { return this._txInternal.editMode; }

    /**
     * Sets whether a right click opens a context menu or not.
     * @type {boolean | undefined}
     */
    get contextMenusEnabled() { return this._txInternal.contextMenusEnabled; }

    /**
     * The name of a printer the text dimensions and capabilities of which are used to format the document.
     * @type {string | undefined}
     */
    get formattingPrinter() { return this._txInternal.formattingPrinter; }

    /**
     * Time in seconds before stopping reconnection attempts after a connection loss.
     * @type {number | undefined}
     */
    get reconnectTimeout() { return this._txInternal.reconnectTimeout; }

    /**
     * An array of names specifying users who have access to editable regions.
     * @type {string[] | undefined}
     */
    get userNames() { return this._txInternal.userNames; }

    /**
     * Custom query parameters.
     * @type {object | undefined}
     */
    get customQueryParams() { return this._txInternal.customQueryParams; }

    /**
     * Optional. An array of additional WebSocket sub-protocols to be passed to the WebSocket constructor.
     * @type {string[] | undefined}
     */
    get webSocketProtocols() { return this._txInternal.webSocketProtocols; }

    //#endregion
}
