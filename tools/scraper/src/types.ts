/** A method signature extracted from the TX TextControl HTML documentation. */
export interface ScrapedMethod {
    name: string;
    /** Raw parameter string as shown in the docs (e.g. "text, start, options, callback, errorCallback"). */
    rawParams: string;
    /** Short description from the docs. */
    description: string;
    /** The URL of the doc page where this method was found. */
    sourceUrl: string;
    deprecated: boolean;
}

/** A method declaration extracted from the d.ts file. */
export interface DeclaredMethod {
    name: string;
    /** Params as written in the d.ts, including types. */
    params: string;
    returnType: string;
}

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
