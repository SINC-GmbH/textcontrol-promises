import { Collection } from '../Collection.js';
import { EmbeddedFile } from '../EmbeddedFile.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<EmbeddedFile>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/EmbeddedFileCollection.d.ts.
 */
export class EmbeddedFileCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.EmbeddedFileCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.EmbeddedFileCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.EmbeddedFileCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new EmbeddedFile(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('addBinaryFile', 'addTextFile', 'removeElementAt');
    }

    /**
     * Adds an embedded binary file to the collection.
     * @param {string} fileName Specifies the file's name.
     * @param {string} data Specifies the file's binary data as a base64 string.
     * @param {string} [metaData] Optional. Specifies additional metadata with properties of the document which is embedded.
The data is added to the metadata of the containing document.
The string must consist of one or more rdf:Description elements as specified by the
XMP Specification (XMP: Extensible Metadata Platform, Adobe Systems Incorporated) or the
RDF Model and Syntax Specification (http://www.w3.org/TR/rdf-syntax-grammar/).
rdf is the XML namespace prefix for the "http://www.w3.org/1999/02/22-rdf-syntax-ns#" namespace.
It can be null or an empty string, if there is no additional meta data to embed.
     * @returns {Promise<void>}
     */
    addBinaryFile(fileName, data, metaData) {
        return RequestHelper.Promise(
            this._txInternal.addBinaryFile,
            fileName,
            data,
            metaData,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Adds an embedded text file to the collection.
     * @param {string} fileName Specifies the file's name.
     * @param {string} data Specifies the file's data as a string.
     * @param {string} [metaData] Optional. Specifies additional metadata with properties of the document which is embedded.
The data is added to the metadata of the containing document.
The string must consist of one or more rdf:Description elements as specified by the
XMP Specification (XMP: Extensible Metadata Platform, Adobe Systems Incorporated) or the
RDF Model and Syntax Specification (http://www.w3.org/TR/rdf-syntax-grammar/).
rdf is the XML namespace prefix for the "http://www.w3.org/1999/02/22-rdf-syntax-ns#" namespace.
It can be null or an empty string, if there is no additional meta data to embed.
     * @returns {Promise<void>}
     */
    addTextFile(fileName, data, metaData) {
        return RequestHelper.Promise(
            this._txInternal.addTextFile,
            fileName,
            data,
            metaData,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Removes the embedded file at the given index.
     * @param {number} index
     * @returns {Promise<void>}
     */
    removeElementAt(index) {
        return RequestHelper.Promise(
            this._txInternal.removeElementAt,
            index,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
}
