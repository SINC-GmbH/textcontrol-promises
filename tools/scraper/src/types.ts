// ─── Category ────────────────────────────────────────────────────────────────

/**
 * High-level kind of a scraped type page.
 * Inferred from name patterns and page content; drives which executor handles the diff.
 *
 * - object:       has methods; the main API class category
 * - arg:          event argument or callback data shape (name ends in EventArgs/CallbackData)
 * - callback:     function type alias (name ends in Callback/Handler)
 * - value-object: no methods, only properties (simple data container)
 */
export type ScrapedCategory = 'object' | 'arg' | 'callback' | 'value-object';

/**
 * Infer the category for a scraped page based on its name and content.
 * Applied after scraping (or when loading from cache) so DocsScraper stays
 * focused on HTML parsing and does not need to know about categories.
 */
export function inferCategory(
    name: string,
    methods: { name: string }[],
): ScrapedCategory {
    if (name.endsWith('Callback') || name.endsWith('Handler')) return 'callback';
    if (name.endsWith('EventArgs') || name.endsWith('CallbackData')) return 'arg';
    if (methods.length === 0) return 'value-object';
    return 'object';
}

// ─── Multi-class scraped types ──────────────────────────────────────────────

/** A method signature extracted from the TX TextControl HTML documentation. */
export interface ScrapedMethod {
    /** Which class this method belongs to. */
    className: string;
    name: string;
    /** Raw parameter string as shown in the docs (e.g. "<string> text, [<FindOptions> options]"). */
    rawParams: string;
    description: string;
    sourceUrl: string;
    deprecated: boolean;
}

/** A single member of an enumeration page (from the Members table). */
export interface ScrapedEnumMember {
    name: string;
    description: string;
}

/** A property entry extracted from an object page's Properties table. */
export interface ScrapedClassProperty {
    name: string;
    /** Type text as shown in the docs, e.g. "TableCollection". */
    typeText: string;
    description: string;
    readonly: boolean;
    deprecated: boolean;
    /** URL of the linked type page, if the docs link to it (used for BFS). */
    typePageUrl?: string;
}

/** An event entry extracted from the TXTextControl object page's Events table. */
export interface ScrapedEvent {
    name: string;
    /** Callback type name, e.g. "BarcodeCallback". */
    callbackType: string;
    description: string;
    deprecated: boolean;
    sourceUrl: string;
}

/** A complete class scraped from one object page. */
export interface ScrapedClass {
    name: string;
    description: string;
    /** High-level kind of this type. Set by inferCategory() after scraping. */
    category?: ScrapedCategory;
    methods: ScrapedMethod[];
    properties: ScrapedClassProperty[];
    sourceUrl: string;
    deprecated: boolean;
    /**
     * If true, this class is constructable (docs show a Constructor/Syntax section).
     * The generated d.ts should be `export class Foo` rather than `export interface Foo`.
     */
    isClass: boolean;
    /** Raw constructor parameter string from the docs, if isClass is true. */
    constructorParams?: string;
    /**
     * True when the full class page (methods + properties) has been scraped.
     * False/absent on stubs created by --refresh-urls (URL-only discovery).
     * Used to determine which entries can be skipped when resuming an interrupted scrape.
     */
    fullyScraped?: boolean;
    /** True when the page URL ends in .enumeration.htm — type should be generated as `export enum`. */
    isEnum?: boolean;
    /** Members of an enumeration page (populated when isEnum is true). */
    enumMembers?: ScrapedEnumMember[];
    /**
     * Name of the parent class that linked to this type (e.g. "SaveSettings" for CssSaveMode).
     * Absent for top-level types discovered via the API index.
     */
    parentName?: string;
}

// ─── Declared types (from d.ts files) ───────────────────────────────────────

/** A method declaration extracted from a d.ts file. */
export interface DeclaredMethod {
    name: string;
    /** Params as written in the d.ts, including types. */
    params: string;
    returnType: string;
    deprecated: boolean;
    /** True when the declaration carries a @scraper-ignore JSDoc tag — excluded from all diff output. */
    ignore: boolean;
}

/** A property declaration extracted from a d.ts file. */
export interface DeclaredProperty {
    name: string;
    typeText: string;
    readonly: boolean;
    optional: boolean;
    deprecated: boolean;
    /** True when the declaration carries a @scraper-ignore JSDoc tag — excluded from all diff output. */
    ignore: boolean;
}

/** An interface parsed from a lib/types/*.d.ts file. */
export interface DeclaredInterface {
    name: string;
    filePath: string;
    methods: DeclaredMethod[];
    properties: DeclaredProperty[];
}

/** An event entry parsed from EventMap.d.ts. */
export interface DeclaredEvent {
    name: string;
    callbackType: string;
    deprecated: boolean;
}

// ─── Diff types ──────────────────────────────────────────────────────────────

export interface SignatureChange {
    methodName: string;
    docsSig: string;
    dtsSig: string;
}

export interface DeprecationChange {
    name: string;
    /** true = item is deprecated in docs but not in d.ts (should add @deprecated). */
    nowDeprecated: boolean;
}

export interface ClassDiffReport {
    className: string;
    sourceUrl?: string;
    category?: ScrapedCategory;
    filePath: string;
    newMethods: ScrapedMethod[];
    removedMethods: DeclaredMethod[];
    signatureChanges: SignatureChange[];
    deprecationChanges: DeprecationChange[];
    newProperties: ScrapedClassProperty[];
    removedProperties: DeclaredProperty[];
}

export interface MultiClassDiffReport {
    perClass: ClassDiffReport[];
    /** Class names present in docs but not in any lib/types/ subdir. */
    newClasses: string[];
    /** Class names present in lib/types/ but not found in docs. */
    removedClasses: string[];
    stats: {
        totalClasses: number;
        totalNewMethods: number;
        totalRemovedMethods: number;
        totalSignatureChanges: number;
        totalNewClasses: number;
        totalRemovedClasses: number;
        totalNewProperties: number;
        totalRemovedProperties: number;
    };
}

export interface EventMapDiffReport {
    newEvents: ScrapedEvent[];
    /** Event names present in EventMap.d.ts but not in docs. */
    removedEvents: string[];
    deprecationChanges: DeprecationChange[];
    callbackTypeChanges: { name: string; from: string; to: string }[];
}

// ─── Legacy types (kept for RealApiInspector backward compat) ───────────────

/** A method found by inspecting the real TXTextControl JS object at runtime. */
export interface RealMethod {
    name: string;
    kind: 'function' | 'property' | 'object';
}

export type DiffKind = 'unchanged' | 'new-in-docs' | 'removed-from-docs' | 'signature-changed' | 'only-in-real';

export interface DiffEntry {
    name: string;
    kind: DiffKind;
    scraped?: ScrapedMethod;
    declared?: DeclaredMethod;
    real?: RealMethod;
}

export interface DiffReport {
    entries: DiffEntry[];
    stats: {
        unchanged: number;
        newInDocs: number;
        removedFromDocs: number;
        signatureChanged: number;
        onlyInReal: number;
    };
}
