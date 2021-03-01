/**
 * @param {string} s
 * @return {number}
 */
var flip = ( bit ) => {
    if( bit == '0' ) {
        return '1';
    } 
    return '0';
}

var minOperations = function(s) {
    // Create the two possible strings
    let s1 = "";
    let s2 = "";
    for( let i = 0; i < s.length; i++ ) {
        if( i%2 == 0 ) {
            s1 += '1';
            s2 += '0';
        } else {
            s1 += '0';
            s2 += '1';
        }
    }
    
    let opcount1 = 0;
    let opcount2 = 0;
    
    for( let i = 0; i < s.length; i++ ) {
        if( s1[i] != s[i] ) {
            opcount1++;
        }
        
        if( s2[i] != s[i] ) {
            opcount2++;
        }
    }

    return opcount1 < opcount2? opcount1: opcount2;
};

// ALT SOLN
/**
 * @param {string} s
 * @return {number}
 */
var flip = ( bit ) => {
    if( bit == '0' ) {
        return '1';
    } 
    return '0';
}

var minOperations = function(s) {   
    let opcount1 = 0;
    let opcount2 = 0;
    
    for( let i = 0; i < s.length; i++ ) {
        let cur = s[i];
        if( i%2 == 0 ) {
            if( cur == '1' ) {
                opcount1++;
            } else {
                opcount2++;
            }
        } else {
            if( cur == '0' ) {
                opcount1++;
            } else {
                opcount2++;
            }
        }
    }

    return opcount1 < opcount2? opcount1: opcount2;
};