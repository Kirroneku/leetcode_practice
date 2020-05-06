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
        if( lettersAvali.has(letter) ) {
            let avalible = lettersAvali.get(letter);
            if( avalible > 0 ) {
                lettersAvali.set(letter, avalible-1);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
};