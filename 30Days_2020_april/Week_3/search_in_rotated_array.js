/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let pivot = nums[0];
    if( pivot == target ) {
        return 0;
    }

    let range = [0, nums.length];

    let lessThanPivot = pivot > target;

    while( True ) {
        if( range[0] == range[1] ) {
            if( nums[range[0]] == target ) {
                return range[0];
            }
            return -1;
        }

        let cur = nums[(range[1]-range[0])/2];
        if(  cur == target ) {
            return curIndex;
        } else if( cur < target ) {

        } else if( cur > target ) { 

        }
    }
};