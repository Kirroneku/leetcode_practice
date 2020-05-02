/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let comp = new Map();

    for( let i = 0; i < nums.length; i++) {
        

        if( comp.has(nums[i]) ) {
            return [comp.get(nums[i]), i];
        }

        comp.set(target-nums[i], i);
        // console.log(comp);
    }

    return;
};