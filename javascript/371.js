// Number: 371
// Title: Sum of Two Integers

/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1
*/

// https://en.wikipedia.org/wiki/Adder_%28electronics%29
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (b === 0) return a;
    let sum = a ^ b;
    carry = (a & b) << 1;
    return getSum(sum, carry);
};