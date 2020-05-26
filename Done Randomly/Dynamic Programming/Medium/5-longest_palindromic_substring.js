// standard dp soln
// There is the other specific expand from middle algo as well
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if( s == "" ) {
        return "";
    }
    let dp = [];
    let longest = [0, 0];
    // length 1 are palindromes
    for( let i = 0; i < s.length; i++ ) {
        let newArr = [];
        for( let j = 0; j < s.length; j++ ) {
            if( i == j ) {
                newArr.push(true);
            } else {
                newArr.push(false);
            }
            
        } 
        dp.push(newArr);
    } 

    // check if neighbours are equal
    for( let i = 0; i < s.length-1; i++ ) {
        if ( s[i] == s[i+1] ) {
            dp[i][i+1] = true;
            longest[0] = i;
            longest[1] = i+1;
        }
    }

    
    for( let k = 3; k <= s.length; k++ ) {
        for( let i = 0; i <= s.length-k; i++ ) {
            let j = i+k-1;
            if( dp[i+1][j-1] && s[i] == s[j]) {
                dp[i][j] = true;
                longest[0] = i;
                longest[1] = j;
            }
        }
    }
    
    // let ans = "";
    // for( let i = longest[0]; i <= longest[1]; i++ ) {
    //     ans += s[i];
    // }


    return s.substring(longest[0], longest[1]+1);

};