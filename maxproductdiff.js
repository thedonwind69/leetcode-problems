// 1913. Maximum Product Difference Between Two Pairs
// Easy
// 746
// 37
// Companies
// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.

var maxProductDifference = function(nums) {
    
    var sortedNums = nums.sort((a, b) => a-b)

    var results = (sortedNums[sortedNums.length-1] * sortedNums[sortedNums.length-2] - sortedNums[0] * sortedNums[1])
    return results;
};
const result = maxProductDifference([5,6,2,7,4]);
console.log(result)