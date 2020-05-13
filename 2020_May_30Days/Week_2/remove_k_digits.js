/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let numStr = num.toString().split('');

    if( k == numStr.length ) {
        return '0';
    }

    let buildString = [];
    let removed = 0;

    for( let i = 0; i < k; i++) {
        let j = 0;
        while( j < numStr.length-1 && numStr[i] <= numStr[i+1] ) {
            j++;
        }

        numStr.splice(j, 1);
    }

    while( numStr[0] == 0 ) {
        numStr.shift();
    }

    return numStr.join("");
};

// removeKdigits(10, 2);