/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let cSet = [];
    let dist = [];
    for( let i = 0; i < S.length; i++ ) {
        if( S[i] == C ) {
            cSet.push(i);
        }
        dist.push(Number.MAX_VALUE);
    }

    for( let i of cSet ) { 
        // console.log(i)
        dist[i] = 0;
        let j = i-1;
        let curDist = 0;
        while( j >= 0 && dist[j] > curDist) {
            curDist++;
            dist[j] = curDist;
            j--;
        }
        
        j = i+1;
        curDist = 0;
        while( j <= S.length && dist[j] > curDist && S[j] != C ) {
            curDist++;
            dist[j] = curDist;
            j++;
        }

        // console.log(dist);
    }

    return dist;
};