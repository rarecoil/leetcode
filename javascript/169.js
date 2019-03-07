// Number: 169
// Title: Majority Element

/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length === 1) return nums[0];
    let histogram = {};
    let max = [0, null];
    for (let i=0, ilen=nums.length; i<ilen; i++) {
        if (histogram[nums[i]]) {
            histogram[nums[i]]++;
            if (histogram[nums[i]] > max[0]) {
                max[0] = histogram[nums[i]];
                max[1] = nums[i];
            }
        } else {
            histogram[nums[i]] = 1;
        }
    }
    return max[1];
};