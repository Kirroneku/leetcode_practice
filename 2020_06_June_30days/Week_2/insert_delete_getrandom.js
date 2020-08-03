/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.rngToNumber = new Map();
    this.numberToRNG = new Map();
    this.rngToReplace = [];
    this.currentRNG = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if( !this.numberToRNG.has(val) ) {
        let random = 0;
        if( this.rngToReplace.length != 0 ) {
            random = this.rngToReplace.pop();
        }  else {
            random = this.currentRNG++;
        }
        
        this.rngToNumber.set(random, val);
        this.numberToRNG.set(val, random);
        
        return true;
    }
    
    return false;
    
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if( this.numberToRNG.has(val) ) {
        let random = this.numberToRNG.get(val);
        this.numberToRNG.delete(val);
        this.rngToNumber.delete(random);
        this.rngToReplace.push(random);
        return true;
    }
    
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let random = Math.round(Math.random()*this.currentRNG);
    
    while( true ) {
        if( this.rngToNumber.has(random) ) {
            return this.rngToNumber.get(random);
        }
        
        random = Math.round(Math.random()*this.currentRNG);
    }
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */