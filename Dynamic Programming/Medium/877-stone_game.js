/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    // let n = piles.length;
    // let total = 0;

    // let pileDP = [];

    // for( let i = 0; i < n; i++ ) {
    //     pileDP.push([]);
    //     for( let j = 0; j < n; j++ ) {
    //         pileDP[i].push(0);
    //     }
    // }

    // for( let i = 0; i < n; i++ ) {
    //     total += piles[i];
    //     pileDP[i][i] = piles[i];
    // }

    // for( let i = 0; i < n; i++ ) {
    //     for( let j = i; j < n; j++ ) {
    //         if( i == j ) continue;
    //         pileDP[i][j] = Math.max(total - piles[i] - pileDP[i+1][j], total - piles[j] - pileDP[i][j-1]);
    //     }
    // }
    
    // // console.log(a, l)
    // return 2*pileDP[0][n-1];
    return true;
};