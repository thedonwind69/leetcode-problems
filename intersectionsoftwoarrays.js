// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.



var intersection = function(nums1, nums2) {

    var intersections = []
    for (let i in nums1) {
        let current = nums1[i];
        if (nums2.includes(current) && !intersections.includes(current)) {
            intersections.push(current)
        }
    }
    for (let i in nums2) {
        let current = nums2[i];
        if (nums1.includes(current)  && !intersections.includes(current)) {
            intersections.push(current)
        }
    }
    return intersections;

};