/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    return nums.length <= 1 || jumpHelper(nums, 0);
};

var jumpHelper = function(nums, curIndex) {
    for( let i = nums[curIndex]; i > 0; i --) {
        if( curIndex+i == nums.length-1 ) {
            return true;
        }

        if(nums[curIndex+i] != 0) {
            if(jumpHelper(nums, curIndex+i)) {
                return true;
            }
        }
    }

    return false;
}

console.log(canJump([2,0]));