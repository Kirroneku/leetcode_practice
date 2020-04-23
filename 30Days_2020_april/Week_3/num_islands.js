/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let island = 2;
    if ( grid.length == 0 ) {
        return 0;
    }

    let spread = [];

    for( let i = 0; i < grid.length; i++){
        for( let j = 0; j < grid[i].length; j++){
            if( grid[i][j] == 1 ) {
                grid[i][j] = island;
                spread.push([i, j])

                while( spread.length != 0 ) {
                    let curSpread = spread.pop();
                    let x = curSpread[0];
                    let y = curSpread[1];

                    if( x < grid.length-1 && grid[x+1][y] == 1 ) {
                        grid[x+1][y] = island;
                        spread.push([x+1, y])
                    }
                    if ( y < grid[x].length-1 && grid[x][y+1] == 1  ) {
                        grid[x][y+1] = island;
                        spread.push([x, y+1])
                    }
                    if ( y != 0 && grid[x][y-1] == 1  ) {
                        grid[x][y-1] = island;
                        spread.push([x, y-1])
                    }
                    if ( x != 0 && grid[x-1][y] == 1  ) {
                        grid[x-1][y] = island;
                        spread.push([x-1, y])
                    }
                }
                island ++;
            } 
        }
    }

    return island-2;
};

