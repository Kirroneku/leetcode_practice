/**
 * @param {string[]} D
 * @param {number} N
 * @return {number}
 */
var atMostNGivenDigitSet = function(D, N) {
    var set = 0;
    var mutli = N.toString();
    var setHelper = function( D, N, cur, times ) {

        for( let i = D.length-1; i >= 0; i-- ) {
            let current = cur + D[i]*times;
            if( i == D.length-1 ) {
                // console.log(D[i], (Math.floor(N/times))%10 );
                if(  D[i] < Math.floor(N/times)%10 ) {
                    let counter = 1;
                    
                    while( times >= 1 ) {
                        set += D.length**counter;
                        counter++;
                        times /= 10;
                    }
                    // console.log(current);
                    break;
                }
            }
            // console.log("HANG")
            if( current <= N && times >= 1) {
                // set.push(current);
                // console.log(current)
                if( times == 1 ) {
                    set++;
                }
                setHelper(D, N, current, times/10);
            }
        }
    }

    if( D[D.length-1] < mutli[0] ) {
        for( let i = 1; i < mutli.length+1; i++) {
            set += D.length**i;
        }
    } else {
        setHelper(D, N, 0, 10**(mutli.length-1));
    
        for( let i = 1; i < mutli.length; i++) {
            set += D.length**i;
        }
    }

    
    return set;
};

// console.log(atMostNGivenDigitSet(["7"], 8))