/**
 * @param {number[]} A
 * @return {number}
 */
var minScoreTriangulation = function(A) {
    let pivot = 101;
    let pivotIndex = 0;
    let i = 0;
    let multiPivots = [];
    // Select Pivot
    for( let number of A ) {
        if( pivot > number ) {
            pivot = number;
            pivotIndex = i;
        }
        i++;
    }

    for( let number of A ) {
        if( pivot == number ) {
            multiPivots.push(i)
        }
        i++;
    }

    for( let pivotI in multiPivots ) {
        A.splice(pivotI, 1);

        let total = 0;
        for( let i = 0; i < A.length-1; i++ ) {
            total += A[i]*A[i+1]*pivot;
        }

        A.splice()
    }


    return total;
};