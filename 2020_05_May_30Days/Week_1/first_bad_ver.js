/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        let pivot = 1;
        while( start < end ) {
            pivot = Math.floor((start+end)/2);
            if( isBadVersion(pivot) ) {
                end = pivot;
            } else {
                start = pivot+1;
            }
        }

        while( isBadVersion(pivot) ) {
            pivot--;
        }
        while( !isBadVersion(pivot) ) {
            pivot++;
        }
        return pivot;
    };
};