/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const isPrime = new Array(n).fill(true);

    let primes = 0;

    for( let i = 2; i * i < n; i++ ) {
        if( isPrime[i] ) {
            for( let j = i; i * j < n; j++ ) {
                isPrime[i*j] = false;
            }
        }
    }

    for( let i = 2; i < n; i++ ) {
        if( isPrime[i] ) {
            primes++;
        }
    }

    return primes;
};