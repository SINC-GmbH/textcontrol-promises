import { ParsedInterface } from './DtsParser';

export type ObjectKind = 'collection' | 'object' | 'value-object' | 'skip';

// Methods that Collection.js already handles — don't re-generate these in collection subclasses
export const COLLECTION_BASE_METHODS = new Set(['elementAt', 'forEach', 'getCount']);

/**
 * Class names that have hand-written implementations and should not have a generated
 * FooBase.js counterpart. Collection.js IS the collection base — generating CollectionBase
 * would cause a circular dependency.
 */
export const SKIP_CLASSES = new Set(['Collection']);

/**
 * Classifies a parsed interface into one of four generator target kinds.
 *
 * - collection: name ends in "Collection" OR has all of {elementAt, forEach, getCount}
 * - object: has ≥1 method with a callback parameter
 * - value-object: has members but no async (callback) methods — simple data shapes
 * - skip: no members at all (pure type alias, enum-only, etc.)
 */
export function classifyInterface(parsed: ParsedInterface): ObjectKind {
    const methodNames = new Set(parsed.methods.map(m => m.name));

    if (parsed.methods.length === 0 && parsed.properties.length === 0) return 'skip';

    if (
        parsed.name.endsWith('Collection') ||
        (methodNames.has('elementAt') && methodNames.has('forEach') && methodNames.has('getCount'))
    ) {
        return 'collection';
    }

    const hasCallbacks = parsed.methods.some(m => m.params.some(p => p.isCallback));
    if (hasCallbacks) return 'object';

    return 'value-object';
}

/**
 * Derives the item class name for a collection class.
 * e.g. "TableCollection" → "Table", "HeaderFooterCollection" → "HeaderFooter"
 */
export function collectionItemClass(collectionName: string): string {
    return collectionName.replace(/Collection$/, '');
}
