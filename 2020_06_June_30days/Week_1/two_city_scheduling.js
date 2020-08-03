/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs = costs.sort((a, b) => Math.abs(a[0] - a[1]) > Math.abs(b[0] - b[1]) ? -1: 1);
    console.log(costs);
    
    let flightsPerCity = costs.length/2;
    
    let totalCosts = 0;
    
    let aFlights = 0;
    let bFlights = 0;

    for( let flight of costs ) {
        if( (aFlights < flightsPerCity && flight[0] < flight[1]) || bFlights == flightsPerCity ) {
            // console.log('a', flight[0]);
            aFlights++;
            totalCosts += flight[0];
        } else {
            // console.log('b', flight[1]);
            bFlights++;
            totalCosts += flight[1];
        }
        
        
    }
    return totalCosts;
};