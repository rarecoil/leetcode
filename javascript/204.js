// Number: 204
// Title: Count Primes 

/*
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // this requires implementation of a number sieve
    // i don't know the sieve of eratosthenes from memory
    // so i had to look this up
    // https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Pseudocode
    let array = new Array(n).fill(1);
    array[0] = 0;
    array[1] = 0;
    
    let i;
    for (i=2;i<Math.sqrt(n);i++) {
        if (array[i]) {
            let j = Math.pow(i, 2);
            while (j < n) {
                array[j] = 0;
                j = j + i;
            }
        }
    }
    let count = 0;
    for (i=0;i<array.length;i++) {
        if (array[i]) count++;
    }
    return count;
};