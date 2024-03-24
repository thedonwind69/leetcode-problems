// Given an integer array nums, return the most frequent even element.

// If there is a tie, return the smallest one. If there is no such element, return -1.

 

// Example 1:

// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.
// Example 2:

// Input: nums = [4,4,4,9,2,4]
// Output: 4
// Explanation: 4 is the even element appears the most.
// Example 3:

// Input: nums = [29,47,21,41,13,37,25,7]
// Output: -1
// Explanation: There is no even element.
 

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let count = {}
    for (let num of nums) {
        if (num % 2 == 0) {
            count[num] ? count[num]++ : count[num] = 1
        }
    }
    if (Object.keys(count).length === 0) {
        return -1
    }
    let mostFrequency = 0;
    for (let key of Object.keys(count)) {
        if (count[key] > mostFrequency) {
            mostFrequency = count[key]
        }
    }
    let mostFrequents = []
    for (let key of Object.keys(count)) {
        if (count[key] === mostFrequency) {
            mostFrequents.push(parseInt(key))
        }
    }
    return Math.min(...mostFrequents)
};