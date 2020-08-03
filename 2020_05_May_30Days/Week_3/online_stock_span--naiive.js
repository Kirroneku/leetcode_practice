
var StockSpanner = function() {
    this.collection = [];
    // this.spanner = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let lower = 1;
    for( let i = this.collection.length-1; i >= 0; i-- ) {
        if( this.collection[i] <= price ) {
            lower ++;
        } else {
            break;
        }
    }
    
    this.collection.push(price);
    return lower;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */