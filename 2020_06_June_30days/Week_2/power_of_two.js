/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if( n == 0 ) {
        return false;
    }
    
    let binary = n.toString(2);
    // console.log(binary);
    for( let i = 1; i < binary.length; i++ ) {
        // console.log(binary[i])
        if( binary[i] == '1' ) {
            return false;
        }
    }
    
    return true;
};