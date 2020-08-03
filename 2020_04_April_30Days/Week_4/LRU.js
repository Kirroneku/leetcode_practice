/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.lru = new Map();
    this.set = new Map();
    this.oldest = 0;
    this.size = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // console.log(key, this.set)
    if( !this.set.has(key) ) {
        return -1;
    }
    
    console.log(this.oldest, this.lru)
    if( this.lru.get(this.oldest).key == key ) {
        this.oldest++;
        this.lru.set(this.oldest+this.size-1, {key, 'value': this.set.get(key)});
        return this.set.get(key);
    }

    this.oldest++;

    for ( let kv of this.lru ) {
        if(kv[1].key != key) {
            this.lru.set(this.lru.get(kv[1].key)+1, kv[1]);
        }
    }

    this.lru.set(this.oldest+this.capacity-1, {'key': key, 'value': this.set.get(key)});
    
    
    return this.set.get(key);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if( this.set.has(key) ) {
        if( this.lru.get(this.oldest).key == key ) {
            this.oldest++;
            this.lru.set(this.oldest+this.size-1, {key, value});
            this.set.set(key, value);
            return;
        }

        this.oldest++;

        for ( let kv of this.lru ) {
            if(kv[1].key != key) {
                this.lru.set(this.lru.get(kv[1].key)+1, kv[1]);
            } 
        }
    
        this.lru.set(this.oldest+this.capacity-1, {'key': key, 'value': value});
        this.set.set(key, value);
        
    } else if( this.lru.size < this.capacity ) {
        this.lru.set(this.size, {key, value});
        this.set.set(key, value);
        this.size++;
    } else {
        
        this.set.delete(this.lru.get(this.oldest).key);
        this.lru.delete(this.oldest, {key, value});
        
        this.oldest ++;
        this.lru.set(this.oldest+this.size-1, {key, value});
        this.set.set(key, value);
        // console.log(this.oldest, this.set)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */