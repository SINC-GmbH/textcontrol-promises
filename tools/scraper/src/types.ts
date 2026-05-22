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
    methods: ScrapedMethod[];
    properties: ScrapedClassProperty[];
    sourceUrl: string;
    deprecated: boolean;
}

// ─── Declared types (from d.ts files) ───────────────────────────────────────

/** A method declaration extracted from a d.ts file. */
export interface DeclaredMethod {
    name: string;
    /** Params as written in the d.ts, including types. */
    params: string;
    returnType: string;
    deprecated: boolean;
}

/** An interface parsed from a lib/types/objects/*.d.ts file. */
export interface DeclaredInterface {
    name: string;
    filePath: string;
    methods: DeclaredMethod[];
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
    newMethods: ScrapedMethod[];
    removedMethods: DeclaredMethod[];
    signatureChanges: SignatureChange[];
    deprecationChanges: DeprecationChange[];
}

export interface MultiClassDiffReport {
    perClass: ClassDiffReport[];
    /** Class names present in docs but not in lib/types/objects/. */
    newClasses: string[];
    /** Class names present in lib/types/objects/ but not found in docs. */
    removedClasses: string[];
    stats: {
        totalClasses: number;
        totalNewMethods: number;
        totalRemovedMethods: number;
        totalSignatureChanges: number;
        totalNewClasses: number;
        totalRemovedClasses: number;
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
