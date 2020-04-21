/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minimum = Number.MAX_VALUE;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    this.minimum = Math.min(x, this.minimum);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped = this.stack.pop();
    
    if ( popped === this.minimum ){
        this.minimum = Number.MAX_VALUE;
        for(let i of this.stack){
            this.minimum = Math.min(this.minimum, i);
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // if( this.stack.length == 0 ) {
    //     return null;
    // }

    return this.minimum;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */