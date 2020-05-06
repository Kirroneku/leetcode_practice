/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let once = new Set();
    let more = new Set();
    let chars = new Map();
    let curI = 0;
    
    for( let c of s ) {
        chars.set(c, curI);
        if( !once.has(c) ) {
            if( !more.has(c) ) {
                once.add(c)
            } 
        } else {
            once.delete(c);
            more.add(c);
        }
        curI++;
    }

    for( let c of once ) {
        return chars.get(c);
    }

    return -1;
};