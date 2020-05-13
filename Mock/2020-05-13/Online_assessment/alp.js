/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absent = false;
    let lates = 0;
    
    for( let i = 0; i < s.length; i++ ) {
        switch(s[i]){
            case 'A':
                if( absent ) {
                    return false;
                } 
                absent = true;
                lates = 0;
                break;
            case 'L':
                lates++;
                if(lates == 3) {
                    return false;
                }
                break;
            default:
                lates = 0;
                break;
        }
    }

    return true;
};
