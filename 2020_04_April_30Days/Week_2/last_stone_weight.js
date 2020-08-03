/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    numberSort = function (a,b) {
        return a - b;
    };

    stones.sort(numberSort);

    while(stones.length > 1) {
        stoneY = stones.pop();
        stoneX = stones.pop();
        
        diff = stoneY - stoneX;
        
        if( stones.length == 0 ) {
            return diff;
        }

        if( diff != 0 ) {            
            for( let i = 0; i < stones.length; i++) {
                if( stones[i] >= diff ) {
                    stones.splice(i, 0, diff);
                    break;
                }
                if ( i == stones.length - 1 ) {
                    stones.splice(i+1, 0, diff);
                    break
                }
            }
        }
        // console.log(stones);
    }

    return stones[0];
    
};

console.log(lastStoneWeight([7,6,7,6,9]));