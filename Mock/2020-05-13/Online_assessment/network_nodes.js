/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
    // Shortest path to all nodes from K
    // Take longest path from there...

    let shortestPaths = [];
    let visted = [];
    for( let i = 0; i <= N; i++ ) {
        shortestPaths.push(Number.MAX_VALUE);
        visted.push(false);
    }
    shortestPaths[0] = -10000;
    // We never have node with 0 -- this is just so we dont need to -1 every time;

    let paths = new Map();
    for( let i = 1; i <= N; i++  ) {
        paths.set(i, new Map());
    }
    // console.log(paths)
    for( let path of times ) {
        (paths.get(path[0])).set(path[1], path[2]);
    }

    let findPathsFrom = [K];
    shortestPaths[K] = 0;

    while( findPathsFrom.length != 0 ) {
        let curNode = findPathsFrom.pop();
        // console.log(curNode)
        let pathMap = paths.get(curNode);
        
        for( let path of pathMap ) {
            let vistingNode = path[0];
            if( shortestPaths[vistingNode] > path[1]+shortestPaths[curNode] ) {
                shortestPaths[vistingNode] = path[1]+shortestPaths[curNode]
                findPathsFrom.push(vistingNode);
            } else if( !visted[vistingNode] ) {
                findPathsFrom.push(vistingNode);
                visted[vistingNode] = true;
            }
        }
        // console.log(shortestPaths)
    }

    let longest = 0;
    for( let path of shortestPaths ) {
        longest = Math.max(path, longest);
    }
    if( longest == Number.MAX_VALUE ) {
        return -1;
    }
    return longest;
};

// console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2))