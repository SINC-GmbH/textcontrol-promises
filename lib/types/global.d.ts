/** @scraper-ignore */
import type { TXTextControl as TXTextControlInterface } from './TXTextControl';
import * as TXTextControlNamespace from './TXTextControlNamespace';
declare global {
    var TXTextControl: TXTextControlInterface & typeof TXTextControlNamespace;
}
