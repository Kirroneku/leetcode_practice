/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let firstMap = new Map();

    for( let i = 0; i < list1.length; i++ ) {
        firstMap.set(list1[i], i);
    }
    console.log(firstMap);
    let min = Number.MAX_VALUE;
    let ans = [];
    for( let i = 0; i < list2.length; i++ ) {
        if( firstMap.has(list2[i]) ) {
            let curMin = firstMap.get(list2[i]) + i;
            if( curMin < min ) {
                ans = [list2[i]];
                min = curMin;
            } else if( curMin == min ) {
                ans.push(list2[i]);
                
            }
        }
    }

    return ans;
};

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Burger King","Tapioca Express","Shogun"]));