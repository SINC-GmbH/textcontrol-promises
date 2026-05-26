import { Collection } from '../Collection.js';
import { Section } from '../Section.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<Section>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SectionCollection.d.ts.
 */
export class SectionCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.SectionCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SectionCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.SectionCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new Section(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'addAtTextPosition', 'getItem');
    }

    /**
     * Adds a new section at the current text input position.
     * @param {TXTextControlTypeDefinition.SectionBreakKind} sectionBreakKind
     * @returns {Promise<boolean>}
     */
    add(sectionBreakKind) {
        return RequestHelper.Promise(
            this._txInternal.add,
            sectionBreakKind,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Adds a new section at the specified text input position.
     * @param {TXTextControlTypeDefinition.SectionBreakKind} sectionBreakKind
     * @param {number} textPosition
     * @returns {Promise<boolean>}
     */
    addAtTextPosition(sectionBreakKind, textPosition) {
        return RequestHelper.Promise(
            this._txInternal.addAtTextPosition,
            sectionBreakKind,
            textPosition,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the section at the current input position or or the section in the collection with the given number.
     * @param {number} [number]
     * @returns {Promise<Section>}
     */
    async getItem(number) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestSectionCallback, number, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }
}
