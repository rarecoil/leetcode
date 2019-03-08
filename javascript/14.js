// Number: 14
// Title: Longest Common Prefix

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
// warning: this algorithm written after a lot of sake
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    let candidate = strs[0];
    let maxPrefixLength = Number.MAX_SAFE_INTEGER;
    for (i = 1, ilen = strs.length; i < ilen; i++) {
        let length = 0;
        for (j = 0, jlen = strs[i].length; j < jlen; j++) {
            if (strs[i][j] === candidate[j]) {
                length++;
            } else {
                break;
            }
        }
        if (length < maxPrefixLength) {
            maxPrefixLength = length;
        }
    }
    return candidate.substr(0, maxPrefixLength);
};