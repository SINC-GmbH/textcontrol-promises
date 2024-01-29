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