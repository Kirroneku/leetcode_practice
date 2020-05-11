/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let findPixel = image[sr][sc];

    let pixelsToFlood = [[sr, sc]]
    let beenSet = new Set();

    while( pixelsToFlood.length != 0 ) {
        let curPixel = pixelsToFlood.pop();
        
        let r = curPixel[0];
        let c = curPixel[1];
        if( beenSet.has(r + " " + c) ) {
            continue
        }

        image[r][c] = newColor;
        beenSet.add(r + " " + c);

        if( r+1 < image.length && image[r+1][c] == findPixel ) {
            pixelsToFlood.push([r+1, c]);
        }

        if( r-1 > -1 && image[r-1][c] == findPixel ) {
            pixelsToFlood.push([r-1, c]);
        }

        if( c+1 < image[0].length && image[r][c+1] == findPixel ) {
            pixelsToFlood.push([r, c+1]);
        }

        if( c-1 > -1 && image[r][c-1] == findPixel ) {
            pixelsToFlood.push([r, c-1]);
        }
        // console.log(pixelsToFlood)
    }

    return image;
};

floodFill([[0,0,0],[0,1,1]], 1, 1, 1);