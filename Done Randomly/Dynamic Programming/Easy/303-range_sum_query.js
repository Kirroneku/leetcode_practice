/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.array = nums;
    this.sumTo = [0];

    let sum = 0;
    for( let i = 0; i < nums.length; i++) {
        sum += this.array[i];
        this.sumTo.push(sum);
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sumTo[j+1] - this.sumTo[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */