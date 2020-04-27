/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    return nums.length <= 1 || jumpHelper(nums, nums.length-1);
};

var jumpHelper = function(nums, curIndex) {
    for( let i = 0; i < curIndex; i--) {
        if( curIndex-i == 0 ) {
            return true;
        }
        if(nums[curIndex-i] >= i ) {
            if(jumpHelper(nums, curIndex-i)) {
                return true;
            }
        }
    }

    return false;
}

console.log(canJump([2,0]));