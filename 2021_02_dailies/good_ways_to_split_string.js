/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let goodSplits = 0;
    
    let charsMapping = new Map();
    for( let char of s ) {
        if( charsMapping.has(char) ) {
            charsMapping.set(char, charsMapping.get(char)+1);
        } else {
            charsMapping.set(char, 1);
        }
    }
    
    let leftUniques = new Set();
    let rightUniqueCount = charsMapping.size;
    for( let char of s ) {
        charsMapping.set(char, charsMapping.get(char) - 1);
        
        if( charsMapping.get(char) == 0 ) {
            rightUniqueCount--;
        } 
        
        leftUniques.add(char);
        
        if( rightUniqueCount == leftUniques.size ) {
            goodSplits++;
        }
    }
    
    return goodSplits;
};