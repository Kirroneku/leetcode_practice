/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(p, s) {
    let pAna = new Map();
    let pLen = p.length;
    
    for( let char of p ) {
        if( pAna.has(char) ) {
            pAna.set(char, pAna.get(char)+1);
        } else {
            pAna.set(char, 1);
        }
    }
    
    let curLen = 0;
    let curMap = new Map();
    let firstFound = new Map();
    
    for( let i = 0; i < s.length; i++ ) {
        let cur = s[i];
        
        if( pAna.has(cur) ) {
            if( !firstFound.has(cur) ) {
                firstFound.set(cur, i);
            }
            
            if( curMap.has(cur) ) {
                let ourAna = curMap.get(cur) + 1;
                if( ourAna > pAna.get(cur) ) {
                    curMap.clear();
                    i = firstFound.get(cur);
                    firstFound.clear();
                    curLen = 0;
                } else {
                    curMap.set(cur, ourAna);
                    curLen ++;
                }
            } else {
                curMap.set(cur, 1);
                curLen++;
            }
        } else {
            curMap.clear();
            curLen = 0;
        }
        
        if( curLen == pLen ) {
            return true;
        }
    }
    
    return false;
};