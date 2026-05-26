import { ParsedMethod, ParsedParam } from './DtsParser';

export type MethodKind =
    | 'promise-void'    // has EmptyRequestCallback or LoadDocumentCallback → Promise<void>
    | 'promise-value'   // has a value-returning callback → Promise<T>
    | 'passthrough';    // no callbacks at all → direct TXTextControl.xxx() call

export interface ClassifiedMethod extends ParsedMethod {
    kind: MethodKind;
    /** Params that become method signature parameters (non-callback, in original order). */
    nonCallbackParams: ParsedParam[];
    /** The primary result callback, if any. */
    mainCallback: ParsedParam | null;
    /** The error callback, if present. */
    hasErrorCallback: boolean;
    /**
     * All params in original d.ts order, with callbacks replaced by their CallbackType
     * constant string. Used to build the RequestHelper.Promise(...) argument list.
     */
    requestHelperArgs: Array<{ kind: 'param'; name: string } | { kind: 'callbackType'; constant: string }>;
}

export function classifyMethod(method: ParsedMethod): ClassifiedMethod {
    const nonCallbackParams = method.params.filter(p => !p.isCallback);
    const callbackParams = method.params.filter(p => p.isCallback);

    const errorCallback = callbackParams.find(p => p.typeText.replace(/\s*\|\s*(undefined|null)$/, '').trim() === 'ErrorCallback');
    const mainCallback = callbackParams.find(p => p !== errorCallback) ?? null;

    let kind: MethodKind;
    if (callbackParams.length === 0) {
        kind = 'passthrough';
    } else {
        const mainType = mainCallback?.typeText.replace(/\s*\|\s*undefined$/, '').trim() ?? '';
        kind = mainType === 'EmptyRequestCallback' || mainType === 'LoadDocumentCallback' || mainCallback === null
            ? 'promise-void'
            : 'promise-value';
    }

    const requestHelperArgs: ClassifiedMethod['requestHelperArgs'] = method.params.map(p => {
        if (!p.isCallback) {
            return { kind: 'param', name: p.name };
        }
        const clean = p.typeText.replace(/\s*\|\s*(undefined|null)$/, '').trim();
        return { kind: 'callbackType', constant: `CallbackType.${clean}` };
    });

    return {
        ...method,
        kind,
        nonCallbackParams,
        mainCallback,
        hasErrorCallback: !!errorCallback,
        requestHelperArgs,
    };
}
