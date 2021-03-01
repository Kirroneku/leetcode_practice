/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
    let operations = 0;
    if( X < Y ) {
        while( X != Y ) {
            
            if( Y%2 == 0 && X < Y) {
                Y /= 2;
            } else {
                Y += 1;
            }
            operations++;
        }
    } else {
        return X - Y;
    }
    return operations;

};