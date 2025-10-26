import { CallbackType, RequestHelper } from "./helper/index.js";

export class ApplicationField {
    /** @type {any} */
    #txApplicationField;
    get txApplicationField() { return this.#txApplicationField; }

    /** @type {string=} */
    #name;
    /**
     *  @property name
     *  @type {string=}
     */
    get name() { return this.#name; }

    /** @type {string=} */
    #typeName;
    get typeName() { return this.#typeName; }

    /** @type {string=} */
    #text;
    get text() { return this.#text; }

    /** @type {Array<string>=} */
    #parameters;
    get parameters() { return this.#parameters; }

    /** @type {number=} */
    #start;
    get start() { return this.#start; }

    /**
     * Wrapper für TXTextControl.ApplicationField
     * @param {*} txApplicationField
     */
    constructor(txApplicationField) {
        this.#txApplicationField = txApplicationField;
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this.#txApplicationField.getName = this.#txApplicationField.getName.bind(this.#txApplicationField);
        this.#txApplicationField.setName = this.#txApplicationField.setName.bind(this.#txApplicationField);
        this.#txApplicationField.getTypeName = this.#txApplicationField.getTypeName.bind(this.#txApplicationField);
        this.#txApplicationField.getParameters = this.#txApplicationField.getParameters.bind(this.#txApplicationField);
        this.#txApplicationField.setParameters = this.#txApplicationField.setParameters.bind(this.#txApplicationField);
        this.#txApplicationField.getText = this.#txApplicationField.getText.bind(this.#txApplicationField);
        this.#txApplicationField.setText = this.#txApplicationField.setText.bind(this.#txApplicationField);
        this.#txApplicationField.getStart = this.#txApplicationField.getStart.bind(this.#txApplicationField);
    }

    //#region setter

    /**
     * Sets the name of a text field
     * @public
     * @method
     * @param {string} name
     * @returns {Promise<void>}
     */
    async setName(name) {
        await RequestHelper.Promise(this.#txApplicationField.setName,
            name,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback);
        this.#name = this.#name;
    }

    /**
     * Sets the field's parameters
     * @public
     * @param {Array<string>} parameters
     * @returns {Promise<void>}
     */
    async setParameters(parameters) {
        await RequestHelper.Promise(this.#txApplicationField.setParameters,
            parameters,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback);
        this.#parameters = this.#parameters;
    }

    /**
     * Sets the text which is contained within a text field
     * @param {string} text
     * @returns {Promise<void>}
     */
    async setText(text) {
        await RequestHelper.Promise(this.#txApplicationField.setText,
            text,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback);
        this.#text = this.#text;
    }
    //#endregion


    //#region getter
    /**
     * Relates a user-defined name to a text field
     * @returns {Promise<string>}
     */
    async getName() {
        if (this.#name == null || typeof this.#name === 'undefined') {
            let result = await RequestHelper.Promise(this.txApplicationField.getName,
                CallbackType.RequestStringCallback,
                CallbackType.ErrorCallback);
            this.#name = result;
        }
        return /** @type {string} */(this.#name);
    }

    /**
     * Gets the field's type name
     * @returns {Promise<string>}
     */
    async getTypeName() {
        if (this.#typeName == null || typeof this.#typeName === 'undefined') {
            let result = await RequestHelper.Promise(this.txApplicationField.getTypeName,
                CallbackType.RequestStringCallback,
                CallbackType.ErrorCallback);
            this.#typeName = result;
        }
        return /** @type {string} */(this.#typeName);
    }

    /**
     * Gets the field' parameters
     * @returns {Promise<Array<string>>}
     */
    async getParameters() {
        if (this.#parameters == null || typeof this.#parameters === 'undefined') {
            let result = await RequestHelper.Promise(this.txApplicationField.getParameters,
                CallbackType.RequestStringsCallback,
                CallbackType.ErrorCallback);
            this.#parameters = result;
        }
        return /** @type {Array<string>} */(this.#parameters);
    }

    /**
     * Gets the text which is contained within a text field
     * @returns {Promise<string>}
     */
    async getText() {
        if (this.#text == null || typeof this.#text === 'undefined') {
            let result = await RequestHelper.Promise(this.txApplicationField.getText,
                CallbackType.RequestStringCallback,
                CallbackType.ErrorCallback);
            this.#text = result;
        }
        return /** @type {string} */(this.#text);
    }

    /**
     * Gets the first character position (one-based) of a text field
     * @returns {Promise<number>}
     */
    async getStart() {
        if (this.#start == null || typeof this.#start === 'undefined') {
            let result = await RequestHelper.Promise(this.txApplicationField.getStart,
                CallbackType.RequestNumberCallback,
                CallbackType.ErrorCallback);
            this.#start = result;
        }
        return /** @type {number} */(this.#start);
    }
    //#endregion
}
