import { SubTextPartCollection } from "./SubTextPartCollection";
import { Selection } from "./Selection";
import { TableCollection } from "./TableCollection";
import { CallbackType, RequestHelper } from "./helper/module";
import { ApplicationFieldCollection } from "./ApplicationFieldCollection";
import { FormFieldCollection } from "./FormFieldCollection";
import { EditableRegionCollection } from "./EditableRegionCollection";
import { InputPosition } from "./InputPosition";

export class TextControlContext {
    /** @type {Selection} */
    // @ts-ignore
    get selection() { return new Selection(TXTextControl.selection); }

    /** @type {TableCollection} */
    // @ts-ignore
    get tables() { return new TableCollection(TXTextControl.tables); }

    /** @type {SubTextPartCollection} */
    // @ts-ignore
    get subTextParts() { return new SubTextPartCollection(TXTextControl.subTextParts); }

    /** @type {ApplicationFieldCollection} */
    // @ts-ignore
    get applicationFields() { return new ApplicationFieldCollection(TXTextControl.applicationFields); }

    /** @type {FormFieldCollection} */
    // @ts-ignore
    get formFields() { return new FormFieldCollection(TXTextControl.formFields); }

    /** @type {EditableRegionCollection} */
    // @ts-ignore
    get editableRegions() { return new EditableRegionCollection(TXTextControl.editableRegions); }
 
    /** @type {InputPosition} */
    // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
    async setInputPositionByTextPosition(textPosition, textFieldPosition){
         // @ts-ignore
        return RequestHelper.Promise(TXTextControl.setInputPositionByTextPosition,
            textPosition, 
            textFieldPosition, 
            CallbackType.EmptyRequestCallback, 
            CallbackType.ErrorCallback);
    }
    //#endregion
}