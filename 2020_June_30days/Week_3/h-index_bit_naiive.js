/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if( citations.length == 0 ) {
        return 0;
    }
    
    let N = citations.length;
    let prev = citations.length > citations[0]? 0: citations.length;
    
    for( let i = 0; i < citations.length; i ++ ) {
        if ( N - i < citations[i] ) {
            return Math.max(prev, N-i);
        } 
        
        if( N - i == citations[i] ) {
            return citations[i];
        }
        // console.log( N - i );

        prev = citations[i];
    }
    // console.log("Def");
    return 0;
};