
var FreqStack = function() {
    FreqStack.stack = [];
    FreqStack.mappings = new Map();

};


/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    FreqStack.stack.push(x);
    if( FreqStack.mappings.has(x) ) {
        FreqStack.mappings.set(x, FreqStack.mappings.get(x)+1);
    } else {
        FreqStack.mappings.set(x, 1);
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    if( !FreqStack.stack ) {
        return undefined;
    }
    
    let mostFreq = new Set();
    let freq = 0;

    for( let [key, value] of FreqStack.mappings.entries() ) {
        if( value == freq ) {
            mostFreq.add(key);
        } else if( value > freq ) {
            mostFreq.clear();
            mostFreq.add(key);
            freq = value;
        }
    }
    
    
    for( let i = FreqStack.stack.length-1; i >= 0; i--) {
        let cur = FreqStack.stack[i];
        if( mostFreq.has(cur) ) {
            FreqStack.mappings.set(cur, FreqStack.mappings.get(cur)-1)
            FreqStack.stack.splice(i, 1);
            return cur;
        }
    }
    
    return undefined;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */