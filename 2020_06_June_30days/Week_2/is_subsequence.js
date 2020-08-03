/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if ( s.length == 0 ) {
        return true;
    }
    
    let cur = 0;
    let limit = s.length;

    for( let char of t ) {
        if( s[cur] == char ) {
            cur++;
            if( limit == cur ) {
                return true;
            }
        }
    }

    return false;
};