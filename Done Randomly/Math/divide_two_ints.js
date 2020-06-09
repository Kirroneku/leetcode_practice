/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let max = 2**31-1 ;
    let min = 0 - 2**31;
    let negative = 0;
    if( divisor < 0 ) {
        divisor = 0 - divisor;
        negative ++;
    }
    
    if( dividend < 0 ) {
        dividend = 0 - dividend;
        negative ++;
    }
    
    let times = 0;
    let faster = divisor;
    let fasterTimes = 1;
    while( dividend >= divisor ) {
        if( faster > dividend ) {
            faster = divisor;
            fasterTimes = 1;
        }
        
        dividend -= faster;
        times+= fasterTimes;
        
        faster += faster;
        fasterTimes += fasterTimes;
        
    }    
    
    if( negative == 0 || negative == 2 ) {
        if( times > max ) {
            return max;
        }
        return times;
    }
    
    if( times < min ) {
        return min;
    }
    return -times;
};