/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let codes = new Set();
    let uniques = 2**k;
    
    for( let i = 0; i <= s.length-k; i++ ) {
        codes.add(s.substring(i, i+k));
    }

    return codes.size == uniques;
};