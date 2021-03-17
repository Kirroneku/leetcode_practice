/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {

    let pyth = this.radius+1;
    while( pyth >= this.radius ) {
        var x = ((Math.random()*2)-1)*this.radius;
        var y = ((Math.random()*2)-1)*this.radius;
        pyth = Math.sqrt(x**2 + y**2);
    }
    
    return [
        this.x_center+x, 
        this.y_center+y
    ];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */