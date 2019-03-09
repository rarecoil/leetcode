// Number: 88
// Title: Merge Sorted Array

/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let j = 0;
    
    // fill the array
    for (let i=m, ilen=nums1.length; i<ilen; i++) {
        if (nums1[i] != 0) {
            console.log(i);
        }
        nums1[i] = nums2[j];
        j++;
    }
    
    // JavaScript Array.sort sorts as STRINGS,
    // which won't work for negative numbers.
    // Pass a custom fn to sort.
    nums1.sort((val1, val2) => {
        if (val1 < val2) {
            return -1;
        }
        else if (val1 > val2) {
            return 1;
        } 
        else {
            return 0;
        }
    });
};