import { CallbackType, RequestHelper } from "./helper/index.js";

export class SubTextPart {
    /** @type {any} */
    #txSubTextPart

    /** @type {string=} */
    #data;
    get data() { return this.#data; }
    /** @type {number=} */
    #id;
    get id() { return this.#id; }
    /** @type {string=} */
    #text;
    get text() { return this.#text; }

    /**
     * Wrapper für TXTextControl.SubTextPart
     * @param {any} txSubTextPart
     */
    constructor(txSubTextPart) {
        this.#txSubTextPart = txSubTextPart;
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this.#txSubTextPart.getData = this.#txSubTextPart.getData.bind(this.#txSubTextPart);
        this.#txSubTextPart.getID = this.#txSubTextPart.getID.bind(this.#txSubTextPart);
        this.#txSubTextPart.getText = this.#txSubTextPart.getText.bind(this.#txSubTextPart);
    }

    /**
     * Gets additional data of the subtextpart
     * @returns {Promise<string>}
     */
    async getData() {
        if (this.#data == null || typeof this.#data === 'undefined') {
            let result = await RequestHelper.Promise(this.#txSubTextPart.getData,
                CallbackType.RequestStringCallback,
                CallbackType.ErrorCallback);
            this.#data = result;
        }
        return /** @type {string} */(this.#data);
    }

    /**
     * Gets the text which is contained within a text field
     * @returns {Promise<string>}
     */
    async getText() {
        if (this.#text == null || typeof this.#text === 'undefined') {
            let result = await RequestHelper.Promise(this.#txSubTextPart.getText,
                CallbackType.RequestStringCallback,
                CallbackType.ErrorCallback);
            this.#text = result;
        }
        return /** @type {string} */(this.#text);
    }

    /**
     * Gets an identifier for a subtextpart
     * @returns {Promise<number>}
     */
    async getID() {
        if (this.#id == null || typeof this.#id === 'undefined') {
            let result = await RequestHelper.Promise(this.#txSubTextPart.getID,
                CallbackType.RequestNumberCallback,
                CallbackType.ErrorCallback);
            this.#id = result;
        }
        return /** @type {number} */(this.#id);
    }

    // getID: (
    //     callback: RequestNumberCallback,
    //     errorCallback?: ErrorCallback
    //   ) => void;
    //   getData: (
    //     callback: RequestStringCallback,
    //     errorCallback?: ErrorCallback
    //   ) => void;
    //   getText: (
    //     callback: RequestStringCallback,
    //     errorCallback?: ErrorCallback
    //   ) => void;

}
