/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let curIndex = 0;
    let build = [];

    for( let i = 1; i <= n; i++ ) {
        if( curIndex == target.length ) {
            break;
        }
        if( target[curIndex] == i ) {
            build.push('Push');
            curIndex++;
        } else {
            build.push('Push');
            build.push('Pop');
        }
        
    }

    return build;
};

console.log(buildArray( [2,3,4], 4))