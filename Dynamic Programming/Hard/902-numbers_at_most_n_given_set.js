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
        // console.log(nums);
        // console.log(digit, firstDigit, digit < firstDigit)
        if( digit < firstDigit) {
            total += D.length**(stringRep.length-1);      
        } else if( digit == firstDigit ) {
            strictParse = true;
        }
    }

    
    for(let i = 1; i < stringRep.length; i++) {
        total += D.length**i;
    }
    

    console.log(nums);
    let unstrictify = false;
    if( strictParse ) {
        let strictCombos = 0;
        for( let i = 1; i < stringRep.length; i++ ) {
            console.log(stringRep[i]-1, unstrictify)
            if( unstrictify || D.indexOf(stringRep[i]) == -1 ) {
                strictCombos += nums[stringRep[i]-1]+(D.length**(stringRep.length-i));
                break;
            }
        }
        console.log(strictCombos)
        total += strictCombos;
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