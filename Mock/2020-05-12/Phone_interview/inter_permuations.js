/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let allPerms = [];
    
    var findPerms = function( nums, used ) {
        // console.log(used, nums)
        for( let number of nums ) {
            if( !used.has(number) ) {
                findPerms(nums, used.add(number));
                used.delete(number);
            } 

        }
       
        if( used.size == nums.length ) {
            let newPerms = [];
            for( let value of used.values() ) {
                newPerms.push(value)
            }

            allPerms.push(newPerms);
        } 
    }

    findPerms( nums, new Set());
    return allPerms;
};