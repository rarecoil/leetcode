// Number: 7
// Title: Reverse Integer

/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
// This works with any number in JS, the answer
// expects only bit manipulation on 32-bit integers
// see check at the end.
// this is faster than about 70% of submissions
var reverseAnyNumber = function(x) {
    // short circuit on non-reversible numbers
    if (-10 < x && x < 10) { return x };
    x = x.toString().split('');
    let neg = false;
    if (x[0] === '-') {
        neg = true;
        x.splice(0, 1);
    }
    x = x.reverse().join("").replace(/^[0]+/, '');
    if (neg) {
        x = '-' + x;
    }
    let int = parseInt(x);

    // Add this check for 32-bit overflow
    // Just to pass this question.
    if (int > 2147483647 || int < -2147483648) {
        return 0;
    }
    return int;
};