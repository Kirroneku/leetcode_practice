/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
    let dp = [];
    for( let i = 0; i < A.length; i ++ ) {
        let newArr = [];
        for( let j = 0; j < B.length; j++) {
            newArr.push(0);
        }
        dp.push(newArr);
    }

    var dpHelper = function( A , B , i , j ) {

    }

    // let lastA = new Map();
    // let lastB = new Map();

    // let curIndex = 0;
    // while( curIndex < Math.max(A.length, B.length) ) {

    //     if( curIndex < A.length ) {
    //         lastA.set(A[curIndex], curIndex);
    //     }

    //     if( curIndex < B.length ) {
    //         lastB.set(B[curIndex], curIndex);
    //     }

    //     curIndex ++;
    // }
};