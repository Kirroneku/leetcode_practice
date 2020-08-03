/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let dp = [];
    
    for( let i = 0; i <= word1.length; i++ ) {
        let arr = [];
        for( let j = 0; j <= word2.length; j++ ) {
            arr.push(0);
        }
        dp.push(arr);
    }
    
    for( let i = 0; i <= word1.length; i++ ) {
        for( let j = 0; j <= word2.length; j++ ) {
            if( i == 0 ) {
                dp[i][j] = j;
            }

            else if( j == 0 ) {
                dp[i][j] = i;
            }

            else if( word1 != undefined && word1[i-1] == word2[j-1] ) {
                dp[i][j] = dp[i-1][j-1];
            }

            else{
                dp[i][j] = 1 + Math.min( dp[i-1][j],
                                Math.min( dp[i][j-1],
                                 dp[i-1][j-1]));
                }
        }
    }
    
    return dp[word1.length][word2.length];
};