/**
 * @param {number[]} nums
 * @return {number}
 */

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 


var sumOfUnique = function(nums) {
    var count = {};
    nums.forEach((num) => {
        if (count[num]) {
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    })
    var result = [];
    Object.keys(count).forEach((key) => {
        if (count[key] === 1) {
            if (!result.includes(key)) {
                result.push(key);
            }
        }
    })
    if (result.length == 0) {
        return 0;
    } else {
        return result.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);
    }
};