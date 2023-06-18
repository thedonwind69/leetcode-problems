// 2496. Maximum Value of a String in an Array
// Easy
// 287
// 15
// Companies
// The value of an alphanumeric string can be defined as:

// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

 

// Example 1:

// Input: strs = ["alic3","bob","3","4","00000"]
// Output: 5
// Explanation: 
// - "alic3" consists of both letters and digits, so its value is its length, i.e. 5.
// - "bob" consists only of letters, so its value is also its length, i.e. 3.
// - "3" consists only of digits, so its value is its numeric equivalent, i.e. 3.
// - "4" also consists only of digits, so its value is 4.
// - "00000" consists only of digits, so its value is 0.
// Hence, the maximum value is 5, of "alic3".

var maximumValue = function(strs) {
    const alphabet = Array.from({ length: 26}, (v, n) => String.fromCharCode(n + 97));
    var maxValue = 0;
    for (let i in strs) {
        let currentStrArray = strs[i].split('');
        if (currentStrArray.some((letter) => alphabet.includes(letter))) {
            if (currentStrArray.length > maxValue) {
                maxValue = currentStrArray.length;
            }
        } else {
            if (parseInt(strs[i]) > maxValue) {
                maxValue = parseInt(strs[i]);
            }
        }
    }
    return maxValue;
};