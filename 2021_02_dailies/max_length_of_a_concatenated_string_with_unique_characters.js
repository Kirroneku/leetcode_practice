/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    var uniques = new Set();
    var maxUni = 0;
    
    let uniqueFinder = (arr, indexStart) => {
        for( let i = indexStart; i < arr.length; i++ ) {
            let current = arr[i];
            let tempUniques = new Set(uniques);
            let uniqueFlag = true;
            
            for( let char of current ) {
                if( tempUniques.has(char) ) {
                    uniqueFlag = false;
                    break;
                }
                tempUniques.add(char) ;
            }
            
            if( uniqueFlag ) {
                uniques = tempUniques;
                // console.log(uniques);

                maxUni = Math.max(maxUni, uniques.size);
                uniqueFinder( arr, i );
                
                for( let char of current ) {
                    uniques.delete(char)
                }
            }            
        }
    }
    
    uniqueFinder(arr, 0);
    return maxUni;
};