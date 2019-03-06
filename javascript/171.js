// Number: 171
// Title: Excel Sheet Column Number

/*
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let map = {"A":1,"B":2,"C":3,"D":4,"E":5,"F":6,"G":7,"H":8,"I":9,"J":10,"K":11,"L":12,"M":13,"N":14,"O":15,"P":16,"Q":17,"R":18,"S":19,"T":20,"U":21,"V":22,"W":23,"X":24,"Y":25,"Z":26}
    let values = s.toUpperCase().split('');
    let base = 0;
    let sum = 0;

    while (values.length) {
        let val = map[values.pop()];
        if (base === 0) {
            sum = sum + val;
        } else {
            sum = sum + (val * (Math.pow(26, base)));
        }
        ++base;
    }
    return sum;
};