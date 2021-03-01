/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let opens = 0;
    let newString = "";
    
    for( let i = 0; i < s.length; i++ ) {
        let char = s[i];
        
        if( char == '(' ) {
            opens ++;
            newString+='(';
        } else if ( char == ')' ) {
            if( opens != 0 ) {
                newString+=')';
                opens--;
            }
        } else {
            newString+= char;
        }
    }    
    
    if( opens > 0 ) {
        let cleanString = ""
        for( let i = newString.length-1; i >= 0 ; i-- ) {
            let char = newString[i];
            if( opens > 0 && char == '(' ) {
                opens --;
            } else {
                cleanString += char;
            }
            
        }
        return cleanString.split("").reverse().join("");
    }
    
    return newString;
   
};