/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {    
    // console.log(text1[text1.length])
    return LCS(text1, text2);
};

var LCS = function(text1, text2) {
    let subarray = new Array(text1.length+1);
    for( let i = 0; i <= text1.length; i++){
        subarray[i] = new Array(text2.length+1).fill(0);
    }
    // subarray[0][0] = 20;
    // console.log(subarray);
    
    for(let l1 = 0; l1 <= text1.length; l1 ++) {
        for(let l2 = 0; l2 <= text2.length; l2 ++) {
            if( l1 == 0 || l2 == 0 ) {
                subarray[l1][l2] = 0;
            } else if( text1[l1-1] == text2[l2-1] ) {
                subarray[l1][l2] = 1 + subarray[l1-1][l2-1];
            } else {
                subarray[l1][l2] = Math.max(subarray[l1][l2-1], subarray[l1-1][l2]);
            }        
        }
    }

    // console.log(subarray)
    return subarray[text1.length][text2.length]
}