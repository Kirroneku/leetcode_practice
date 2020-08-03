/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    let result = [];
    if( nums.length == 0 ) {
        return result;
    }
    nums = nums.sort((a, b) => a - b);
    let count = [];
    let prev = [];
    
    for( let i = 0; i < nums.length; i++ ) {       
        count.push(1);
        prev.push(-1);
    }
    
    let max = 0;
    let maxIndex = -1;
    
    for( let i = 0; i < nums.length; i++ ) {   
        for( let j = i - 1; j >= 0; j-- ) {
            if( nums[i]%nums[j] == 0 && count[j]+1 > count[i] ) {
                count[i] = count[j]+1;
                prev[i] = j;
            }
        }
        
        if( max < count[i] ) {
            max = count[i];
            maxIndex = i;
        }
    }
    
    let i = maxIndex;
    while( i >= 0 ) {
        result.push(nums[i] );
        i = prev[i];
    }
    
    return result;
};