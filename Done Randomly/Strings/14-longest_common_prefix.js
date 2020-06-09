/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if( strs.length == 0 ) {
        return "";
    }

    let currentPrefix = strs[0];

    for( let i = 1; i < strs.length; i++ ) {
        let currentStr = strs[i];

        let matches = 0;

        for( ; matches < currentStr.length; matches++) {
            if( currentStr[matches] != currentPrefix[matches] ) {
                break;
            }
        }
        
        currentPrefix = currentPrefix.substring(0, matches);

        if( currentPrefix.length == 0 ) {
            return "";
        }
    }

    return currentPrefix;
};