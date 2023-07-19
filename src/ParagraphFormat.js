import { CallbackType, RequestHelper } from "./helper/module";

export class ParagraphFormat {
    //#region properties
    /** @type {any} */
    #txParagraphFormat;
    /** @type {any=} */
    #alignment;
    get alignment() { return this.#alignment }
    //#enregion

    /**
     * Wrapper für TXTextControl.ParagraphFormat
     * @param {any} txParagraphFormat 
     */
    constructor(txParagraphFormat) {
        this.#txParagraphFormat = txParagraphFormat;
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this.#txParagraphFormat.setAlignment = this.#txParagraphFormat.setAlignment.bind(this.#txParagraphFormat);
    }

    //#region setter
    /**
         * @param {any} alignment
         * @returns {Promise<void>}
         */
    async setAlignment(alignment) {
        await RequestHelper.Promise(this.#txParagraphFormat.setAlignment,
            alignment,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback);
        this.#alignment = this.#alignment;
    }
    //#enregion

    //#region getter
    //#enregion
}