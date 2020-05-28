/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxA = 0;

    let left = 0;
    let right = height.length-1;

    while( left < right ) {
        maxA = Math.max(maxA, Math.min(height[left], height[right])*(right-left));

        if( height[left] < height[right]) {
            left++
        } else {
            right--;
        }
    }
    // for( let i = 0; i < height.length; i++ ) {
    //     let firstPillar = height[i];
    //     for ( let j = i+1; j < height.length; j++ ) {
    //         
    //     }
    // }

    return maxA;
};