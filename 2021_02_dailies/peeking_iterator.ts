/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
    index: number = 0;
    tracker = [];
    
    constructor(iterator: Iterator) {
        while(iterator.hasNext()) {
            this.tracker.push(iterator.next());
        }
    }

    peek(): number {
        return this.tracker[this.index];
    }

    next(): number {
        console.log(this.index);
        if( this.hasNext() ) {
            return this.tracker[this.index++];
        }
        
        return undefined;
    }

    hasNext(): boolean {
        return this.index < this.tracker.length;
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */