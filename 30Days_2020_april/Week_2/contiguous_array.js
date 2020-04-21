/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let maxCont = 0;
    let current = [0, 0];
    for(let number of nums) {
        current[number] ++;
    }
    for(let i in nums) {
        if( current[0] + current[1] < maxCont) {
            break;
        }
        
        let currCounts = [current[0], current[1]];

        let j = nums.length-1
        for ( ; j > i; j-- ) {
            if( currCounts[0] == currCounts[1] ) {
                break;
            }
            currCounts[nums[j]]--;
        }
        // console.log(i, j, currCounts)
        if( j-i != 0 ){
            maxCont = Math.max(maxCont, j-i+1);
        }

        current[nums[i]]--;
    }    

    return maxCont;
};

// console.log(findMaxLength([0,1,1,0,1,1,1,0]))