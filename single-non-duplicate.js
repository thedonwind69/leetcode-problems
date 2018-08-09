// Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once.

// Example 1:
// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:
// Input: [3,3,7,7,10,11,11]
// Output: 10
// Note: Your solution should run in O(log n) time and O(1) space.

var singleNonDuplicate = function(nums) {
    var count = {};
    for (let i = 0; i< nums.length; i++) {
        if (count[nums[i]]) {
            count[nums[i]] += 1;
        } else {
            count[nums[i]] = 1;
        }
    }
    
    for (let j = 0; j < nums.length; j++) {
        if (count[nums[j]] === 1) {
            return nums[j]
        }
    }
    
};