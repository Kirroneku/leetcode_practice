/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    A = A.sort((a, b) => a[0] - b[0]);
    B = B.sort((a, b) => a[0] - b[0]);

    ans = [];

    let lastBreak = 0;
    for( let i = 0 ; i < A.length; i++ ) {
        let curA = A[i];
        
        for( let j = lastBreak; j < B.length; j++ ) {
            let curB = B[j];
            // console.log(curA, curB);
            if( (curB[0] >= curA[0] && curB[0] <= curA[1]) || (curB[1] >= curA[0] && curB[1] <= curA[1])
            ||  (curA[0] >= curB[0] && curA[0] <= curB[1]) || (curA[1] >= curB[0] && curA[1] <= curB[1]) ) {
                ans.push([Math.max(curA[0], curB[0]), Math.min(curA[1], curB[1])]);
            } else if( curB[0] > curA[1] ) {
                lastBreak = Math.max(j-1, 0);
                break;
            }
        }
    }
    // console.log(ans);
    return ans;
};