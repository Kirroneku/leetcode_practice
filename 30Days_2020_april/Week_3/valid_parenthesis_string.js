/**
 * @param {string} s
 * @return {boolean}
 **/
var checkValidString = function(s) {
    let open = 0;
    let bufferBefore = 0;

    let buffers = new Map();
    for( let i = 0; i < s.length; i++ ){
        if( s[i] == '*' ) {
            buffers.set(i, true);
        }
    }
    let opens = [];

    for( let i = 0; i < s.length; i++ ){
        // console.log(i, s.substr(0, i+1));
        
        if( s[i] == '(' ) {
            open++;
            opens.push(i);
        } else if( s[i] == ')' ) {
            if( open > 0 ) {
                open--;
            } else if( bufferBefore > 0 ) {
                bufferBefore--;
                buffers.set(i, false);
            } else {
                return false;
            }           
            opens.pop();
        } else {
            bufferBefore++;
        }
        // console.log(open, bufferBefore);
    }
    for( let p of opens) {
        let found = false;
        for( let i = p; i < s.length; i++ ){
            if( buffers.get(i) == true ) {
                buffers.set(i, false);
                found = true;
                break;
            }
        }
        if( !found ) {
            return false;
        }
    }

    return true;
};
