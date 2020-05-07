/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let numBit = [];
    for( let c of num.toString(2)) {
        numBit.push(0);
    }
    
    let countSet = [0];
    let numOnes = 0;
    for( let i = 0; i < num; i++) {
        for( let j = numBit.length-1; j > 0; j--) {
            if( numBit[j] == 1 ) {
                numBit[j] = 0;
                numOnes--;
            } else {
                numBit[j] = 1;
                numOnes++;
                break;
            }
        }

        countSet.push(numOnes);
    }
   
    return countSet;
};