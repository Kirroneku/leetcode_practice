/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let ratio = (coordinates[0][1] - coordinates[1][1])/(coordinates[0][0] - coordinates[1][0]);

    let base = coordinates[0];
    for( let coord of coordinates ) {
        let xdiff = coord[0] - base[0];
        if( base[1] + xdiff*ratio != coord[1] ) {
            return false;
        }
    } 

    return true;
};