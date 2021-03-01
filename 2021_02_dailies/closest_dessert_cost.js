/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function(baseCosts, toppingCosts, target) {
    
    let toppingCostsMap = toppingCosts.map((cost) => 2);
    
    var bestAbs = ( val1, val2, target ) => {
        let abs1 = Math.abs(val1 - target);
        let abs2 = Math.abs(val2 - target);
        if( abs1 == abs2 ) {
            return Math.min(val1, val2);
        }
        return abs1 < abs2 ? val1: val2;
    }
    
    var getToppings = ( cost ) => {
        let max = cost;
        for( let i = 0; i < toppingCosts.length; i++ ) {
            if( toppingCostsMap[i] == 0 ) {
                continue;
            }
            
            let price = toppingCosts[i];
            toppingCostsMap[i]--;
            if( price + cost > target ) {
                max = bestAbs(max, price + cost, target);
            } else {
                max = bestAbs(max, getToppings( price + cost ), target);
            }
            toppingCostsMap[i]++;
        }
        
        return max;
    }
    
    let closestPrice = baseCosts[0];
    
    for( let base of baseCosts ) {
        closestPrice = bestAbs(closestPrice, getToppings(base), target);
    }
    
    return closestPrice;
};