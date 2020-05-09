/**
 * @param {string[]} D
 * @param {number} N
 * @return {number}
 */
var atMostNGivenDigitSet = function(D, N) {
    var set = 0;
    var mutli = N.toString();
    var setHelper = function( D, N, cur, times ) {
        for( digit of D ) {
            let current = cur + digit*times;
            // console.log(current, times);
            if( current <= N && times >= 1) {
                // set.push(current);
                if( times == 1 ) {
                    set++;
                }
                setHelper(D, N, current, times/10);
            }
        }
    }

    setHelper(D, N, 0, 10**(mutli.length-1));

    for( let i = 1; i < mutli.length; i++) {
        set += D.length**i;
    }
    
    return set;
};