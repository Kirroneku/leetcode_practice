/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if( nums.length == 1 ) {
        return;
    }
    
    let lastZero = 0
    for( let i = 0; i < nums.length; i++ ){
        if ( nums[i] == 0 ) {
            let zeroes = 1
            while(nums[i+zeroes] === 0){
                zeroes++;
                if( i + zeroes >= nums.length ) {
                    return;
                }
            }        
           if( i + zeroes >= nums.length ) {
                return;
            } 
            nums[i] = nums[i+zeroes]
            nums[i+zeroes] = 0
        }      
    }       

};