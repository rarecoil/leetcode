// Number: 238
// Title: Product of Array Except Self

/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelfNaive = function(nums) {
    // first attempt for the "follow up"
    // constant space complexity, O(n^2)
    // trash runtime: 7036ms (faster than 5.19%)
    // memory usage:  42.1 MB (less than 92.86%)
    let output = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
        // multiply everything but nums[i] in output
        // by this number
        let j = 0;
        for (j; j < output.length; j++) {
            if (j === i) continue;
            output[j] = output[j] * nums[i];
        }
    }
    return output;
};

// next revision
var productExceptSelf = function(nums) {
    // Runtime: 2504 ms, faster than 15.54% of JavaScript online submissions for Product of Array Except Self.
    // Memory Usage: 42.5 MB, less than 35.71% of JavaScript online submissions for Product of Array Except Self.
    let output = [];
    let nlen   = nums.length;
    for (let i=0; i<nlen; i++) {
        let left  = i-1;
        let right = i+1;
        let product = 1;
        while (left > -1) {
            product = product * nums[left];
            left--;
        }
        while (right < nlen) {
            product = product * nums[right];
            right++;
        }
        output[i] = product;
    }
    return output;
};