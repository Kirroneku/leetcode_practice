/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let seen = new Set();
    
    for (number of nums) {
        if( !seen.has(number)) {
            seen.add(number);
        } else {
            seen.delete(number)
        }
    }
    
    let ans;
    
    for (entry of seen.entries()) {
        ans = entry[0];
    }
    
    return ans;
};