// Number: 283
// Title: Move Zeroes

/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let touched = 0;
    let length = nums.length;
    let idx = 0;
    while (touched < length) {
        if (nums[idx] === 0) {
            // remove from array
            let r = nums.splice(idx, 1);
            // splice this onto the end of the array
            nums.splice(length, 0, r[0]);
        } else {
            // this is OK, start from here
            idx++;
        }
        touched++;
    }
};