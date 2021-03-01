/**
 * @param {number[]} height
 * @return {number}
 */

// A MUCH BETTER SOLN IS WITH BINARY SEARCH
var maxArea = function(height) {
    let maxA = 0;
    for( let i = 0; i < height.length-1; i++ ) {
        let first = height[i];
        for( let j = i+1; j < height.length; j++ ) {
            maxA = Math.max(Math.min( first, height[j] ) * (j-i), maxA);
        }
    }
    
    return maxA;
};