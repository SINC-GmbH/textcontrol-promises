import { Collection } from "./Collection.js";
import { ApplicationField } from "./ApplicationField.js";
import { CallbackType, RequestHelper } from "./helper/index.js";

/**
 * @extends {Collection<ApplicationField>}
 */
export class ApplicationFieldCollection extends Collection {

    /**
     * Wrapper für TXTextControl.ApplicationFieldCollection
     * @param {any} txApplicationFieldCollection
     */
    constructor(txApplicationFieldCollection) {
        super(txApplicationFieldCollection, (/** @type {ApplicationField} */ txApplicationField) => new ApplicationField(txApplicationField));
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this._txCollection.getItem = this._txCollection.getItem.bind(this._txCollection);
        this._txCollection.remove = this._txCollection.remove.bind(this._txCollection);
    }

    /**
     * Gets the field at the current input position or null, if there is no such field at the current input position
     * @returns {Promise<ApplicationField>}
     */
    async getItem() {
        var txApplicationField = await RequestHelper.Promise(this._txCollection.getItem,
            CallbackType.RequestApplicationFieldCallback,
            CallbackType.ErrorCallback);
        return new ApplicationField(txApplicationField);
    }

    /**
     *  Removes a field of the type ApplicationField from a TX Text Control document
     * @param {ApplicationField} applicationField
     * @param {boolean} keepText
     * @returns {Promise<boolean>}
     */
    async remove(applicationField, keepText) {
        return RequestHelper.Promise(this._txCollection.remove,
            applicationField.txApplicationField,
            keepText,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback);
    }
}
