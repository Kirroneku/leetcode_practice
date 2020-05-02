/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if( nums.length <= 1 ) {
        return nums;
    }

    let j = 0;
    let prev = undefined;

    // while ( curIndex < max ) {
    //     if( prev == nums[curIndex] ) {
    //         nums.splice(curIndex, 1);
    //         max--;
    //     } else {
    //         prev = nums[curIndex];
    //         curIndex++;
    //     }
    //     // console.log(nums, prev, max, curIndex);
    // }
    // console.log(nums)
    
    for ( let i = 0; i < nums.length; i++) {
        if( nums[i] != prev ) {
            nums[j] = nums[i];
            j++;
        }

        prev = nums[i];
    }

    return j;
};