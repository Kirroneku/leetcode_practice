/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    let totalDirection = 0;
    for ( let i = 0; i < shift.length; i++ ) {
        if( shift[i][0] == 0 ) {
            totalDirection -= shift[i][1];
        } else {
            totalDirection += shift[i][1];
        }
    }
    console.log(totalDirection);

    if( totalDirection > 0 ) {
        totalDirection = s.length - totalDirection%s.length;
    } else {
        totalDirection *= -1;
    }

    console.log(totalDirection);

    let newString = []

    for( let i = 0; i < s.length; i++) {
        let curChar = s.charAt((i+totalDirection)%(s.length));
        newString.push(curChar);
    }

    return newString.join('');
};

stringShift("wpdhhcj", [[0,7],[1,7],[1,0],[1,3],[0,3],[0,6],[1,2]])