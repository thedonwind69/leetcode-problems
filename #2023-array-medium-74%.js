// Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.

 

// Example 1:

// Input: nums = ["777","7","77","77"], target = "7777"
// Output: 4
// Explanation: Valid pairs are:
// - (0, 1): "777" + "7"
// - (1, 0): "7" + "777"
// - (2, 3): "77" + "77"
// - (3, 2): "77" + "77"
// Example 2:

// Input: nums = ["123","4","12","34"], target = "1234"
// Output: 2
// Explanation: Valid pairs are:
// - (0, 1): "123" + "4"
// - (2, 3): "12" + "34"

var numOfPairs = function(nums, target) {
    let result = [];
    for (let i in nums) {
        let string1 = nums[i];
        for (let j in nums) {
            let string2 = nums[j];
            if (i != j) {
                if (string1+string2 === target) {
                    result.push([i, j])
                }
            }
        }
    }
    return result.length
};