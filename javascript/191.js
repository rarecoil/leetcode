// Number: 191
// Title: Number of 1 Bits

/*
Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).


Example 1:

Input: 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Example 2:

Input: 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
Example 3:

Input: 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 

Note:

Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3 above the input represents the signed integer -3.
 

Follow up:

If this function is called many times, how would you optimize it?
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 88ms, 35.6 MB
// I was curious if using the binary string representation
// would be faster than bit flipping. It's not.
var hammingWeight = function(n) {
    let num = n.toString(2);
    let count = 0;
    for (let i=0,ilen=num.length; i<ilen; i++) {
        if (num[i]==='1') count++;
    }
    return count;
};

// Takes about 72ms, 34.2MB
var hammingWeightBits = function(n) {
    let bits = 0;
    let bitmask = 1;
    for (let i=0;i<32;i++) {
        let is1 = ((n & bitmask) !== 0);
        if (is1) bits++;
        bitmask = bitmask << 1;
    }
    return bits;
}