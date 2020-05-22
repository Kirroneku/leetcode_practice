/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let m = matrix.length, n = matrix[0].length;

    let dp = [];

    for( let i = 0; i < m; i++ ) { 
        dp.push([]);
        for( let j = 0; j < n; j++ ){
            dp[i].push(0);
        }
    }

    let squares = 0;
    for( let i = 0; i < m; i++ ) { 
        for( let j = 0; j < n; j++ ){
            if( i == 0 || j == 0 ) {
                dp[i][j] = matrix[i][j];
            } else if(matrix[i][j] == 1) {
                dp[i][j] = Math.min(dp[i - 1][j], Math.min( dp[i-1][j-1], dp[i][j-1] ) ) + 1;
            }

            squares += dp[i][j];
        }
    }

    return squares;
};