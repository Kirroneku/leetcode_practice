/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // let queue = [[0, 0]];
    let w = grid[0].length;
    let h = grid.length;

    let newGrid = new Array(h).fill().map(() => new Array(w).fill(Number.MAX_VALUE));
    // console.log(newGrid);
    newGrid[0][0] = grid[0][0];


    for( let i = 0; i < h; i ++ ) {
        for( let j = 0; j < w; j++ ) {
            if( j + 1 < w ) {
                newGrid[i][j + 1] = Math.min(newGrid[i][j + 1], newGrid[i][j] + grid[i][j + 1]);
            } 
    
            if( i + 1 < h ) {
                newGrid[i + 1][j] = Math.min(newGrid[i + 1][j], newGrid[i][j] + grid[i + 1][j]);
            } 
        }
    }

    // while( queue.length != 0 ) {
    //     let cur = queue.pop();
    //     // console.log(cur);
    //     if( cur[0] + 1 < w ) {
    //         if(newGrid[cur[1]][cur[0] + 1] > newGrid[cur[1]][cur[0]] + grid[cur[1]][cur[0] + 1]) {
    //             newGrid[cur[1]][cur[0] + 1] = newGrid[cur[1]][cur[0]] + grid[cur[1]][cur[0] + 1];
    //             queue.push([cur[0] + 1, cur[1]]);
    //         }
    //     } 

    //     if( cur[1] + 1 < h ) {
    //         if(newGrid[cur[1] + 1][cur[0]] > newGrid[cur[1]][cur[0]] + grid[cur[1] + 1][cur[0]]) {
    //             newGrid[cur[1] + 1][cur[0]] = newGrid[cur[1]][cur[0]] + grid[cur[1] + 1][cur[0]];
    //             queue.push([cur[0], cur[1] + 1]);
    //         }
    //     } 

    //     // console.log(newGrid);
    // }

    return newGrid[h-1][w-1];
};