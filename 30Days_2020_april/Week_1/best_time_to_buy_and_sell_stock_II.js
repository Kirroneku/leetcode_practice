/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let curHeld = prices[0];
    let profit = 0;
    let sold = 0;
    let largest = 0;
    for ( let i = 1; i < prices.length; i++ ) {
        if( prices[i] < curHeld || prices[i] < largest ) {
            // console.log("buy", curHeld);
            // console.log("sell", largest);
            profit += sold;
            curHeld = prices[i];
            sold = 0;
            largest = 0;
        } else if ( prices[i] > curHeld ) {
            
            sold = prices[i] - curHeld;
            largest = prices[i];
        }
    }

    profit += sold;
    

    return profit;
};