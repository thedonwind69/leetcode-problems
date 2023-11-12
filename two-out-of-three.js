
// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 

// Example 1:

// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.
// Example 2:

// Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
// Output: [2,3,1]
// Explanation: The values that are present in at least two arrays are:
// - 2, in nums2 and nums3.
// - 3, in nums1 and nums2.
// - 1, in nums1 and nums3.
// Example 3:

// Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
// Output: []
// Explanation: No value is present in at least two arrays.
 

// Constraints:

// 1 <= nums1.length, nums2.length, nums3.length <= 100
// 1 <= nums1[i], nums2[j], nums3[k] <= 100

// easy, hash, 70% acceptance, 72ms.
// felt a little hard

// time is O(n * m) and space is same

var twoOutOfThree = function(nums1, nums2, nums3) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let set3 = new Set(nums3);
    let allSets = [set1, set2, set3];
    let allSet = new Set(nums1.concat(nums2, nums3));
    let arrayFromSet = Array.from(allSet);
    let Obj = {};
    for (let i = 0; i < arrayFromSet.length; i++) {
        let currentNum = arrayFromSet[i];
        for (let j = 0; j < allSets.length; j++) {
            let currentSet = allSets[j];
            
            if (currentSet.has(currentNum)) {
                if (!Obj[currentNum]) {
                    Obj[currentNum] = 0;
                }
                Obj[currentNum] += 1;
            } else {
                if (!Obj[currentNum]) {
                    Obj[currentNum] = 0;
                }
            }
        }
    }
    return Object.keys(Obj).reduce((array, key) => {
        if (Obj[key] > 1) {
            array.push(key)
        } 
        return array
    }, [])
};
