// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.

// medium, hash section, 73% acceptance.
// no hints, was easy for me,
// oN time and oN space
var findDuplicates = function(nums) {
    let countSet = new Set();
    let arrayOfTwice = [];
    for (let i = 0 ; i<nums.length; i++) {
        let currentNum = nums[i]
        if (!countSet.has(currentNum)) {
            countSet.add(currentNum)
        } else {
            countSet.add(currentNum)
            arrayOfTwice.push(currentNum)
        }
    }
    return arrayOfTwice
};

// someone elses solutions, oN time and O1 space:

var findDuplicates = function(nums) {
    const res = [];  // Initialize an empty array to store the result.

    for (const num of nums) {
        const index = Math.abs(num) - 1;  // Calculate the index using the absolute value of the number.

        if (nums[index] < 0) {
            // If the element at the calculated index is already negative, it means we've seen it before, so it's a duplicate.
            res.push(index + 1);  // Add the corresponding number to the result array.
        } else {
            nums[index] = -nums[index];  // Mark the element at the calculated index as negative, indicating we've seen it.
        }
    }

    return res;  // Return the array of duplicate values.
};