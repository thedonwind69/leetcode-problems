// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
 
var intersect = function(nums1, nums2) {
    
    var countFor1 = {};
    for (let i = 0 ; i<nums1.length; i++) {
        let current = nums1[i]
        if (countFor1[current]) {
            countFor1[current] += 1;
        } else {
            countFor1[current] = 1;
        }
    }

    var countFor2 = {};
    for (let i = 0 ; i<nums2.length; i++) {
        let current = nums2[i]
        if (countFor2[current]) {
            countFor2[current] += 1;
        } else {
            countFor2[current] = 1;
        }
    }
    let longerArray;
    if (nums1 < nums2) {
        longerArray = nums2
    } else if (nums1 > nums2) {
        longerArray = nums1
    } else {
        longerArray = nums1;
    }

    var result = []

    for (let i = 0 ; i < longerArray.length; i++) {
        let current = longerArray[i];
        if (countFor1[current] && countFor2[current]) {
            let diff;
            countFor1[current] > countFor2[current] ? diff = countFor2[current] : diff = countFor1[current]
            if (!result.includes(current)) {
                for (let j = 0; j < diff; j++) {
                    result.push(current)
                }
            }
            
        }
    }

    return result;

};

var nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

console.log(intersect(nums1, nums2))