/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let townsPeople = new Set();
    for( let i = 1; i < N+1; i++) {
        townsPeople.add(i);
    }
    for( let person of trust ) {
        console.log(person[0]);
        if( townsPeople.has(person[0]) ) {
            townsPeople.delete(person[0]);
        }
    }

    console.log(townsPeople)

    for( let person of townsPeople ) {
        console.log(person)
        return person;
    }

    return -1;
};