/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let total = 0;
    let soln = 0;
    
    if( divisor == 0 || dividend == 0 ) {
        return 0;
    }
    
    if((divisor < 0 && dividend < 0) || (divisor > 0 && dividend > 0)) {
        if( dividend < 0 ) {
            while( total + divisor >= dividend ) {
                total += divisor;
                soln ++;
            }
        } else {
            while( total + divisor <= dividend ) {
                total += divisor;
                soln ++;
            }
        }
    } else {
        if( dividend < 0 ) {
            while( total - divisor >= dividend ) {
                total -= divisor;
                soln --;
            }
        } else {
            while( total - divisor <= dividend ) {
                total -= divisor;
                soln --;
            }
        }

    }
    
    if( soln < -(2**31) ) {
        return -(2**31);
    }
    
    if( soln > 2**31-1 ) {
        return 2**31-1;
    }
    
    return soln;
};