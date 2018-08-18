// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

// Example:

// Input:  [1,2,1,3,2,5]
// Output: [3,5]
// Note:

// The order of the result is not important. So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?


var singleNumber = function(nums) {
    
    var count = {};
    for (let i = 0; i<nums.length; i++) {
        var num = nums[i];
        if (count[num]) {
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    }
    var array = [];
    for (let i=0;i<nums.length;i++) {
        var num = nums[i];
        if ((count[num] === 1) && (!array.includes(num))) {
            array.push(num);
        }
    }
    
    return array;
    
};