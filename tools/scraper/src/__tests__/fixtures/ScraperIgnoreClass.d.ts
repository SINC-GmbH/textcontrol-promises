/**
 * A class that is manually maintained and should not be reported as removed.
 * @scraper-ignore
 */
export interface ScraperIgnoreClass {
    /**
     * Manually typed as a union; docs only say "string".
     * @scraper-ignore
     */
    customProp: 'A' | 'B' | 'C';

    /**
     * Manually typed callback signature differs from docs.
     * @scraper-ignore
     */
    customMethod(value: string): void;

    /** A normal property — not ignored. */
    normalProp: string;

    /** A normal method — not ignored. */
    normalMethod(name: string): void;
}
