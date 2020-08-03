/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let charFreq = new Map();

    for( let char of s ) {
        if( charFreq.has(char) ) {
            charFreq.set(char, charFreq.get(char)+1);
        } else {
            charFreq.set(char, 1);
        }
    }


    let orderedFreq = [...charFreq.entries()].sort((a,b) => b[1]-a[1]);;
    let string = '';

    for( let entry of orderedFreq) {
        for( let i = 0; i < entry[1]; i++ ) {
            string += entry[0];
        }
    }

    return string;
};