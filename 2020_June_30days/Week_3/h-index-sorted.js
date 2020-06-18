/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if( !citations || citations.length == 0 ) {
        return 0;
    }
    
    citations = citations.sort((a,b) => b - a );
    
    for( let i = 0; i < citations.length; i ++ ) {
        if ( i >= citations[i] ) {
            return i;
        } 
    }

    return citations.length;
};