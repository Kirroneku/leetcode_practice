/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let numFromBack = nums.length-1;
    let numOfVals = 0;

    for( let num in nums ) {
        
        if( nums[num] == val ) {
            while( nums[numFromBack] == val ) {
                numFromBack--;
            }
            
            if( numFromBack <= num ) {
                break;
            }
            
            let temp = nums[numFromBack];
            nums[numFromBack] = nums[num];
            nums[num] = temp;
        }
        numOfVals++;
    }
    
    
    
    
    return numOfVals;
};