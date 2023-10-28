// You are given a 0-indexed integer array nums. You have to find the maximum sum of a pair of numbers from nums such that the maximum digit in both numbers are equal.

// Return the maximum sum or -1 if no such pair exists.

 

// Example 1:

// Input: nums = [51,71,17,24,42]
// Output: 88
// Explanation: 
// For i = 1 and j = 2, nums[i] and nums[j] have equal maximum digits with a pair sum of 71 + 17 = 88. 
// For i = 3 and j = 4, nums[i] and nums[j] have equal maximum digits with a pair sum of 24 + 42 = 66.
// It can be shown that there are no other pairs with equal maximum digits, so the answer is 88.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: No pair exists in nums with equal maximum digits.

// easy, hashtable section, 57% acceptance

var maxSum = function(nums) {
    let pairs = [];
    for(let i = 0; i < nums.length; i++) {
        let firstNum = nums[i];
        let firstNumSplit = firstNum.toString().split("");
        for(let j = i + 1; j < nums.length; j++) {
            let secondNum = nums[j];
            let secondNumSplit = secondNum.toString().split("");
            if (Math.max(...firstNumSplit) === Math.max(...secondNumSplit)) {
                pairs.push([firstNum, secondNum])
            }
        }
    }
    let greatest = 0;
    for (let i in pairs) {
        let currentPair = pairs[i];
        if (currentPair[0] + currentPair[1] > greatest) {
            greatest = currentPair[0] + currentPair[1];
        }
    }
    if (greatest > 0) {
        return greatest;
    } else {
        return -1
    }
};

// time complexity is o(n*2) and space is o(n*2)