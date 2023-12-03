// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

var findMaxConsecutiveOnes = function(nums) {
    

    let counter = 0;
    let longestConsecutive = 0;

    for (let num of nums) {
        if (num === 1) {
            counter++;
            if (counter > longestConsecutive) {
                longestConsecutive = counter;
            }
        } else {
            counter = 0;
        }
    }

    return longestConsecutive;

};