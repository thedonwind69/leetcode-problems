// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

var containsNearbyDuplicate = function(nums, k) {
    

    for (let i = 0; i< nums.length; i++) {
        let currentNum1 = nums[i];
        for (let j = i+1; j< nums.length; j++) {
            let currentNum2 = nums[j];
            if ((currentNum1 === currentNum2) && ((Math.abs(i -j) <= k)) ) {
                return true;
            }
        }
    }

    return false;

};

// on2 time complexity, worst case