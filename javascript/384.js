// Number: 384
// Title: Shuffle An Array

/*
Shuffle a set of numbers without duplicates.

Example:

// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();
*/

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.originalArray = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    // note this is a straight up hack, we don't actually ever
    // "reset" any internal state
    return this.originalArray;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    // Fisher-Yates shuffle
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    
    // clone the original array
    let arr = this.originalArray.slice();
    for (let i = arr.length-1; i >= 0; i--) {
        let idx = Math.floor(Math.random() * (i+1));
        let tmp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = tmp;
    }
    return arr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */