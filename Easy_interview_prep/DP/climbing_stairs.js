/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let step = new Array(n+1).fill(0);
    step[0] = 1;
    for( let i = 0; i <= n; i++ ) {
        if( i + 1 <= n ) {
            step[i+1] += step[i];
        } 

        if( i + 2 <= n ) {
            step[i+2] += step[i];
        }
    }

    // console.log(step);

    return step[n];
};