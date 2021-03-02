/**
 * https://i.imgur.com/hs3MIFv.png
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let dup = null;
    let miss = null;
    
    let oneToN = new Set();
    
    for( let i = 0; i < nums.length; i ++ ) {
        oneToN.add(i+1);
    }
    
    for( let num of nums ) {
        if( oneToN.has(num) ) {
            oneToN.delete(num);
        } else {
            dup = num;
        }
    }
    
    for( let val of oneToN.values() ) {
        miss = val; 
    }
    
    return [dup, miss];
};