/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const isPrime = new Array(n).fill(true);
    
    if( n <= 1 ) {
        return 0;
    } 

    let primes = 0;

    for( let i = 2; i * i < n; i++ ) {
        let sqrtOfI = Math.sqrt(i);

        let isPrime = true;
        for( let j = 2; j <= sqrtOfI; j++ ) {
            if( i % j == 0) {
                isPrime = false;
                break;
            }
        }

        if( isPrime ) {
            primes++;
        }
    }

    return primes;
};