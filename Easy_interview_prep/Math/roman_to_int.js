/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let prev = "NA";
    let number = 0;

    let romanMap = {
        'NA': 0,
        'I': 1, 
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };


    for( let char of s ) {
        // console.log(char, romanMap[char]);
        if( romanMap[char] > romanMap[prev] ) {
            number -= romanMap[prev];
        } else {
            number += romanMap[prev];
        }

        prev = char;
    }

    number += romanMap[prev];

    return number;
};