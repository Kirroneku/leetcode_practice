/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let numMap = [0, 0, 0];
    for( let i = 0; i < nums.length; i++ ) {
        numMap[nums[i]]++;
    }
    
    let j = 0;
    for( let i in numMap ) {
        for( let k = 0; k < numMap[i]; k++ ) {
            nums[j] = i;
            j++;
        }           
    }
};