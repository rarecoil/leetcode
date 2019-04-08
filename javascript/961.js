// Number: 961
// Title: N-Repeated Element in Size 2N Array

/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

Example 1:
Input: [1,2,3,3]
Output: 3

Example 2:
Input: [2,1,2,5,3,2]
Output: 2

Example 3:
Input: [5,1,5,2,5,3,5,4]
Output: 5
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let seen = new Map();
    for (let i=0, ilen=A.length; i<ilen; i++) {
        if (seen.has(A[i])) {
            return A[i];
        } else {
            seen.set(A[i], true);
        }
    }
};