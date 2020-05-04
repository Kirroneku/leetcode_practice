/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let lettersAvali = new Map();

    for ( let s of magazine ) {
        if( lettersAvali.has(s) ) {
            lettersAvali.set(s, lettersAvali.get(s)+1);
        } else {
            lettersAvali.set(s, 1);
        }
    }

    for( let letter of ransomNote ) {
        if( lettersAvali.has(s) ) {
            let avalible = lettersAvali.get(s);
            if( avalible > 0 ) {
                lettersAvali.set(s, avalible--);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
};