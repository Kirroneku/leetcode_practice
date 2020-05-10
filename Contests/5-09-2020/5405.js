/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let i = 0;
    let j = 1;
    let k = 1;

    let current = arr[0];
    let newArr = [current];
    

    for( let i = 1; i < arr.length; i++ ) {
        current = current ^ arr[i];
        newArr.push(current);
    }

    console.log(newArr);
};

countTriplets([2,3,1,6,7])