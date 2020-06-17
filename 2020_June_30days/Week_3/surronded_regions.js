/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let checked = new Set();
    let groupsNotX = new Set();
    let gNum = 0;
    
    let coordsInGroup = [];
    
    for( var i = 0; i < board.length; i++ ) {
        for( var j = 0; j < board[0].length; j++ ) {
            let coord = i + " " + j;
            if( board[i][j] != 'X' && !checked.has(coord)) {
               
                
                // console.log(i, j)
                // console.log( i + " " + (j-1) );
                // console.log(groups.has( i + " " + (j-1) ));
                // if( groups.has( (i-1) + " " + j ) ) {
                //     let curGroup = groups.get( (i-1) + " " + j );
                //     groups.set( coord,  curGroup);
                //     coordsInGroup[curGroup].push([i, j]);
                // } else if ( groups.has( i + " " + (j-1) ) ) {
                //     let curGroup = groups.get( i + " " + (j-1) );
                //     groups.set(coord,  curGroup);
                //     coordsInGroup[curGroup].push([i, j]);
                // } else {
                
                // groups.set( coord, gNum );
                coordsInGroup.push([[i, j]]);
                // }
                let spread = [[i, j]]
                
                while( spread.length != 0 ) {
                    let curSpread = spread.pop();
                    let x = curSpread[0];
                    let y = curSpread[1];
                    
                    checked.add( x + " " + y );
                
                    if( x == 0 || y == 0 || x == board.length-1 || y == board[0].length-1 ) {
                        groupsNotX.add( gNum );
                    }
                    
                    if( x < board.length-1 && board[x+1][y] == 'O' && !checked.has((x+1) + " " + y) ) {
                        // grid[x+1][y] = island;
                        coordsInGroup[gNum].push([x+1, y]);
                        spread.push([x+1, y]);
                    }
                    
                    if ( y < board[x].length-1 && board[x][y+1] == 'O' && !checked.has((x) + " " + (y+1)) ) {
                        // board[x][y+1] = island;
                        coordsInGroup[gNum].push([x, y+1]);
                        spread.push([x, y+1]);
                    }
                    
                    if ( y != 0 && board[x][y-1] == 'O' && !checked.has((x) + " " + (y-1)) ) {
                        // board[x][y-1] = island;
                        coordsInGroup[gNum].push([x, y-1]);
                        spread.push([x, y-1]);
                    }
                    
                    if ( x != 0 && board[x-1][y] == 'O' && !checked.has((x-1) + " " + (y)) ) {
                        // board[x-1][y] = island;
                        coordsInGroup[gNum].push([x-1, y]);
                        spread.push([x-1, y]);
                    }
                }

                
                gNum++;
                

            }
        }
    }
    
//     console.log(groups)
//     console.log(coordsInGroup)

    for( var i = 0; i < gNum; i++ ) {
        if( !groupsNotX.has(i) ) {
            // console.log(i)
            for( var coord of coordsInGroup[i] ) {
                // console.log(coord);
                board[coord[0]][coord[1]] = 'X';
            }
        }
    }
};