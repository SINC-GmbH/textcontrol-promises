/**
* waits a certain amount if milliseconds until promise is resolved
* @param {number} ms
* @returns {Promise<void>}
*/
export async function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

/**
 * waits in 500ms intervals until condition is true or retryCount is reached.
 * @param {function():boolean} condition
 * @param {number} [retryCount=-1] set this to prevent infinit loop worst case
 * @param {number} [ms=500] time in milliseconds to wait in each intervall
 * @returns {Promise<void>}
 */
export async function waitUntil(condition, retryCount=-1, ms=500){
    return new Promise(async (resolve,reject)=>{
        while(!condition()){
            if(retryCount == 0) reject();
            else {
                await timeout(ms);
                if(retryCount > 0) retryCount--;
            }
        }
        resolve();
    });
}
