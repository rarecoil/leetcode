// Number: 771
// Title: Jewels and Stones

/*
You're given strings J representing the types of stones that are jewels, 
and S representing the stones you have.  Each character in S is a type of 
stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S 
are letters. Letters are case sensitive, so "a" is considered a different 
type of stone from "A".

Example 1:
Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:
Input: J = "z", S = "ZZ"
Output: 0

Note:
S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/

// Random thoughts
// J is a subset of S, so we iterate S based upon what is in
// J. Return an integer based upon that. With length 50 I don't
// think we need to optimize too much here.
var numJewelsInStones = function(J, S) {
    let count = 0;
    for (let i = 0, len = J.length; i < len; i++) {
        for (let j = 0, sublen = S.length; j < sublen; j++) {
            if (S[j] === J[i]) {
                count++;
            }
        }
    }
    return count;
};