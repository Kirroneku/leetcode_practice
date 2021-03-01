/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    let copy = d.map((x) => x);
    let longest = 0;
    
    let possible = [];
    
    for( let char of s ) {
        for( let i = 0; i < copy.length; i++ ) {
            let cur = copy[i];
            if ( longest > cur.length || cur.length == 0 ) {
                continue;
            }
            
            if( cur[0] == char ) {
                cur = cur.substring(1);
                copy[i] = cur;
                if( cur.length == 0 ) {
                    possible.push(i);
                }
            }
        }
    }
    
    let largest = "";
    for( let index of possible ) {
        let str = d[index];
        if( (str.length > largest.length) ||
            (str.length == largest.length && str < largest)
          ) {
            largest = str;
        } 
    }
    
    return largest;    
};