// Number: 977
// Title: Squares of a Sorted Array

/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Example 2:
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Note:
1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    for (let i=0, ilen=A.length; i<ilen; i++) {
        A[i] = A[i] * A[i];
    }
    return A.sort(function(a,b) {
        if (a < b) {
            return -1;
        }
        else if (a == b) {
            return 0;
        }
        return 1;
    });
};