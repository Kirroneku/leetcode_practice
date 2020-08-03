/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let sqr = 1;
    let sqrNum = 1;
    while( sqrNum <= num ) {
        if( sqrNum == num ) {
            return true;
        }

        sqr++;
        sqrNum = sqr * sqr;
    }

    return false;
};