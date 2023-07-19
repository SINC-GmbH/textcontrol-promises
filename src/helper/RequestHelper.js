import { CallbackHelper } from "./CallbackHelper";

export class RequestHelper {
    /**
     * 
     * @param {Function} request 
     * @param  {...*} args 
     * @returns 
     */
    static Promise(request, ...args) {
        return new Promise((resolve, reject) => {
            args = args.map((arg) => CallbackHelper.tryGet(arg, resolve, reject));
            request(...args);
        });
    }
}