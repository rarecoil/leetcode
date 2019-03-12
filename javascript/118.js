// Number: 118
// Title: Pascal's Triangle

/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/*
Runtime: 56 ms, faster than 83.36% of JavaScript online submissions for Pascal's Triangle.
Memory Usage: 34 MB, less than 10.13% of JavaScript online submissions for Pascal's Triangle.
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];
    let ret = [[1], [1,1]];
    let prevRow = [1,1];
    let rowsPending = numRows - 2;
    while (rowsPending > 0) {
        // start it with 1
        let newRow = [1];
        // take pairs in the last row until there are none
        let i = 0;
        while (i < prevRow.length-1) {
            newRow.push(prevRow[i] + prevRow[i+1]);
            i++;
        }
        // cap the end with 1
        newRow.push(1);
        ret.push(newRow);
        prevRow = newRow;
        rowsPending--;
    }
    return ret;
};