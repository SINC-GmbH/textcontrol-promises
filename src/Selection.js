import { ParagraphFormat } from "./ParagraphFormat";
import { RequestHelper, CallbackType } from "./helper/module";

export class Selection {
    //#region properties
    /** @type {any} */
    #txSelection;
    /** @type {number=} */
    #start;
    get start() { return this.#start; }
    /** @type {number=} */
    #length;
    get length() { return this.#length; }

    /** @type {ParagraphFormat} */
    #paragraphFormat;
    get paragraphFormat() { return this.#paragraphFormat; }
    //#enregion

    /**
     * Wrapper für TXTextControl.Selection
     * @param {!any} txSelection 
     */
    constructor(txSelection) {
        this.#txSelection = txSelection;
        this.#bindCallbacks();
        this.#paragraphFormat = new ParagraphFormat(this.#txSelection.paragraphFormat);
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this.#txSelection.setStart = this.#txSelection.setStart.bind(this.#txSelection);
        this.#txSelection.setLength = this.#txSelection.setLength.bind(this.#txSelection);
        this.#txSelection.getStart = this.#txSelection.getStart.bind(this.#txSelection);
        this.#txSelection.getLength = this.#txSelection.getLength.bind(this.#txSelection);
    }

    //#region setter 
    /**
     * @param {number} start
     * @returns {Promise<void>}
     */
    async setStart(start) {
        await RequestHelper.Promise(this.#txSelection.setStart,
            start,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback);
        this.#start = start;
    }

    /**
     * @param {number} length
     * @returns {Promise<void>}
     */
    async setLength(length) {
        await RequestHelper.Promise(this.#txSelection.setLength,
            length,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback);
        this.#length = this.#length;
    }
    //#endregion 

    //#region getter
    /**
     * @returns {Promise<number>}
     */
    async getStart() {
        //v1.0.0
        if (this.#start == null || typeof this.#start === 'undefined') {
            let result = await RequestHelper.Promise(this.#txSelection.getStart,
                CallbackType.RequestNumberCallback,
                CallbackType.ErrorCallback);
            this.#start = result;
        }
        return /** @type {number} */(this.#start);
    }

    /**
     * @returns {Promise<number>}
     */
    async getLength() {
        if (this.#length == null || typeof this.#length === 'undefined') {
            let result = await RequestHelper.Promise(this.#txSelection.getLength,
                CallbackType.RequestNumberCallback,
                CallbackType.ErrorCallback);
            this.#length = result;
        }
        return /** @type {number} */(this.#length);
    }
    //#endregion
}