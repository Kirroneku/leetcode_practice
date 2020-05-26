/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let rows = [];

    for( let i = 0; i < numRows; i++ ) {
        rows.push([]);
    }

    let curAt = 0;
    while( curAt < s.length ) {
        for( let i = 0; i < numRows; i++ ) {
            rows[i].push(s[curAt]);
            curAt++;
            if( curAt == s.length ) {
                break;
            }
        }

        if( curAt == s.length ) {
            break;
        }
        
        for( let i = numRows-2; i >= 1; i-- ) {
            rows[i].push(s[curAt]);
            curAt++;
            if( curAt == s.length ) {
                break;
            }
        }
    }

    let ans = "";
    // console.log(rows);
    for( let arr of rows ) {
        for( let char of arr ) {
            ans+=char;
        }
    }

    return ans;

};