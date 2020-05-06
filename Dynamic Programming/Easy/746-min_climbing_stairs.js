/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let bestClimb = new Array(cost.length+1).fill(Number.MAX_VALUE);
    bestClimb[0] = cost[0];
    bestClimb[1] = cost[1];
    bestClimb[cost.length] = 0;

    for( let i = 0; i < cost.length; i++ ) {
        bestClimb[i+1] = Math.min(bestClimb[i]+cost[i+1], bestClimb[i+1]);
        bestClimb[i+2] = Math.min(bestClimb[i]+cost[i+2], bestClimb[i+2]);
    }

    return bestClimb[cost.length];
};