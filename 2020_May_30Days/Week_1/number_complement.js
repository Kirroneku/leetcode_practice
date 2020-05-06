/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binary = (num).toString(2);
    let complement = 0;
    let pow2 = 1;
    
    for( let char = binary.length-1; char > 0; char-- ) {
        if( binary[char] == '0' ) {
            complement += pow2;
        }
        pow2*=2;
    }

    return complement;
};

