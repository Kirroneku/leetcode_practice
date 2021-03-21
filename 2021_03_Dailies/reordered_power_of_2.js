/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function(N) {
    let possible2s = [];
    for( let i = 1; i.toString().length <= N.toString().length; i*=2) {
        possible2s.push(i);
    }
    
    let nStr = N.toString();
    let digitsN = new Array(10).fill(0);
    
    for( let i = 0; i < nStr.length; i++) {
        digitsN[Number.parseInt(nStr[i])]++;
    }
    
    
    for( let i = possible2s.length-1; i >= 0; i--) {
        let cur = possible2s[i].toString();
        if( cur.length < nStr.length ) {
            break;
        }
        
        let digitsPower = new Array(10).fill(0);
        for( let dig = 0; dig < cur.length; dig++) {
            digitsPower[Number.parseInt(cur[dig])]++;
        }
        
        let equal = true;
        for( let dig = 0; dig < digitsPower.length; dig++) {
            if( digitsPower[dig] != digitsN[dig]) {
                equal = false;
            }
        }

        if( equal ) {
            return equal;
        }
    }
    
    return false;
};