/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
    if ( K == 0 ) {
        return mat;
    }

    let combined = [];
    for( let i = 0; i < mat.length; i ++) {
        combined.push([]);
        for(let j = 0; j < mat[0].length; j++) {
            combined[i].push(0);
        }
    }

    for(let j = 0; j < mat[0].length; j++) {
        let sum = 0;
        for( let i = 0; i < mat.length; i ++) {
            sum += mat[i][j];
            combined[i][j] = sum;
        }
    }
    console.log(combined);

    for( let i = 0; i < mat.length; i ++) {
        let sum = 0;
        for(let j = 0; j < mat[0].length; j++) {
            sum += combined[i][j];
            combined[i][j] = sum;
        }

    }

    console.log(combined);

    for( let i = 0; i < combined.length; i ++) {
        for(let j = 0; j < combined[0].length; j++) {
            let rowStart = Math.max(-1, i-K);
            let rowEnd = Math.min(combined.length-1, i+K);
            
            let colStart = Math.max(-1, j-K);
            let colEnd = Math.min(combined[0].length-1, j+K);

            let sum = 0;
            if( rowStart != -1 ) {
                if( colStart != -1 ) {
                    sum -= combined[rowStart][colStart];
                }
                sum -= combined[rowStart][colEnd];
            }
           

            if( colStart != -1 ) { 
                sum -= combined[rowEnd][colStart]
            }

            sum += combined[rowEnd][colEnd]

            mat[i][j] = sum;
        }
    }

    return mat;
};