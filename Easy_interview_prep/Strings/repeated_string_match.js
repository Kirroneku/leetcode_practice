/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    let total = 0;
    let ANow = "";
    while( ANow.length < B.length) {
        total ++;
        ANow += A;
    }
    if( ANow.indexOf(B) != -1) {
        return total;
    }

    while( ANow.length <= B.length+A.length) {
        total ++;
        ANow += A;

        if( ANow.indexOf(B) != -1) {
            return total;
        }
    }

    return -1;
};