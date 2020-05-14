/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let bestClimb = new Array(cost.length+1).fill(Number.MAX_VALUE);
    bestClimb[cost.length] = 0;

    for( let i = cost.length; i > 0 ; i-- ) {
        if( i - 2 > -1 ) {
            bestClimb[i-2] = Math.min(bestClimb[i]+cost[i-2], bestClimb[i-2]);
        }

        bestClimb[i-1] = Math.min(bestClimb[i]+cost[i-1], bestClimb[i-1]);
    }

    return Math.min(bestClimb[0], bestClimb[1]);
};