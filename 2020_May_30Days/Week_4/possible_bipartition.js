/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    var graph = new Map();
    var colors = new Map();
    
    for( let i = 1; i <= N; i ++) {
        graph.set(i, []);
    }

    for( let dl of dislikes ) {
        graph.get(dl[0]).push(dl[1]);
        graph.get(dl[1]).push(dl[0]);
    }


    var dfs = function( node, color ) {
        if( colors.has(node) ) return colors.get(node) == color;

        colors.set(node, color);

        for( let neighbour of graph.get(node) ) {
            if( !dfs(neighbour, color == 0? 1: 0 )) return false;
        }

        return true;
    }

    for( let i = 1; i <= N; i ++) {
        if( !colors.has(i) && !dfs(i, 0) ) {
            return false;
        } 
    }

    return true;
};