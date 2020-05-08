/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    let total = 1;
    while( A.length < B.length) {
        total ++;
        A += A;
    }

    while( A.length < 10000) {
        console.log(A);
        if( A.includes(B) ) {
            return total;
        }
        

        total ++;
        A += A;
    }

    return -1;
};