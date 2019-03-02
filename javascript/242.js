// Number: 242
// Title: Valid Anagram

/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // well, anagrams need to be the same length
    if (s.length !== t.length) return false;
    
    let histogram = {};
    let i, ilen;
    
    // build a histogram of characters from s
    for (i=0, ilen=s.length; i<ilen; i++) {
        if (histogram[s[i]]) {
            histogram[s[i]]++;
        } else {
            histogram[s[i]] = 1; 
        }
    }

    // check t against the histogram
    for (i=0; i<ilen; i++) {
        if (!histogram[t[i]]) {
            // this letter didn't even exist before
            return false;
        } else {
            histogram[t[i]]--;
            if (histogram[t[i]] === 0) {
                delete histogram[t[i]];
            }
        }
    }
    return (Object.keys(histogram).length === 0);
};