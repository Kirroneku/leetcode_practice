/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.random = [];
    
    let sum = 0;
    
    for( let weight of w ) {
        sum += weight;
        this.random.push(sum);
        
    }
    
    this.sum = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let rng = Math.random() * this.sum;
    let i = 0;
    
    while( this.random[i] < rng ) {
        i++;
    }
    
    return i;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */