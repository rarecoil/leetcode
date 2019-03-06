// Number: 500
// Title: Keyboard Row

/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

Example:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let rows = [
        "EIOPQRTUWY",
        "ADFGHJKLS",
        "BCMNVXZ"
    ];
    let results = [];
    let i, j, k, ilen, klen, word, result;
    for (i = 0, ilen = words.length; i < ilen; i++) {
        word = words[i].toUpperCase().split("").sort();
        for (j = 0; j < 3; j++) {
            result = true;
            for (k=0, klen = word.length; k < klen; k++) {
                if (rows[j].indexOf(word[k]) === -1) {
                    result = false;
                    break;
                }
            }
            if (result === true) {
                results.push(words[i]);
            }
        }
    }
    return results;
};