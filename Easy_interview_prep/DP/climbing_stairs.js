/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let step = new Array(n+1).fill(0);

    for( let i = 0; i <= n; i++ ) {
        if( i + 1 <= n ) {
            step[i+1] += 1;
        } 

        if( i + 2 <= n ) {
            step[i+2] += 1;
        }
    }
    
    return step[n];
};