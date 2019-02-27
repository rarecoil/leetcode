// Number: 1
// Title: Two Sum

/*
Given an array of integers, return indices of the two numbers such that
they add up to a specific target.

You may assume that each input would have exactly one solution, and you 
may not use the same element twice.
*/

var twoSum = function(nums, target) {
    let one, two = null;
    for (let i = 0, il = nums.length; i < il; i++) {
        one = i;
        for (let j = (i+1), jl = nums.length; j < jl; j++) {
            // with commutative property we never need to search past i
            // if (j === i) continue;
            two = j;
            if ((nums[one] + nums[two]) === target) {
                return [one, two];
            }
        }
    }
};