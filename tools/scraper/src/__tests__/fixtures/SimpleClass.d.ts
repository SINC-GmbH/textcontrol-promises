export interface SimpleClass {
    noParams(): void;
    withOneParam(name: string): void;
    withParams(name: string, count: number): void;
    withOptional(name: string, count?: number): void;
    withCallback(callback: EmptyRequestCallback): void;
    /** @deprecated use newMethod instead */
    oldMethod(): void;
}
