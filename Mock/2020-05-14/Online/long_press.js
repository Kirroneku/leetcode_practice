/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if( name == typed ) {
        return true;
    }

    let ni = 0;
    let ti = 0;

    let prev = name[ni];

    while( ti < typed.length ) {
        if( ni < name.length && name[ni] == typed[ti]) {
            prev = name[ni];
            ni++;
            ti++;
        } else if( typed[ti] == prev ) {
            ti++;
        } else {
            return false;
        }
    }

    return true;
};