/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;

    let maps = new Map();
    for( let i = 0; i < s.length; i++ ) {
        let char = s[i];
        maps.set(i, new Set());
        // console.log(maps);
        for( let entry of maps ) {
            let currentSet = entry[1];
            // console.log(entry)
            if( !currentSet.has(char) ) {
                currentSet.add(char);
            } else {
                longest = Math.max(longest, i-entry[0]);
                maps.delete(entry[0]);
            }
            // maps.set(entry[0], currentSet);
        }

    }

    for( let entry of maps ) {
        longest = Math.max(longest, s.length-entry[0]);
    }

    return longest;
};