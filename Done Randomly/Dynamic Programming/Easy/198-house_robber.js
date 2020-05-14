/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function( nums ) {
    var bestRoute = new Array(nums.length).fill(-1);
    // Recursive option goes over the same nodes a few times
    var robHelper = function( nums, currentlyRobbing ) {
        if( currentlyRobbing >= nums.length ) {
            return 0;
        } 

        if( bestRoute[currentlyRobbing] != -1 ) {
            return bestRoute[currentlyRobbing];
        }

        let best = Math.max(nums[currentlyRobbing] + robHelper(nums, currentlyRobbing+2), 
                        robHelper(nums, currentlyRobbing+1));
                        
        bestRoute[currentlyRobbing] = best;
        // console.log(bestRoute);
        return best;
    }
    

    return robHelper(nums, 0);
};

