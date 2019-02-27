// Number: 290
// Title: Word Pattern

/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:
Input: pattern = "abba", str = "dog cat cat dog"
Output: true

Example 2:
Input:pattern = "abba", str = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false

Example 4:
Input: pattern = "abba", str = "dog dog dog dog"
Output: false

Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
*/

var wordPattern = function(pattern, str) {
    // tokenize pattern to word into hash
    let patternHash = {};
    
    // it's not explained, but you can't re-assign a
    // word to a different pattern token
    let assigned = [];
    
    // give me an array
    let words = str.split(" ");
    
    // short circuit if pattern / wordlist doesn't match
    if (pattern.length !== words.length) return false;
    
    for (let i = 0, len = pattern.length; i < len; i++) {
        if (Object.keys(patternHash).indexOf(pattern[i]) === -1 &&
            assigned.indexOf(words[i]) === -1) {
            // add this to pattern hash
            patternHash[pattern[i]] = words[i];
            assigned.push(words[i]);
        }
        else {
            let value = patternHash[pattern[i]];
            if (words[i] !== value) return false;
        }
    }
    
    return true;
};