/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = prices[0];
    let profit = 0;

    for( let i = 1; i < prices.length; i++ ) {
        profit = Math.max(prices[i]-lowest, profit);
        lowest = Math.min(lowest, prices[i]);
    }
    
    return profit;
};