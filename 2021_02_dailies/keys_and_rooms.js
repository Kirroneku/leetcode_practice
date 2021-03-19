/**
 * https://i.imgur.com/6ITrLiz.png
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visitedRooms = new Set([0]);
    
    let toOpen = [0];
    let newKeys = [];
    
    while( toOpen.length != 0 ) {
        for( let room of toOpen ) {
            for( let key of rooms[room] ) {
                if( !visitedRooms.has(key) ) {
                    newKeys.push(key);
                    visitedRooms.add(key);
                }
            }
        }
        
        toOpen = newKeys;     
        newKeys = [];
    }
    
    return visitedRooms.size == rooms.length;
    
};