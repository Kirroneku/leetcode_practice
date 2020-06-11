/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let cowMap = new Map();
    let bulls = 0;
    let cows = 0;
    for( let i = 0 ; i < secret.length; i++ ) {
        if( secret[i] == guess[i] ) {
            bulls++;
        } else {
            if( !cowMap.has( secret[i] ) ) {
                cowMap.set(secret[i], 1);
            } else {
                let balance = cowMap.get(secret[i]) + 1;
                if( balance <= 0 ) {
                    cows++;
                }
                cowMap.set(secret[i], balance);
            }
            
            if( !cowMap.has( guess[i] ) ) {
                cowMap.set(guess[i], -1);
            } else {
                let balance = cowMap.get(guess[i]) - 1;
                if( balance >= 0 ) {
                    cows++;
                }
                cowMap.set(guess[i], balance);
            }
        }
    }
    
    return bulls + "A" + cows + "B";
    
};