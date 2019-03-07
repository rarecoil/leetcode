// Number: 125
// Title: Valid Palindrome

/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]*/g, "").toLowerCase();
    // handle silly short cases fast
    if (s.length === 0 || s.length === 1) {
        return true;
    }
    if (s.length === 2) {
        return (s[0] === s[1]);
    }
    let slen = s.length;
    // split the array in half
    let midpoint = slen / 2;
    let left, right;
    if (midpoint % 1 !== 0) {
        left = Math.floor(midpoint);
        right = Math.floor(midpoint);
    } else {
        left = midpoint-1;
        right = midpoint;
    }
    while (right < slen) {
        // break if we miss the palindrome
        if (s[left] !== s[right]) {
            return false;
        }
        left--;
        right++;
    }
    return true;
};