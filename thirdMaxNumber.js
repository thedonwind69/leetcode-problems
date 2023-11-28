// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.
 
// easy, array, 34% acceptance, no hints

var thirdMax = function(nums) {
    nums = nums.sort((a , b) => b-a);
    let count = {}
    for (let num of nums) {
        count[num] ? count[num]++ : count[num] = 1;
    }
    
    let keys = Object.keys(count).sort((a, b) => b-a);
    if (keys.length < 3) {
        return Math.max(...keys)
    } else {
        return keys[2]
    }
    
};