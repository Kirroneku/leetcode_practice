/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let hold = [], notHold = [];
    
    hold[0] = -prices[0];
    notHold[0] = 0;
    
    for( let i = 1; i < prices.length; i++ ) {
        hold[i] = Math.max(hold[i-1], notHold[i-1] - prices[i]);
        notHold[i] = Math.max(notHold[i-1], hold[i-1] - fee + prices[i]);
    }
    
    return notHold[prices.length - 1];
};

