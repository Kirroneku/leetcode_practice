/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let curSumArray = [];
    let curSum = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++) {

        while( curSum + nums[i] > k ) {
            curSum -= curSumArray.shift();
        }
        
        curSum += nums[i];
        curSumArray.push(nums[i]);
        // console.log(curSumArray);

        if( curSum == k ) {
            count++;
        }
    }

    return count;
};

console.log(subarraySum([1,2,1,2,1], 3));