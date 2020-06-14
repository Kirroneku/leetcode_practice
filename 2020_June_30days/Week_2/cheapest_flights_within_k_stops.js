/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    let graph = new Map();

    // Map [ src , map of destinations with costs associated ]
    for( let i = 0; i < flights.length; i++ ) {
        let current = flights[i];
        if( graph.has(current[0]) ) {
            graph.get(current[0]).push([current[1], current[2]]);
        } else {
            // let newMap = new Map();
            // newMap.set(currnet[1], current[2]);
            graph.set(current[0], [ [current[1], current[2]] ]);
        }
    }
    
    let queue = [ [src, 0] ];
    let nextQueue = [];
    // let visited = new Set();
    let cheapestCost = Number.MAX_VALUE;
    let iterations = -1;
    let found = false;

    while( queue.length != 0 && iterations != K ) {
        let current = queue.pop();
        let currentSrc = current[0];
        let currentCost = current[1];
        if( graph.has( currentSrc ) ) {
            let curFlights = graph.get(currentSrc);

            for( var i = 0; i < curFlights.length; i ++ ) {
                let curFlight = curFlights[i];
                let newTotal  = currentCost + curFlight[1];
                if( curFlight[0] == dst ) {
                    cheapestCost = Math.min(newTotal, cheapestCost);
                    found = true;
                } else if( cheapestCost > newTotal ) {
                    nextQueue.push([curFlight[0],  newTotal]);
                }
            }
                        
        }
        // console.log(queue);
        if( queue.length == 0 ) {
            iterations++;
            queue = null;
            queue = nextQueue;
            nextQueue = [];
        }

    }    
    
    if( !found ) {
        return -1;
    }

    return cheapestCost;
};