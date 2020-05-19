/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    nums = nums.sort((a,b) => b - a);

    let totalSum = 0;

    for( let num of nums ) {
        totalSum += num;
    }

    if( totalSum%k != 0 ) {
        return false;
    }

    var target = totalSum/k;
    var visited = new Array(nums.length).fill(false);
  
    var isReachable = function (start, numberOfSubsets, currentSum) {
        if (numberOfSubsets === 1) {
            return true;
        }

        if (currentSum === target) {
            return isReachable(0, numberOfSubsets - 1, 0);
        }

        for (let i = start; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                if (isReachable(i + 1, numberOfSubsets, currentSum + nums[i])) {
                    return true;
                }
                visited[i] = false;
            }
        }

        return false;
    };
  
    return isReachable(0, k, 0);
};

// console.log(canPartitionKSubsets([4,3,2,3,5,2,1], 4));