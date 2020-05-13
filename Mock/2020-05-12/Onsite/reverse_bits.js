/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let binRep = n.toString(2);
    console.log(binRep)
    let reverse = [];
    for( let i = binRep.length; i >= 0; i-- ) {
        reverse.push(binRep[i]);
    }

    for( let i = 31-binRep.length; i >= 0; i--) {
        reverse.push(0);
    }
    
    return parseInt(reverse.join(''), 2);
};