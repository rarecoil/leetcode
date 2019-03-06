// Number: 217
// Title: Contains Duplicate

/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// faster
var containsDuplicate = function(nums) {
    let vals = {};
    for (let i=0, ilen=nums.length; i<ilen; i++) {
        if (vals[nums[i]]) return true;
        vals[nums[i]] = true;
    }
    return false;
};

// less memory
var containsDuplicate2 = function(nums) {
    let arr = nums.sort();
    for (let i=0, ilen=arr.length; i<ilen-1; i++) {
        if (arr[i] === arr[i+1]) return true;
    }
    return false;
}