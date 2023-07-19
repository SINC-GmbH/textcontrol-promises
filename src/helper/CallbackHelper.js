import { CallbackType } from "./CallbackType";

export class CallbackHelper {

    /**
     * @param {keyof typeof CallbackType | any} type 
     * @param {Function} resolve 
     * @param {Function} reject 
     * @returns 
     */
    static tryGet(type, resolve, reject) {
        switch (type) {
            case CallbackType.EmptyRequestCallback:
                return () => resolve();
            case CallbackType.ErrorCallback:
                return (/** @type {any} */ err) => reject(err);
            case CallbackType.RequestNumberCallback:
                return (/** @type {number} */ result) => resolve(result);
            case CallbackType.RequestBooleanCallback:
                return (/** @type {boolean} */result) => resolve(result);
            case CallbackType.RequestStringCallback:
                return (/** @type {string} */result) => resolve(result);
            case CallbackType.RequestStringsCallback:
                return (/** @type {Array<string>} */result) => resolve(result);
            case CallbackType.AddSubTextPartCallback:
            case CallbackType.AddEditableRegionCallback:
                return (/** @type {any} */response, /** @type {any} */addResult) => resolve({ response, addResult });
            case CallbackType.RequestTableCallback:
            case CallbackType.LoadDocumentCallback:
            case CallbackType.SaveDocumentResultCallback:
            case CallbackType.RequestTableCellCallback:
            case CallbackType.RequestSubTextPartCallback:
            case CallbackType.RequestApplicationFieldCallback:
            case CallbackType.RequestFormFieldCallback:
            case CallbackType.RequestObjectCallback:
                return (/** @type {any} */result) => resolve(result);
            default:
                return type;
        }
    }

    // RequestBooleanCallback = (result: boolean) => void;
    // RequestTableCallback = (table: Table) => void;
    // RequestTableCellCallback = (cell: TableCell) => void;
    // RequestObjectCallback = (obj: object) => void;
}