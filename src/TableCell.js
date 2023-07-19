import { CallbackType, RequestHelper } from "./helper/module";

export class TableCell {
    /** @type {any} */
    #txTableCell;

    /** @type {number=} */
    #start;
    get start() { return this.#start; }
    /** @type {number=} */
    #length;
    get length() { return this.#length; }
    /** @type {string=} */
    #text;
    get text() { return this.#text; }

    /**
     * Wrapper für TXTextControl.TableCell
     * @param {*} txTableCell 
     */
    constructor(txTableCell) {
        this.#txTableCell = txTableCell;
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this.#txTableCell.getStart = this.#txTableCell.getStart.bind(this.#txTableCell);
        this.#txTableCell.getLength = this.#txTableCell.getLength.bind(this.#txTableCell);
        this.#txTableCell.getText = this.#txTableCell.getText.bind(this.#txTableCell);
        this.#txTableCell.setText = this.#txTableCell.setText.bind(this.#txTableCell);
    }

    //#region setter
    /**
    * @param {string} text
    * @returns {Promise<void>}
    */
    async setText(text) {
        await RequestHelper.Promise(this.#txTableCell.setText,
            text,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback);
        this.#text = text;
    }
    //#endregion

    //#region getter
    /**
    * @returns {Promise<string>}
    */
    async getText() {
        //v1.0.0
        if (this.#text == null || typeof this.#text === 'undefined') {
            let result = await RequestHelper.Promise(this.#txTableCell.getText,
                CallbackType.RequestStringCallback,
                CallbackType.ErrorCallback);
            this.#text = result;
        }
        return /** @type {string} */(this.#text);
    }

    /**
     * @returns {Promise<number>}
     */
    async getStart() {
        //v1.0.0
        if (this.#start == null || typeof this.#start === 'undefined') {
            let result = await RequestHelper.Promise(this.#txTableCell.getStart,
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
            let result = await RequestHelper.Promise(this.#txTableCell.getLength,
                CallbackType.RequestNumberCallback,
                CallbackType.ErrorCallback);
            this.#length = result;
        }
        return /** @type {number} */(this.#length);
    }
    //#endregion
}