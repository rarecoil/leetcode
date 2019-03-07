// Number: 20
// Title: Valid Parentheses

/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

// faster than 70% of solutions
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // edge case
    if (s === '') return true;
    
    let stack = [];
    let openBraces = "{(["
    let braces = openBraces + "})]";
    if (s.length === 1 && braces.indexOf(s) !== -1) {
        return false;
    }
    for (let i=0, ilen=s.length; i<ilen; i++) {
        // push opening onto the stack
        if (openBraces.indexOf(s[i]) !== -1) {
            stack.push(s[i]);
        }
        // a little quicker than more searches
        else {
            let target = null;
            switch(s[i]) {
                case '}':
                    target = '{';
                    break;
                case ']':
                    target = '[';
                    break;
                case ')':
                    target = '(';
                    break;
            }
            if (target) {
                let r = stack.pop();
                if (r !== target) {
                    return false;
                }
            }
        }
    }
    return (stack.length === 0);
};