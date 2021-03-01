/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    let modifier = 0.5;
    let score = 0;
    let lastOpen = false;
    for( let bracket of S ) {
        if( bracket == '(' ) {
            lastOpen = true;
            modifier *= 2;
        } else {
            if ( lastOpen ) {
                score += modifier;
            }
            lastOpen = false;
            modifier /= 2;
        }
    }
    
    return score;
};