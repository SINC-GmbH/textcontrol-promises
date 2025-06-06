export class CallbackHelper {
    static tryGet(type: keyof typeof CallbackType | any, resolve: Function, reject: Function): any;
}
import { CallbackType } from "./CallbackType";
