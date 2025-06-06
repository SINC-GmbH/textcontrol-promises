export function timeout(ms: number): Promise<void>;
export function waitUntil(condition: () => boolean, retryCount?: number | undefined, ms?: number | undefined): Promise<void>;
