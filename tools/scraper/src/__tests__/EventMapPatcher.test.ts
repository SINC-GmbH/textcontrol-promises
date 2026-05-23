import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { patchEventMap } from '../EventMapPatcher';
import type { EventMapDiffReport } from '../types';

// Minimal EventMap content used as a fixture base
const BASE_CONTENT = `import { OldCallback, OtherCallback } from '../callbacks';
export type EventMapNames = keyof EventMap;
export interface EventMap {
    loaded: OldCallback;
    changed: OtherCallback;
}
`;

function emptyReport(): EventMapDiffReport {
    return {
        newEvents: [],
        removedEvents: [],
        deprecationChanges: [],
        callbackTypeChanges: [],
    };
}

let tmpFile: string;

beforeEach(() => {
    tmpFile = path.join(os.tmpdir(), `EventMap-test-${Date.now()}.d.ts`);
    fs.writeFileSync(tmpFile, BASE_CONTENT, 'utf-8');
});

afterEach(() => {
    if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
});

// ─── callbackTypeChanges — P1-2 regression ───────────────────────────────────

describe('patchEventMap — callbackTypeChanges', () => {
    it('inserts TODO comment for a callback type change on the first match (P1-2 regression)', () => {
        const report: EventMapDiffReport = {
            ...emptyReport(),
            callbackTypeChanges: [{ name: 'loaded', from: 'OldCallback', to: 'NewCallback' }],
        };
        patchEventMap(tmpFile, report, false);
        const result = fs.readFileSync(tmpFile, 'utf-8');
        // The TODO comment must appear BEFORE the entry line
        expect(result).toContain('TODO: callback type changed — docs: NewCallback');
        expect(result).toContain('loaded: OldCallback;');
        const todoIdx = result.indexOf('TODO: callback type changed');
        const entryIdx = result.indexOf('loaded: OldCallback;');
        expect(todoIdx).toBeLessThan(entryIdx);
    });

    it('handles two consecutive callbackTypeChanges correctly', () => {
        const report: EventMapDiffReport = {
            ...emptyReport(),
            callbackTypeChanges: [
                { name: 'loaded', from: 'OldCallback', to: 'NewCallback' },
                { name: 'changed', from: 'OtherCallback', to: 'ReplacedCallback' },
            ],
        };
        patchEventMap(tmpFile, report, false);
        const result = fs.readFileSync(tmpFile, 'utf-8');
        expect(result).toMatch(/TODO.*NewCallback/);
        expect(result).toMatch(/TODO.*ReplacedCallback/);
    });

    it('does not modify the file when no changes exist', () => {
        patchEventMap(tmpFile, emptyReport(), false);
        const result = fs.readFileSync(tmpFile, 'utf-8');
        expect(result).toBe(BASE_CONTENT);
    });
});

// ─── removedEvents ───────────────────────────────────────────────────────────

describe('patchEventMap — removedEvents', () => {
    it('adds TODO removed comment before a removed event', () => {
        const report: EventMapDiffReport = {
            ...emptyReport(),
            removedEvents: ['changed'],
        };
        patchEventMap(tmpFile, report, false);
        const result = fs.readFileSync(tmpFile, 'utf-8');
        expect(result).toContain('TODO: removed from docs');
        expect(result).toContain('changed: OtherCallback;');
        const todoIdx = result.indexOf('TODO: removed from docs');
        const entryIdx = result.indexOf('changed: OtherCallback;');
        expect(todoIdx).toBeLessThan(entryIdx);
    });

    it('does not add duplicate TODO comment on second run', () => {
        const report: EventMapDiffReport = { ...emptyReport(), removedEvents: ['changed'] };
        patchEventMap(tmpFile, report, false);
        patchEventMap(tmpFile, report, false);
        const result = fs.readFileSync(tmpFile, 'utf-8');
        expect(result.split('TODO: removed from docs').length - 1).toBe(1);
    });
});

// ─── newEvents ────────────────────────────────────────────────────────────────

describe('patchEventMap — newEvents', () => {
    it('appends a new event entry before the closing brace', () => {
        const report: EventMapDiffReport = {
            ...emptyReport(),
            newEvents: [{
                name: 'clicked',
                callbackType: 'OtherCallback',
                description: 'Fired on click.',
                deprecated: false,
                sourceUrl: '',
            }],
        };
        patchEventMap(tmpFile, report, false);
        const result = fs.readFileSync(tmpFile, 'utf-8');
        expect(result).toContain('clicked: OtherCallback;');
        expect(result).toContain('Fired on click.');
    });

    it('does not duplicate imports that already exist', () => {
        const report: EventMapDiffReport = {
            ...emptyReport(),
            newEvents: [{
                name: 'clicked',
                callbackType: 'OtherCallback',  // already imported
                description: '',
                deprecated: false,
                sourceUrl: '',
            }],
        };
        patchEventMap(tmpFile, report, false);
        const result = fs.readFileSync(tmpFile, 'utf-8');
        const matches = result.match(/OtherCallback/g) ?? [];
        // Appears in import line once and in the event entry once — not more
        expect(matches.length).toBeLessThanOrEqual(3);
    });
});

// ─── dry-run ──────────────────────────────────────────────────────────────────

describe('patchEventMap — dryRun', () => {
    it('does not write the file in dry-run mode', () => {
        const report: EventMapDiffReport = {
            ...emptyReport(),
            removedEvents: ['loaded'],
        };
        patchEventMap(tmpFile, report, true);
        const result = fs.readFileSync(tmpFile, 'utf-8');
        expect(result).toBe(BASE_CONTENT);
    });
});
