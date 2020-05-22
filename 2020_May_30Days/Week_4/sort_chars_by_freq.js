/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let charFreq = new Map();

    for( let char of s ) {
        if( charFreq.has(char) ) {
            charFreq.set(char, charFreq.get(char));
        } else {
            charFreq.set(char, 1);
        }
    }

    let freqFinder = new Map();
    let freqs = new Set();

    for( let char of charFreq ) {
        console.log(char);
        if( freqFinder.has(char[1]) ) {
            freqFinder.set(char[1], freqFinder.get(char[1]).push(char[0]));
        } else {
            freqFinder.set(char[1], [char[0]]);
            freqs.add(char[1]);
        }
    }

    for( let freq in freqs ) {
        console.log(freq);
    }
};