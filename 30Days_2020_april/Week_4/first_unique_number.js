/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.uniques = new Set();
    this.notUnique = new Set();

    for( let number of nums ) {
        if( this.uniques.has(number) || this.notUnique.has(number)  ) {
            this.notUnique.add(number);
            this.uniques.delete(number);
        } else {
            this.uniques.add(number);
        }
    }

    // console.log(this.uniques);
    // console.log(this.notUnique);
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    if( this.uniques.size == 0 ) {
        return -1;
    }

    for( let number of this.uniques ) {
        // console.log(number)
        return number;
    }
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    if( this.uniques.has(value) || this.notUnique.has(value) ) {
        this.notUnique.add(value);
        this.uniques.delete(value);
    } else {
        this.uniques.add(value);
    }
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */