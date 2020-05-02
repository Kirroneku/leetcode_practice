/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let curDigit = digits.length-1;
    while( true ) {
        if( digits[curDigit] != 9 ) {
            digits[curDigit] += 1;
            break;
        } else {
            digits[curDigit] = 0;
            curDigit--;
        }
    }

    // let pow10 = 1;
    // let total = 0;
    // for( let i = digits.length-1; i > 0; i-- ) {
    //     total += digits[i]*pow10;
    //     pow10 *= 10;
    // }

    return digits;
};