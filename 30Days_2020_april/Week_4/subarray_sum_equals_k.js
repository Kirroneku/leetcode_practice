/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sumTo = [0]
    let sum = 0;
    let total = 0;
    // let sumMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sumTo.push(sum);
    }
    // console.log(sumTo);
    for( let sum1 = 0; sum1 < sumTo.length; sum1++) {
        for( let sum2 = sum1+1; sum2 < sumTo.length; sum2++ ) {
            if( sumTo[sum2] - sumTo[sum1] == k ) {
                total++;
            }
            // console.log(sum1, sum2, "LOL:", sumTo[sum2] - sumTo[sum1], total)
        }
    }

    return total;
};

// console.log(subarraySum([1,2,1,2,1], 3));