export class Collection<T> {
    constructor(txCollection: any, wrapItem: (arg0: T) => T);
    protected _txCollection: any;
    reverse(): AsyncGenerator<Awaited<T>, void, unknown>;
    public forEach(forEachCallback: (arg0: T, arg1: number, arg2: number) => void): Promise<void>;
    getCount(): Promise<number>;
    elementAt(index: number): Promise<T>;
    [Symbol.asyncIterator](): AsyncGenerator<Awaited<T>, void, unknown>;
    #private;
}
