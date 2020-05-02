/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dup = new Set();

    for( let num of nums ) {
        if ( dup.has(num) ) {
            return true;
        }
        dup.add(num);
    }

    return false;
    
};