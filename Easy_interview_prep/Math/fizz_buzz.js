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
        } else if( i % 5 == 0) {
            output += "Buzz";
        }

        if( output == "" ) {
            ans.push(n.toString());
        } else {
            ans.push(output);
        }
    }
};