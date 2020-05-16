/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.collection = nums.sort((a,b) => b - a);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.collection.length == 0 ) {
        this.collection.push(val)
    }

    for( let i = 0; i < this.collection.length; i++ ) {
        if( val > this.collection[i] ) {
            this.collection.splice(i, 0, val);
            break;
        } else if( i == this.collection.length-1 ) {
            this.collection.push(val);
            break;
        }
    }
    // console.log(this.collection)
    return this.collection[this.k-1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */