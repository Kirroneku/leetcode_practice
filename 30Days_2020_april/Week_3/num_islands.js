/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let island = 2;
    for( let i = 0; i < grid.length; i++){
        for( let j = 0; j < grid[i].length; j++){
            if( grid[i][j] == 1 ) {
                grid[i][j] = island;
                if( i < grid.length-1 && grid[i+1][j] == 1 ) {
                    grid[i+1][j] = island;
                }
                if ( j < grid[i].length-1 && grid[i][j+1] == 1  ) {
                    grid[i][j+1] = island;
                }
                if ( j != 0 && grid[i][j-1] == 1  ) {
                    grid[i][j-1] = island;
                }
                if ( i != 0 && grid[i-1][j] == 1  ) {
                    grid[i-1][j] = island;
                }
                island ++;
                // console.log(grid)
            } else if( grid[i][j] > 1 ) {
                let curI = grid[i][j];
                // console.log(curI)
                if ( i < grid.length-1 && grid[i+1][j] != 0 ) {
                    grid[i+1][j] = curI;
                }
                if ( j < grid[i].length-1 && grid[i][j+1] != 0 ) {
                    grid[i][j+1] = curI;
                }
                if ( j != 0 && grid[i][j-1] != 0  ) {
                    grid[i][j-1] = curI;
                }
                if ( i != 0 && grid[i-1][j] != 0  ) {
                    grid[i-1][j] = curI;
                }
                
            }
        }
    }

    let sett = new Set();

    for( let i = 0; i < grid.length; i++){
        for( let j = 0; j < grid[i].length; j++){
            if(sett.has(grid[i][j])) {
                sett.add(grid[i][j]);
            }
        }
    }

    return sett.size - 1;
};