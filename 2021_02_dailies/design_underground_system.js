
var UndergroundSystem = function() {
    this.checkIns = new Map();
    this.history = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkIns.set(id, {
        checkInName: stationName,
        checkInTime: t
    });
    
    return null;
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let {checkInName, checkInTime} = this.checkIns.get(id);
    this.checkIns.delete(id);
    
    if(this.history[checkInName] == undefined) {
        this.history[checkInName] = {};
    }

    let time = t - checkInTime;
    
    if( this.history[checkInName][stationName] == undefined ) {
        this.history[checkInName][stationName] = [];
    }
    
    this.history[checkInName][stationName].push(time);
    
    return null;    
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let times = this.history[startStation][endStation];
    let len = times.length;
    let average = 0;
    for( let time of times ) {
        average += time;
    }
    
    return average/len;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */