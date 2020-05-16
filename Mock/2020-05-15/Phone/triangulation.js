/**
 * @param {number[]} A
 * @return {number}
 */
var minScoreTriangulation = function(A) {
    let pivot = 101;
    
    let multiPivots = [];
    // Select Pivot
    for( let number of A ) {
        if( pivot > number ) {
            pivot = number;
        }
    }

    let i = 0;
    for( let number of A ) {
        if( pivot == number ) {
            multiPivots.push(i)
        }
        i++;
    }
    console.log(multiPivots);
    let smallestTotal = Number.MAX_VALUE;
    for( let pivotIndex of multiPivots ) {
        A.splice(pivotIndex, 1);

        let total = 0;
        for( let i = 0; i < A.length-1; i++ ) {
            total += A[i]*A[i+1]*pivot;
            console.log(A[i], A[i+1], pivot)
        }
        A.splice(pivotIndex, 0, pivot);
        
        smallestTotal = Math.min(smallestTotal, total);
        console.log(total);
    }


    return smallestTotal;
};