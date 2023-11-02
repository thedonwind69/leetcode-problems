// You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.

// Return any such subsequence as an integer array of length k.

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

// Example 1:

// Input: nums = [2,1,3,3], k = 2
// Output: [3,3]
// Explanation:
// The subsequence has the largest sum of 3 + 3 = 6.
// Example 2:

// Input: nums = [-1,-2,3,4], k = 3
// Output: [-1,3,4]
// Explanation: 
// The subsequence has the largest sum of -1 + 3 + 4 = 6.
// Example 3:

// Input: nums = [3,4,3,3], k = 2
// Output: [3,4]
// Explanation:
// The subsequence has the largest sum of 3 + 4 = 7. 
// Another possible subsequence is [4, 3].

// easy, hashtable section, acceptance is 42%
// needed hint on this one, and a peek at solution

var maxSubsequence = function(nums, k) {
    nums = nums.map((n,i) => [i, n])
    nums.sort((a,b) => b[1] - a[1])

    let newSliced = nums.slice(0, k);
    console.log(newSliced)
    let resultArray = [];
    for (let i = 0; i<newSliced.length; i++) {
        let currentArr = newSliced[i];
        resultArray[currentArr[0]] = currentArr[1];
    }
    return resultArray.filter((num) => num !== undefined)
};
