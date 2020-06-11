/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.collection = [];
    this.max = -1 * Number.MAX_VALUE;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if( this.collection.length == 0 ) {
        this.collection.push(num);
        this.max = num;
        return;
    }
    
    if( num >= this.max ) {
        this.collection.push(num);
        this.max = num;
        return;
    }
    
    for( let i = 0; i < this.collection.length; i ++ ) {
        if( this.collection[i] >= num ) {
            this.collection.splice(i, 0, num);
            return;
        }
    }
    
    
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    // console.log(this.collection);
    let len = this.collection.length;
    if( len % 2 == 1 ) {
        return this.collection[Math.floor(len/2)];
    } else {
        return (this.collection[len/2-1] + this.collection[len/2])/2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */