/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix || matrix.length < 1 || matrix[0].length <1) {
        return false;
    }
    let x = matrix[0].length-1, y = 0;
    
    while( x >= 0 && y < matrix.length ) {
        if( target == matrix[y][x] ) {
            return true;
        } else if ( target < matrix[y][x] ) {
            x--;
        } else if ( target > matrix[y][x] ) {
            y++;
        }
    }
    
    return false;
};