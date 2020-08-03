/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
   
    let seen = new Set();

    while( true ) {
        if( seen.has(n) ) {
            return false
        }

        seen.add(n);

        let newNumber = 0;
        while( n != 0 ) {
            newNumber += (n%10)**2;
            n = Math.floor(n/10);
        }
                
        if ( newNumber == 1 ) {
            return true;
        }


        n = newNumber
    }    
};

isHappy(2)