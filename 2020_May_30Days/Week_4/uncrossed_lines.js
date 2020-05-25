/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
    var dp = [];
    for( let i = 0; i < A.length; i ++ ) {
        let newArr = [];
        for( let j = 0; j < B.length; j++) {
            newArr.push(-1);
        }
        dp.push(newArr);
    }

    var dpHelper = function( A , B , i , j ) {
        if( i == A.length || j == B.length ) {
            return 0;
        }

        if( dp[i][j] != -1 ) {
            return dp[i][j];
        }

        if( A[i] == B[j] ) {
            dp[i][j] = 1 + dpHelper(A, B, i+1, j+1);
        } else {
            dp[i][j] = Math.max(dpHelper( A, B, i+1, j), dpHelper( A, B, i, j+1));
        }
        return dp[i][j];
      
    }

    return dpHelper(A, B, 0, 0);
};