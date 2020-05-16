/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ans = [];
    for( let i = 1; i <= n; i++ ) {
        let output = "";
        if( i % 3 == 0 ) {
            output += "Fizz";
        } 
        if( i % 5 == 0) {
            output += "Buzz";
        }

        if( output == "" ) {
            ans.push(i.toString());
        } else {
            ans.push(output);
        }
    }

    return ans;
};