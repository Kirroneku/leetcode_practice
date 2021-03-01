/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let even = (mat.length%2 == 0);
    let sum = 0;
    
    for( let i = 0; i < mat.length; i++ ) {
        sum += mat[i][i];
        sum += mat[mat.length-1-i][i];
        if( !even && i == Math.floor(mat.length/2) ) {
            sum -= mat[i][i];
        }
    }
    
    return sum;
};