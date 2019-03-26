// Number: 146
// Title: LRU Cache

/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/


// Simple ES5 solution

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    // set up cache vars
    this.allocated = 0;
    this.capacity = capacity;
    this.age = 0;
    this.data = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    this.age++;
    if (key in this.data) {
        this.data[key].age = this.age;
        return this.data[key].value;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.age++;
    if (this.capacity == this.allocated) {
        // drop LRU if not updating existing cacheline
        if (!(key in this.data)) {
            let oldest = null;
            for (let k in this.data) {
                if (oldest === null || this.data[k].age < oldest[1]) {
                    oldest = [k, this.data[k].age];
                }
            }
            delete this.data[oldest[0]];
        }
        this.data[key] = { age: this.age, value: value };
    } else {
        if (!(key in this.data)) {
            this.allocated++;
        }
        this.data[key] = { age: this.age, value: value };
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */