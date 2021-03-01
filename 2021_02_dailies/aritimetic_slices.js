/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    let sequences = 0;
    for( let i = 0; i < A.length; i++ ) {
        let diff = A[i+1]-A[i];
        for( let j = i+1; j < A.length; j++ ) {
            if( A[j+1] - A[j] != diff ) {
                break;
            } 
            sequences ++;
        }
    }
    
    return sequences;
};