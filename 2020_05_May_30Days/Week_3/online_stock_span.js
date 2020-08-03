
var StockSpanner = function() {
    this.stocks = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    if( this.stocks.length == 0 ) {
        this.stocks.push([price, 1]);
        return 1;
    }
    
    let larger = [];
    let newStock = 1;
    
    for( let i = 0; i < this.stocks.length; i++ ) {
        let stock = this.stocks[i];
        
        if( stock[0] > price ) {
            larger.push(stock);
        } else {
            newStock += stock[1];
        }
    }
    
    
    larger.push([price, newStock]);
    this.stocks = larger;
    return newStock;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */