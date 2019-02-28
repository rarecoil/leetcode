// Number: 3
// Title:  Longest Substring Without Repeating Characters

/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
    let best = '';  
    for (let j=0, jlen = s.length; j<jlen; j++) {
        let ss = s.substr(j);
        let test = '';
        // get best substring from this position
        for (let i=0, ilen = ss.length; i<ilen;i++) {
            if (test.indexOf(ss[i]) !== -1) {
                break;
            }
            test += ss[i];
        }
        if (test.length > best.length) {
            best = test;
        }
    }
    return best.length;
};


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringAlternateSolution = function(s) {
    let best = 0;
    let jlen = s.length;
    if (jlen === 1) return 1;
    for (let j=0; j<jlen; j++) {
        let test = '';
        let tl = 0;
        // get best substring from this position
        for (let i = j; i <= jlen; i++) {
            if (test.indexOf(s[i]) !== -1) {
                break;
            }
            if (s[i]) {
                test += s[i];
                tl += 1;
            }
        }        
        if (tl > best) {
            best = tl;
        }
    }
    return best;
};
