import { waitUntil } from './helper/index.js';
import { TextControlContextBase } from './generated/TextControlContextBase.js';
/** @import * as TXTextControlTypeDefinition from "../types/TXTextControlNamespace" */

/** @class */
export class TextControlContext extends TextControlContextBase {

    //#region lifecycle

    /**
     * indicates if TXTextControl is ready
     * @type {boolean}
     */
    #isTextControlLoaded = false;

    /**
     * Loads resource files and initializes the document editor after TXTextControl is available.
     * @param {TXTextControlTypeDefinition.ComponentSettings} componentSettings
     * @param {string} [jsResourceFilePath="/GetResource?name=tx-document-editor.min.js"]
     * @returns {Promise<void>}
     */
    async initialize(componentSettings, jsResourceFilePath = '/GetResource?name=tx-document-editor.min.js') {
        return new Promise(async (resolve) => {
            if (this.#isTextControlLoaded) resolve();

            let txDocumentEditorResourceUrl = new URL(jsResourceFilePath, componentSettings.webSocketURL);

            var script = document.createElement('script');
            script.setAttribute('src', txDocumentEditorResourceUrl.href);
            document.head.appendChild(script);
            await this.#txTextControlNotUndefined();
            TXTextControl.addEventListener('textControlLoaded', () => {
                this.#isTextControlLoaded = true;
                resolve();
            });
            TXTextControl.init(componentSettings);
        });
    }

    /**
     * Waits until TXTextControl has finished loading.
     * @returns {Promise<void>}
     */
    async untilTextControlLoaded() {
        return waitUntil(() => this.#isTextControlLoaded, 20);
    }

    //#endregion

    //#region private

    async #txTextControlNotUndefined() {
        return waitUntil(() => 'TXTextControl' in window, 20);
    }

    //#endregion
}
