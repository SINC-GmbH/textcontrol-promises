import { CallbackType, RequestHelper } from "./helper/module";

export class InputPosition {
    /** @type {any} */
    #txInputPosition;
    get txInputPosition() { return this.#txInputPosition; }

    /**
    * Wrapper für TXTextControl.InputPosition
    * @param {*} txInputPosition 
    */
    constructor(txInputPosition) {
        this.#txInputPosition = txInputPosition;
        this.#bindCallbacks();
    }

    /** 
     * binding callback functions
     */
    #bindCallbacks() {
        this.#txInputPosition.scrollTo = this.#txInputPosition.scrollTo.bind(this.#txInputPosition);
    }

    //#region setter

    /**
     * Scrolls the contents of a Text Control so that the current input position becomes visible.
     * @param {any} scrollPosition:ScrollPosition
     * @returns {Promise<void>}
     */
    async scrollTo(scrollPosition) {
        await RequestHelper.Promise(this.#txInputPosition.scrollTo,
            scrollPosition,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback);
    }

    //#endregion
}