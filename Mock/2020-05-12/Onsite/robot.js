/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

*/
var uniquePaths = function(m, n) {
    var paths = [];
    for( let i = 0; i < m; i ++ ) {
        paths.push([])
        for( let j = 0; j < n; j ++ ) {
            paths[i].push(1);
        } 
    }

    for( let i = 1; i < m; i ++ ) {
        for( let j = 1; j < n; j ++ ) {
            paths[i][j] = paths[i-1][j] + paths[i][j-1];
        } 
    }

    // console.log(paths)
    return paths[m-1][n-1];
};