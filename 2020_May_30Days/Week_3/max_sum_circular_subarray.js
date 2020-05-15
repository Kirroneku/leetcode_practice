/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    if( A.length == 1 ) {
        return A[0];
    }
    let sumArray = [A[0]];

    
    let ans = -1*Number.MAX_VALUE;
    
    for( let i = 1; i < A.length; i++ ) {
        sumArray.push(Math.max(sumArray[i-1], 0) + A[i]);
        ans = Math.max(ans, sumArray[i]);
    }

    let max_wrap = 0;
    for (let i = 0; i < A.length; i++)  
    {  
            max_wrap += A[i]; 
            A[i] = -A[i]; 
    }  

    let inverseAns = -1*Number.MAX_VALUE;

    sumArray[0] = A[0];
    for( let i = 1; i < A.length; i++ ) {
        sumArray[i] = Math.max(sumArray[i-1], 0) + A[i];
        inverseAns = Math.max(inverseAns, sumArray[i]);
    }

    if( max_wrap == inverseAns*-1 ) {
        return ans;
    }

    max_wrap = max_wrap + inverseAns;  

    return (max_wrap > ans)? max_wrap: ans; 
};

console.log(maxSubarraySumCircular([-2,-3,-1]));