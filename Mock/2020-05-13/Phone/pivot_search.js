/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if( nums.length == 0 ) {
        return false;
    }
    if( target == nums[0] ) {
        return true;
    }

    if( target < nums[0] ) {
        for( let i = nums.length-1; i >= 0; i-- ) {
            if( target == nums[i] ) {
                return true;
            } else if ( nums[i] > nums[0]) {
                return false;
            }
        }
    } else {
        for( let i = 0; i < nums.length; i++ ) {
            if( target == nums[i] ) {
                return true;
            } else if ( nums[i] < nums[0]) {
                return false;
            }
        }
    }

    return false;
};