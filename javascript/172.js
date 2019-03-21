// Number: 172
// Title: Factorial Trailing Zeroes

/*
Given an integer n, return the number of trailing zeroes in n!.

Example 1:
Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Example 2:
Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.

Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // go by powers of 5
    // i had never solved this before...
    // https://brilliant.org/wiki/trailing-number-of-zeros/
    let zeros = 0;
    let total = 0;
    let power = 1;
    do {
        zeros = Math.floor(n / Math.pow(5, power));
        total += zeros;
        ++power;
    } while (zeros > 0);
    return total;
};