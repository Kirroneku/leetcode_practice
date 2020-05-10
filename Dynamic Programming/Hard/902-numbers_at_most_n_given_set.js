/**
 * @param {string[]} D
 * @param {number} N
 * @return {number}
 */
var atMostNGivenDigitSet = function(D, N) {
    var set = 0;
    let stringRep = N.toString();

    let firstDigit = parseInt(stringRep[0]);

    let nums = new Array(10);

    for( let i = 0; i < nums.length; i++) {
        nums[i] = 0;
    }

    let strictParse = false;
    for( let digit of D ) {
        for( let i = parseInt(digit); i < 10; i++) {
            nums[i]++;
        }
    }

    let total = 0;

    for( let digit of D ) {
        if( digit < firstDigit) {
            total += D.length**(stringRep.length-1);      
        }
    }

    
    for(let i = 1; i < stringRep.length; i++) {
        total += D.length**i;
    }
    


    let allIn = true;
    console.log(stringRep)
    for( let char of stringRep ) {
        console.log(char)
        if( D.indexOf(char) == -1) {
            allIn = false;
        }
    }

    if( allIn ) {
        total++;
    }


    return total;
};

// var setHelper = function( D, N, cur, times ) {
//     for( digit of D ) {
//         let current = cur + digit*times;
        
//         if( current  <= N ) {
//             // set.push(current);
//             set++;
//             setHelper(D, N, current, times*10);
//         }
//     }
// }

console.log(atMostNGivenDigitSet(["1","2","3","4","6","7","9"], 333))