/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let copyNums = nums.map((x) => x);
    
    copyNums.sort((x, y) => x - y);
    let startSort = false;
    let startIndex = 0;
    let endIndex = 0;
    
    for( let i = 0; i < nums.length; i++ ) {
        if( copyNums[i] != nums[i] ) {
            if( !startSort ) {
                startIndex = i;
                startSort = true;
            } else {
                endIndex = i;
            }
        }
    }

    if( !startSort ) {
        return 0;
    }
    return endIndex - startIndex + 1;
};