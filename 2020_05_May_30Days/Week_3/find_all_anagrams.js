/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
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
    let theAnagrams = [];
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
            theAnagrams.push(i-pLen+1);

            curMap.set(s[i-pLen+1], curMap.get(s[i-pLen])-1);
            curLen--;
            if( curMap.get(s[i-pLen+1]) == 0 ) {
                firstFound.delete(s[i-pLen+1]);
            } else if( firstFound.get( s[i-pLen+1] ) == i-pLen+1 ) {
                firstFound.set(s[i-pLen+1], i-pLen + 2 );
            }
        }
    }
    
    return theAnagrams;
};