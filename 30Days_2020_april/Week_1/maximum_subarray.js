/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largestBefore = nums[0];
    let max = nums[0];
    for ( let i = 1 ; i < nums.length; i++ ) {
        // console.log(largestBefore)
        let number = nums[i]
        if( number < 0 ) {
            largestBefore = Math.max(largestBefore + number, number)
        } else {
            if ( largestBefore < 0 ) {
                largestBefore = number;
            } else {
                largestBefore += number;
            }
        }
        max = Math.max(max, largestBefore);
    }
    
    return max;
};