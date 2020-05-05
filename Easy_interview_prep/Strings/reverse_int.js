/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ans = 0;
    let neg = (x < 0);

    neg == true? x*=-1: x;

    while( x != 0 ) {
        ans *= 10;
        ans += x%10;
        x = Math.floor(x/10);
    }

    // Cant overflow
    if( ans < (-2)**31-1 || ans > 2**31 ) {
        return 0;
    }

    return neg == true? ans*-1: ans;

};