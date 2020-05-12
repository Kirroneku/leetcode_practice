/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
   

    return A;
};

// Slow Implementation
// for( let i = 0; i < A.length; i ++ ) {
//     if( A[i] % 2 != i % 2 ) {
//         let even = (i % 2 == 0)
//         for ( let j = i+1; j < A.length; j++ ) {
//             if( even ) {
//                 if(A[j] % 2 != j % 2 &&  A[j]%2 == 0  ) {
//                     let temp = A[j];
//                     A[j] = A[i];
//                     A[i] = temp;
//                 }
//             } else {
//                 if( A[j] % 2 != j % 2 && A[j]%2 == 1  ) {
//                     let temp = A[j];
//                     A[j] = A[i];
//                     A[i] = temp;
//                 }
//             }
//         }
//     }
// }