// Number: 350
// Title: Intersection of Two Arrays II

/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Note: I thought this algo sucked, it ran faster than 89%
// of JS submissions and used less memory than 100% of them 
var intersect = function(nums1, nums2) {
    let ret = [];
    for (let i=0, ilen=nums1.length; i<ilen; i++) {
        let idx = nums2.indexOf(nums1[i]);
        if (idx !== -1) {
            ret.push(nums1[i]);
            nums2.splice(idx, 1);
        }
    }
    return ret;
};