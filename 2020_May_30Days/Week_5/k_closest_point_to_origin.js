/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let kClosest = [];
    let largestToReplace = 0;
    let indexToReplace = 0;
    let changed = true;
    // We can just use the dist w/o sqrt
    for( let i = 0; i < points.length; i++) {
        let cur = points[i];
        let curDist = (cur[0])**2 + (cur[1])**2;

        if( kClosest.length < K ) {
            kClosest.push({ "dist": curDist, 
                            'point': [cur[0], cur[1]]     })
        } else {
            if( changed ) {
                for( let j = 0; j < kClosest.length; j++ ) {
                    let closest = kClosest[j];
                    if( closest['dist'] > largestToReplace ) {
                        largestToReplace = closest['dist'];
                        indexToReplace = j;
                    }
                }
                changed = false;
            }

            if( curDist < largestToReplace ) {
                kClosest[indexToReplace] = {
                    "dist": curDist,
                    'point': [cur[0], cur[1]]
                }
                changed = true;
            }
        }
    }

    let ans = [];
    for( let obj of kClosest ) {
        ans.push(obj['point']);
    }

    return ans;
};