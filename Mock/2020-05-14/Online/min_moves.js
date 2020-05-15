/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let nonSorted = [...heights];
    heights = heights.sort((a, b) => a - b);
    let moved = 0;

    for( let i = 0; i < heights.length; i++ ) {
        if( heights[i] != nonSorted[i] ) {
            moved++;
        }
    }

    return moved;
};