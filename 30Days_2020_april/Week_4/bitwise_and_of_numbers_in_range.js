/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    let total = m;
    let pow2 = 1;
    
    if ( m == n ) {
        return m;
    }
    
    let allTotal = Math.ceil(Math.log2(m));
    
    for( let i = 0; i <= allTotal; i++){
        if (Math.floor(m/Math.pow(2,i)) % 2 == 1 && m+pow2 <= n) {
            total = total & m+pow2;
        }
        pow2*=2;
    }
    
    if( pow2 <= n ) {
        return 0;
    }
    
    for( let i = m+1; i <= n; i++) {
        total = total & i;
        if( total == 0 ) {
            return 0;
        }
    }        
    

    
    return total;
};