import { ObjectBase } from '../ObjectBase.js';
import { DocumentEditorSettings } from '../DocumentEditorSettings.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/ComponentSettings.d.ts.
 */
export class ComponentSettingsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.ComponentSettings} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.ComponentSettings} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.ComponentSettings} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The ID of the editor container DIV element.
     * @type {string}
     */
    get containerID() { return this._txInternal.containerID; }

    /**
     * Optional. The container DIV element. Alternative to containerID. If both are specified, containerElement takes precedence.
     * @type {HTMLDivElement | undefined}
     */
    get containerElement() { return this._txInternal.containerElement; }

    /**
     * The WebSocket URL.
     * @type {string}
     */
    get webSocketURL() { return this._txInternal.webSocketURL; }

    /**
     * Optional. The document editor settings
     * @type {DocumentEditorSettings | undefined}
     */
    get editorSettings() { const v = this._txInternal.editorSettings; return v ? new DocumentEditorSettings(v) : undefined; }

    /**
     * Optional. Replace the container element instead of appending ourselves to it as a child.
     * @type {boolean | undefined}
     */
    get replaceContainer() { return this._txInternal.replaceContainer; }

    /**
     * Optional. Is fired as soon as the document editor scaffolding has been inserted into the DOM
     * @type {Function | undefined}
     */
    get domContentLoaded() { return this._txInternal.domContentLoaded; }

    //#endregion
}
