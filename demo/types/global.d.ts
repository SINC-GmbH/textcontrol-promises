import {TXTextControlInterface, TXTextControlNamespace} from "@sinc-gmbh/textcontrol-promises";
declare global{
    var TXTextControl: TXTextControlInterface &  typeof TXTextControlNamespace;
}