import { CallbackType, RequestHelper } from "./helper/module";

export class FormField {

    /** @type {any} */
    #txFormField;
    get txFormField() { return this.#txFormField; }

    /** @type {number=} */
    #start;
    get start() { return this.#start; }

    /**
     * Wrapper für TXTextControl.FormField
     * @param {any} txFormField 
     */
    constructor(txFormField) {
        this.#txFormField = txFormField;
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this.#txFormField.getStart = this.#txFormField.getStart.bind(this.#txFormField);
    }


    /**
    * Gets the first character position (one-based) of a text field
    * @returns {Promise<number>}
    */
    async getStart() {
        if (this.#start == null || typeof this.#start === 'undefined') {
            let result = await RequestHelper.Promise(this.txFormField.getStart,
                CallbackType.RequestNumberCallback,
                CallbackType.ErrorCallback);
            this.#start = result;
        }
        return /** @type {number} */(this.#start);
    }
}