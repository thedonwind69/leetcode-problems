// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
 

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

// easy, hash, 74% acceptance, easy no hints

var uniqueOccurrences = function(arr) {
    let count = {};
    for (let i = 0 ; i<arr.length; i++) {
        let currentNum = arr[i];
        if (count[currentNum]) {
            count[currentNum] += 1;
        } else {
            count[currentNum] = 1;
        }
    }
    let values = Object.values(count)
    let countOfValues = {}
    console.log(values)
    for (let i = 0 ; i<values.length; i++) {
        let currentNum = values[i];
        if (countOfValues[currentNum]) {
            return false;
        } else {
            countOfValues[currentNum] = 1;
        }
    }
    return true;
};