/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y;
    let binaryRep = xor.toString(2);
    let total = 0;
    
    for( let bit of binaryRep){
        if ( bit == "1" ) {
            total ++;
        }
    }

    return total;
};