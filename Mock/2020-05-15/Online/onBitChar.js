/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let totalBits = 0;
    for( let i = 0; i < bits.length; i++ ) {
        if( bits[i] == 1 ) {
            totalBits+=2;
            i++;
        } else {
            totalBits ++;
        }
    }

    if( totalBits == bits.length-1) {
        return true;
    } 

    return false;
};