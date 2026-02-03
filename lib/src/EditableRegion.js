import { CallbackType, RequestHelper } from "./helper/index.js";

export class EditableRegion {
    /** @type {any} */
    #txEditableRegion;
    get txEditableRegion() { return this.#txEditableRegion; }

    /** @type {string=} */
    #userName;
    get name() { return this.#userName; }

    /** @type {number=} */
    #start;
    get start() { return this.#start; }

    /** @type {number=} */
    #length;
    get length() { return this.#length; }

    /** @type {number=} */
    #id;
    get id() { return this.#id; }

    /** @type {string=} */
    #highlightColor;
    get highlightColor() { return this.#highlightColor; }

    /**
    * Wrapper für TXTextControl.ApplicationField
    * @param {*} txEditableRegion
    */
    constructor(txEditableRegion) {
        this.#txEditableRegion = txEditableRegion;
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this.#txEditableRegion.getStart = this.#txEditableRegion.getStart.bind(this.#txEditableRegion);
        this.#txEditableRegion.getLength = this.#txEditableRegion.getLength.bind(this.#txEditableRegion);
        this.#txEditableRegion.getID = this.#txEditableRegion.getID.bind(this.#txEditableRegion);
        this.#txEditableRegion.getUserName = this.#txEditableRegion.getUserName.bind(this.#txEditableRegion);
        this.#txEditableRegion.getHighlightColor = this.#txEditableRegion.getHighlightColor.bind(this.#txEditableRegion);
        this.#txEditableRegion.setHighlightColor = this.#txEditableRegion.setHighlightColor.bind(this.#txEditableRegion);
    }

    //#region getter
    /**
     * Gets the name of the user who can edit the region
     * @returns {Promise<string>}
     */
    async getUserName() {
        if (this.#userName == null || typeof this.#userName === 'undefined') {
            let result = await RequestHelper.Promise(this.#txEditableRegion.getUserName,
                CallbackType.RequestStringCallback,
                CallbackType.ErrorCallback);
            this.#userName = result;
        }
        return /** @type {string} */(this.#userName);
    }

    /**
     * Gets the number of characters which belong to the editable region
     * @returns {Promise<number>}
     */
    async getLength() {
        if (this.#length == null || typeof this.#length === 'undefined') {
            let result = await RequestHelper.Promise(this.#txEditableRegion.getLength,
                CallbackType.RequestNumberCallback,
                CallbackType.ErrorCallback);
            this.#length = result;
        }
        return /** @type {number} */(this.#length);
    }

    /**
     * Gets the index (one-based) of the first character which belongs to the editable region
     * @returns {Promise<number>}
     */
    async getStart() {
        if (this.#start == null || typeof this.#start === 'undefined') {
            let result = await RequestHelper.Promise(this.#txEditableRegion.getStart,
                CallbackType.RequestNumberCallback,
                CallbackType.ErrorCallback);
            this.#start = result;
        }
        return /** @type {number} */(this.#start);
    }

    /**
     * Gets an identifier for a editable region
     * @returns {Promise<number>}
     */
    async getID() {
        if (this.#id == null || typeof this.#id === 'undefined') {
            let result = await RequestHelper.Promise(this.#txEditableRegion.getID,
                CallbackType.RequestNumberCallback,
                CallbackType.ErrorCallback);
            this.#id = result;
        }
        return /** @type {number} */(this.#id);
    }

    /**
     * Gets the highlight color for the editable region
     * @returns {Promise<string>}
     */
    async getHighlightColor() {
        if (this.#highlightColor == null || typeof this.#highlightColor === 'undefined') {
            let result = await RequestHelper.Promise(this.#txEditableRegion.getHighlightColor,
                CallbackType.RequestStringCallback,
                CallbackType.ErrorCallback);
            this.#highlightColor = result;
        }
        return /** @type {string} */(this.#highlightColor);
    }

    //#endregion

    //#region setter
    /**
     * Sets the highlight color for the editable region
     * @param {string} value
     */
    async setHighlightColor(value) {
        await RequestHelper.Promise(this.#txEditableRegion.setHighlightColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback);
        this.#highlightColor = this.#highlightColor;
    }
    //#endregion

    //   getHighlightMode: (
    //     callback: RequestHighlightModeCallback,
    //     errorCallback?: ErrorCallback
    //   ) => void;
    //   getText: (
    //     callback: RequestStringCallback,
    //     errorCallback?: ErrorCallback
    //   ) => void;

    //   save: (
    //     streamType: StreamType,
    //     callback: SaveDocumentCallback,
    //     saveSettings?: SaveSettings,
    //     errorCallback?: ErrorCallback
    //   ) => void;
    //   scrollTo: (
    //     callback?: EmptyRequestCallback,
    //     errorCallback?: ErrorCallback
    //   ) => void;
    //   setHighlightMode: (
    //     value: HighlightMode,
    //     callback?: EmptyRequestCallback,
    //     errorCallback?: ErrorCallback
    //   ) => void;
    //   setID: (
    //     value: number,
    //     callback?: EmptyRequestCallback,
    //     errorCallback?: ErrorCallback
    //   ) => void;
    //   setUserName: (
    //     value: string,
    //     callback?: EmptyRequestCallback,
    //     errorCallback?: ErrorCallback
    //   ) => void;

}
