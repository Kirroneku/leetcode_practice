/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    // sort array using Arrays.sort with custom comparator
    people.sort((p1, p2) => p1[0] == p2[0] ? p1[1] - p2[1] : p2[0] - p1[0]); 
    let list = new Map();
    let result = [];
    
    for (let i = 0; i < people.length; i++) {
        result.push([]);
        list.set(people[i][1], people[i]); // placing people based on the K value
    }
    
    
    for (let i = 0; i < people.length; i++) { 
        result[i] = list.get(i);
    }
    
    return result; // convert list to array

};