/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
    let ones = 1;
    let digits = 1;
    
    let modulos = new Set();

    while( true ) {
        if( ones%K == 0 ) {
            return digits;
        } else if ( modulos.has(ones) ) {
            return -1;
        }
        digits++;
        ones = (ones*10+1) % K;
        modulos.add(ones);
    }

    // return -1;
};

// console.log(smallestRepunitDivByK(2))