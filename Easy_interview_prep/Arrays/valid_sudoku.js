/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    for( let i = 0; i < 9; i++){
        if( !checkCol(board, i) ) {
            return false;
        }

        if( !checkRow(board, i) ) {
            return false;
        }
    }

    for( let i = 0; i < 9; i+= 3) {
        for( let j = 0; j < 9; j += 3) {
            if( !checkSquare(board, i, j) ) {
                return false;
            }
        }
    }

    return true;
};

var checkSquare = function(board, row, col) {
    let set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    for( let i = row; i < row+3; i++) {
        for( let j = col; j < col+3; j++) {
            // console.log(i, j)
            if( board[i][j] != '.') {
                if( set.has(board[i][j]) ) {
                    set.delete(board[i][j])
                } else {
                    return false;
                }
            }

        }
    }

    return true;
};

var checkRow = function(board, row) {
    let set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    for( let i = 0; i < 9; i++ ) {
        if( board[row][i] != '.') {
            if( set.has(board[row][i]) ) {
                set.delete(board[row][i])
            } else {
                return false;
            }
        }
    }

    return true;
};

var checkCol = function(board, col) {
    let set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    for( let i = 0; i < 9; i++ ) {
        if( board[i][col] != '.') {
            if( set.has(board[i][col]) ) {
                set.delete(board[i][col])
            } else {
                return false;
            }
        }
    }

    return true;
};

// isValidSudoku([
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ])