/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let coursesCanTake = 0;
    let graph = new Map();
    let prereqsNeeded = new Map();
    
    let isPrereq = new Map();
    let leaf = [];
    
    for( let i = 0 ; i < numCourses; i++ ) {
        graph.set(i, new Map());
        isPrereq.set(i, []);
        prereqsNeeded.set(i, 0);
    }
    
    for( let prereq of prerequisites ) {
        graph.get(prereq[0]).set(prereq[1], false);
        prereqsNeeded.set(prereq[0], prereqsNeeded.get(prereq[0])+1);
        isPrereq.get(prereq[1]).push(prereq[0]);
    }
    
    // If it has no prereqs we can use it
    for( let i = 0 ; i < numCourses; i++ ) {
        if( prereqsNeeded.get(i) == 0 ) {
            leaf.push(i);
            coursesCanTake++;
        }
    }
        
    while( leaf.length != 0 ) {
        let cur = leaf.pop();
        
        for( let course of isPrereq.get(cur) ) {
            graph.get(course).set(cur, true);
            let curPreNeed = prereqsNeeded.get(course)-1;
            prereqsNeeded.set(course, curPreNeed);
            if( curPreNeed == 0 ) {
                leaf.push(course);
                coursesCanTake ++;
            } 
        }
    }
    
    return coursesCanTake == numCourses;
    
};