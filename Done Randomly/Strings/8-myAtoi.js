/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let numeralSet = new Set(
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    );

    let ans = 0;

    let isTrunc = true;
    let negSet = undefined;
    let numsStart = false;

    for( let char of str ) {
        // console.log(char);
        if( isTrunc && char == " " ) {
            continue;
        } 
        
        isTrunc = false;

        if( !numsStart && negSet == undefined && (char == '-' || char == '+')) {
            negSet = char == '-';
            continue;
        }

        if( numeralSet.has(char) ) {
            numsStart = true;
            ans *= 10;
            // we can use map to really make it our own atoi
            ans += +char;
            // console.log(ans)
        } else {
            break;
        }   
    }

    if( (ans > 2**31 && negSet) ) {
        return -1 * 2**31
    }

    if( (ans > 2**31-1 && !negSet) ) {
        return 2**31 - 1;
    }

    return ans * (negSet? -1: 1);
};