// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]


var searchRange = function(nums, target) {

    if (nums.length === 1 && nums[0] === target) {
        return [0,0]
    }
    var result = [];
    for (let i = 0; i<nums.length; i++) {
        let currentNum = nums[i];
        if (currentNum === target) {
            result.push(i);
        }
    }
    if (result.length === 1) {
        result.push(result[0]);
        return result;
    }
    if (result.length === 0) {
        return [-1, -1]
    }
    return [result[0], result[result.length-1]];
};