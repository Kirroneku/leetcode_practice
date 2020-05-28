/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if( x < 0 || ( x%10 == 0 && x != 0 )) {
        return false;
    }

    let paliNum = 0;

    while( paliNum < x ) {
        paliNum = paliNum*10 + x%10;
        x = Math.floor(x/10);
    }

    return x == paliNum || x == Math.floor(paliNum/10);
};