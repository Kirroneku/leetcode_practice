/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {   
    var binSearch = function( nums, target, l, r ) {
        let mid = Math.floor(l + (r - l)/2);
        // console.log(mid)
        if( nums[mid] >= target ) {
            if( nums[mid-1] < target ) {
                return mid;
            }
            
            return binSearch( nums, target, l, mid-1);
        } 
        
        if( nums[mid+1] >= target ) {
            return mid+1;
        }
            
        return binSearch( nums, target, mid+1, r);
        
    }
    
    let n = nums.length-1;
    
    if( nums[0] >= target ) {
        return 0;
    } else if (nums[n] < target ) {
        return n+1;
    }
    
    return binSearch( nums, target, 0, n);
};