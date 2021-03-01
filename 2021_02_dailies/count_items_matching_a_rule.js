/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

const rulekeys = {
    'type': 0,
    'color': 1,
    'name': 2
}
var countMatches = function(items, ruleKey, ruleValue) {
    let index = rulekeys[ruleKey];
    let count = 0;
    
    for( let item of items ) {
        if( item[index] == ruleValue ) {
            count++;
        }
    }
    
    return count;
};