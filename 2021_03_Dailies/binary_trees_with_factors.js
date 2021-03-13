/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    arr.sort((a, b) => a - b);
    let max = arr[arr.length-1];

    let possible = new Map();
    for( let num1 of arr ) {
        for( let num2 of arr ) {
            let prod = num1 * num2;
            if( prod > max ) {
                break;
            } 
            
            if( possible.has(prod) ) {
                possible.get(prod).push([num1, num2]);
            } else {
                possible.set(prod, [[num1, num2]]);
            }
        }
    }
        
    let treeNodes = new Map();
    
    let factorTrees = 0;
    
    for( let num of arr ) {
        let extraFactors = 0;
        if( possible.has(num) ) {
            extraFactors = 0;
            for( let combo of possible.get(num) ) {
                let currentFactors = 1;
                if( treeNodes.has(combo[0]) ) {
                    currentFactors *= treeNodes.get(combo[0]);
                }
                
                if( treeNodes.has(combo[1])) {
                    currentFactors *= treeNodes.get(combo[1]);
                }
                extraFactors += currentFactors;
            }
        }
        
        treeNodes.set(num, extraFactors + 1);
        factorTrees += extraFactors + 1;
    }
    
    return factorTrees%(10**9+7);
};