/**
 * Description
 * https://i.imgur.com/3tUvODx.png
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let uniqueCandies = new Set();
    
    for( let candy of candyType ) {
        uniqueCandies.add(candy);
    }
    
    return Math.min(uniqueCandies.size, candyType.length/2);
};