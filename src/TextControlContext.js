import { SubTextPartCollection } from "./SubTextPartCollection";
import { Selection } from "./Selection";
import { TableCollection } from "./TableCollection";
import { CallbackType, RequestHelper, waitUntil } from "./helper/module";
import { ApplicationFieldCollection } from "./ApplicationFieldCollection";
import { FormFieldCollection } from "./FormFieldCollection";
import { EditableRegionCollection } from "./EditableRegionCollection";
import { InputPosition } from "./InputPosition";

/** @class */
export class TextControlContext {
    /**
     * indicates if TXTextControl is ready
     * @type {boolean}
     */
    #isTextControlLoaded = false;

    /** @type {Selection} */
    get selection() { return new Selection(TXTextControl.selection); }

    /** @type {TableCollection} */
    get tables() { return new TableCollection(TXTextControl.tables); }

    /** @type {SubTextPartCollection} */
    get subTextParts() { return new SubTextPartCollection(TXTextControl.subTextParts); }

    /** @type {ApplicationFieldCollection} */
    get applicationFields() { return new ApplicationFieldCollection(TXTextControl.applicationFields); }

    /** @type {FormFieldCollection} */
    get formFields() { return new FormFieldCollection(TXTextControl.formFields); }

    /** @type {EditableRegionCollection} */
    get editableRegions() { return new EditableRegionCollection(TXTextControl.editableRegions); }

    /** @type {InputPosition} */
    get inputPosition() { return new InputPosition(TXTextControl.inputPosition); }

    //#region functions
    /**
     * Loads text in a certain format. The complete contents of the web editor are replaced.
     * @param {any} streamType:StreamType
     * @param {string} base64Data 
     * @param {any=} loadSettings:LoadSettings
     * @returns {Promise<any>} LoadDocumentCallbackData
     */
    async load(streamType, base64Data, loadSettings) {
        return RequestHelper.Promise(TXTextControl.load,
            streamType,
            base64Data,
            CallbackType.LoadDocumentCallback,
            loadSettings,
            CallbackType.ErrorCallback);
    }

    /**
     * Saves the current document in a certain format and sends the result back asynchronously by calling a given callback function.
     * @param {any} streamType:StreamType
     * @param {any=} saveSettings:SaveSettings
     * @returns {Promise<any>} SaveDocumentResult
     */
    async save(streamType, saveSettings) {
        return RequestHelper.Promise(TXTextControl.save,
            streamType,
            CallbackType.SaveDocumentResultCallback,
            saveSettings,
            CallbackType.ErrorCallback);
    }

    /**
     * Sets a new input position from a text position.
     * @param {number} textPosition
     * @param {any} textFieldPosition: TextFieldPosition
     * @returns {Promise<void>}
     */
    async setInputPositionByTextPosition(textPosition, textFieldPosition) {
        return RequestHelper.Promise(TXTextControl.setInputPositionByTextPosition,
            textPosition,
            textFieldPosition,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback);
    }

    /**
     * Sets the component render mode.
     * @param {TXTextControl.ComponentRenderMode} value
     */
    async setRenderMode(value) {
        return RequestHelper.Promise(TXTextControl.setRenderMode,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback);
    }

    /**
     * Initializes the document editor
     * @param {TXTextControl.ComponentSettings} componentSettings
     * @returns {Promise<void>}
     */
    async init(componentSettings) {
        return new Promise(async (resolve, reject) => {
            if (this.#isTextControlLoaded) resolve();

            let txDocumentEditorResourceUrl = new URL("/GetResource?name=tx-document-editor.min.js", componentSettings.webSocketURL);

            //load tx resource and await global object to be defined
            var script = document.createElement('script');
            script.setAttribute('src', txDocumentEditorResourceUrl.href);
            document.head.appendChild(script);
            await this.#txTextControlNotUndefined();
            //init document editor
            TXTextControl.addEventListener('textControlLoaded', () => {
                this.#isTextControlLoaded = true;
                resolve();
            });
            TXTextControl.init(componentSettings);
        });
    }

    /**
     * waits until TXTextControlLoaded
     * @returns {Promise<void>}
     */
    async isReady() {
        return waitUntil(() => this.#isTextControlLoaded, 20);
    }
    //#endregion

    //#region private functions
    async #txTextControlNotUndefined() {
        return waitUntil(() => "TXTextControl" in window, 20);
    }
    //#endregion
}