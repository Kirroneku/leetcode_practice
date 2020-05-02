/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let max = -1*Number.MAX_VALUE;
    for( num of nums ) {
        max = Math.max(max, num);
    }

    for( let i = 0; i < nums.length; i++) {
        if( max + nums[i] < target ) {
            continue;
        } 

        for( let j = i+1; j < nums.length; j++ ) {
            if( nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }

    return;
};