import * as path from 'path';
import { describe, it, expect } from 'vitest';
import { PropertyExecuter } from '../executors/PropertyExecuter';
import { MethodExecuter } from '../executors/MethodExecuter';
import { ClassExecuter } from '../executors/ClassExecuter';
import { TypesIndex } from '../TypesIndex';
import type { ScrapedClass } from '../types';

const FIXTURES = path.resolve(__dirname, 'fixtures');
const FIXTURE_FILE = path.join(FIXTURES, 'ScraperIgnoreClass.d.ts');

function makeClass(overrides: Partial<ScrapedClass> = {}): ScrapedClass {
    return {
        name: 'ScraperIgnoreClass',
        description: '',
        sourceUrl: 'http://example.com/ScraperIgnoreClass',
        deprecated: false,
        isClass: false,
        methods: [],
        properties: [],
        ...overrides,
    };
}

// ─── PropertyExecuter ─────────────────────────────────────────────────────────

describe('@scraper-ignore — PropertyExecuter', () => {
    it('does not report ignored property as [REMOVED] when absent from scraped', () => {
        // Scraped has no properties. normalProp should be removed, customProp must not.
        const report = PropertyExecuter.diff(makeClass(), FIXTURE_FILE);
        expect(report.removedProperties.map(p => p.name)).not.toContain('customProp');
    });

    it('still reports non-ignored property as [REMOVED] when absent from scraped', () => {
        const report = PropertyExecuter.diff(makeClass(), FIXTURE_FILE);
        expect(report.removedProperties.map(p => p.name)).toContain('normalProp');
    });

    it('does not report ignored property as [NEW] when docs contains it', () => {
        // Docs say customProp: string — d.ts has a custom union tagged @scraper-ignore.
        // The scraped property must be suppressed so it is not flagged as NEW.
        const cls = makeClass({
            properties: [
                { name: 'customProp', typeText: 'string', description: '', readonly: false, deprecated: false },
            ],
        });
        const report = PropertyExecuter.diff(cls, FIXTURE_FILE);
        expect(report.newProperties.map(p => p.name)).not.toContain('customProp');
    });

    it('still reports genuinely new property as [NEW]', () => {
        // brandNew is in scraped but absent from the d.ts.
        const cls = makeClass({
            properties: [
                { name: 'brandNew', typeText: 'string', description: '', readonly: false, deprecated: false },
            ],
        });
        const report = PropertyExecuter.diff(cls, FIXTURE_FILE);
        expect(report.newProperties.map(p => p.name)).toContain('brandNew');
    });
});

// ─── MethodExecuter ───────────────────────────────────────────────────────────

describe('@scraper-ignore — MethodExecuter', () => {
    it('does not report ignored method as [REMOVED] when absent from scraped', () => {
        // Scraped has no methods. normalMethod should be removed, customMethod must not.
        const report = MethodExecuter.diff(makeClass(), FIXTURE_FILE);
        expect(report.removedMethods.map(m => m.name)).not.toContain('customMethod');
    });

    it('still reports non-ignored method as [REMOVED] when absent from scraped', () => {
        const report = MethodExecuter.diff(makeClass(), FIXTURE_FILE);
        expect(report.removedMethods.map(m => m.name)).toContain('normalMethod');
    });

    it('does not report ignored method as [NEW] when docs contains it', () => {
        const cls = makeClass({
            methods: [{
                name: 'customMethod',
                rawParams: '<string> value',
                className: 'ScraperIgnoreClass',
                description: '',
                sourceUrl: '',
                deprecated: false,
            }],
        });
        const report = MethodExecuter.diff(cls, FIXTURE_FILE);
        expect(report.newMethods.map(m => m.name)).not.toContain('customMethod');
    });

    it('still reports genuinely new method as [NEW]', () => {
        const cls = makeClass({
            methods: [{
                name: 'brandNewMethod',
                rawParams: '<string> text',
                className: 'ScraperIgnoreClass',
                description: '',
                sourceUrl: '',
                deprecated: false,
            }],
        });
        const report = MethodExecuter.diff(cls, FIXTURE_FILE);
        expect(report.newMethods.map(m => m.name)).toContain('brandNewMethod');
    });
});

// ─── ClassExecuter ────────────────────────────────────────────────────────────

describe('@scraper-ignore — ClassExecuter', () => {
    it('does not report class as [REMOVED CLASS] when its declaration is tagged @scraper-ignore', () => {
        // ScraperIgnoreClass is in the TypesIndex (fixture file) but absent from scraped.
        // Its declaration carries @scraper-ignore, so it must be suppressed.
        const index = new TypesIndex([FIXTURES]);
        const { removedClasses } = ClassExecuter.diff([], index);
        expect(removedClasses).not.toContain('ScraperIgnoreClass');
    });

    it('still reports non-ignored class as [REMOVED CLASS] when absent from scraped', () => {
        // SimpleClass is in the fixtures without @scraper-ignore on its declaration.
        const index = new TypesIndex([FIXTURES]);
        const { removedClasses } = ClassExecuter.diff([], index);
        expect(removedClasses).toContain('SimpleClass');
    });

    it('does not suppress class that is present in scraped regardless of the tag', () => {
        // When scraped contains the class, it is not "removed" — tag is irrelevant.
        const index = new TypesIndex([FIXTURES]);
        const scraped: ScrapedClass[] = [makeClass()];
        const { removedClasses } = ClassExecuter.diff(scraped, index);
        expect(removedClasses).not.toContain('ScraperIgnoreClass');
    });
});
