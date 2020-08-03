/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let townsPeople = new Set();
    let peopleThatTrust = [];

    for( let i = 1; i < N+1; i++) {
        townsPeople.add(i);
        peopleThatTrust.push(0);
    }

    let newPerson = false;

    for( let person of trust ) {
        if( townsPeople.has(person[0]) ) {
            townsPeople.delete(person[0]);
            newPerson = true;
        }

        peopleThatTrust[person[1]-1]++;
    }

    for( let person of townsPeople ) {
        if( peopleThatTrust[person-1] == N-1 ) {
            return person;
        }
    }

    return -1;
};