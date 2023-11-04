// You are given two 0-indexed integer permutations A and B of length n.

// A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

// Return the prefix common array of A and B.

// A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.

 

// Example 1:

// Input: A = [1,3,2,4], B = [3,1,2,4]
// Output: [0,2,3,4]
// Explanation: At i = 0: no number is common, so C[0] = 0.
// At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
// At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
// At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.
// Example 2:

// Input: A = [2,3,1], B = [3,1,2]
// Output: [0,1,3]
// Explanation: At i = 0: no number is common, so C[0] = 0.
// At i = 1: only 3 is common in A and B, so C[1] = 1.
// At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
 

// Constraints:

// 1 <= A.length == B.length == n <= 50
// 1 <= A[i], B[i] <= n
// It is guaranteed that A and B are both a permutation of n integers.

// medium, hashtable, 80% acceptance, no hints:
// oN time and oN space

var findThePrefixCommonArray = function(A, B) {
    let count = {};
    let C = [];

    for (let i = 0; i < A.length; i++) {
        
        if (count[A[i]]) {
            count[A[i]] += 1
        } else {
            count[A[i]] = 1;
        }


        if (count[B[i]]) {
            count[B[i]] += 1
        } else {
            count[B[i]] = 1;
        }

        if (i == 0) {
            if (Object.keys(count).length !== 1) {
                C[i] = 0;
            } else {
                C[i] = 1
            }  
        } else {
            let numOfDuplicates = 0;
            for (let j = 0; j<Object.keys(count).length; j++) {
                let currentKey = Object.keys(count)[j];
                if (count[currentKey] == 2) {
                    numOfDuplicates += 1;
                }
            }
            C[i] = numOfDuplicates;
        }

    }
    return C;

};