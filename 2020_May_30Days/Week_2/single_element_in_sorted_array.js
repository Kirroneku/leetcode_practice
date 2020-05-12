/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if( nums.length == 1 ) {
        return nums[0]
    }

    let prev = nums[0];

    if( nums[0] != nums[1] ) {
        return nums[0];
    } else if( nums[nums.length-1] != nums[nums.length-2] ) {
        return nums[nums.length-1];
    }

    for( let i = 1; i < nums.length-1; i++ ) {
        if( nums[i] != prev && nums[i] != nums[i+1] ) {
                return nums[i];
        }

        prev = nums[i];
    }

    return nums[nums.length-1];
};