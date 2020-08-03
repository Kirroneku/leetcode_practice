/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let jewels = new Set();
    for( let jewel of J ) {
        jewels.add(jewel);
    }

    let jewelCount = 0;

    for( let stone of S ) {
        if( jewels.has(stone) ) {
            jewelCount++;
        }
    }

    return jewelCount;
};