/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = new Map();
    for( let num of nums ) {
        if( count.has(num) ) {
            let counter = count.get(num);

            if( counter+1 > nums.length/2 ) {
                return num;
            }

            count.set(num, counter+1);
        } else {
            count.set(num, 1);
        }
    }
    let ans = 0;
    let max = 0;
    for( let num of count ) {
        if( num[1] > max ) {
            max = num[1];
            ans = num[0];
        }
    }

    return ans;
};