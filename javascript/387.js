// Number: 387
// Title: First Unique Character in a string

/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/


// this algorithm is garbage, but keeping with
// my "first pass" philosophy it's here

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let seen = {};
    for (let i=0, ilen=s.length; i<ilen; i++) {
        if (seen[s[i]]) {
            // we saw this already
            seen[s[i]] = [true, i];
        } else {
            seen[s[i]] = [false, i];
        }
    }
    for (let k in seen) {
        if (seen[k][0] === false) {
            return seen[k][1];
        }
    }
    return -1;
};