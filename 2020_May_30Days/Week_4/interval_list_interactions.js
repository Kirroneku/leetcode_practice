/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    A = A.sort((a, b) => a[0] - b[0]);
    B = B.sort((a, b) => a[0] - b[0]);

    ans = [];

    for( let i = 0 ; i < A.length; i++ ) {
        let curA = A[i];

        for( let j = 0; j < B.length; j++ ) {
            let curB = B[i];
            if( (curB[0] > curA[0] && curB[0] < curA[1]) || (curB[1] > curA[0] && curB[1] < curA[1]) ) {
                ans.push(Math.max(curA[0], curB[0]), Math.min(curA[1], curB[1]));
            } else {
                break;
            }
        }
    }

    return;
};