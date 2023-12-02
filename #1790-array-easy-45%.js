// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

 

// Example 1:

// Input: s1 = "bank", s2 = "kanb"
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".
// Example 2:

// Input: s1 = "attack", s2 = "defend"
// Output: false
// Explanation: It is impossible to make them equal with one string swap.
// Example 3:

// Input: s1 = "kelb", s2 = "kelb"
// Output: true
// Explanation: The two strings are already equal, so no string swap operation is required.
 

// Constraints:

// 1 <= s1.length, s2.length <= 100
// s1.length == s2.length
// s1 and s2 consist of only lowercase English letters.

// easy, hash section, 45% acceptance, no hints

var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) {
        return true;
    }

    let left = 0;
    let right = 1;
    let s1Split = s1.split("")
    let s2Split = s2.split("")
    console.log(s1Split)
    while (left < s1Split.length-1) {
        let tempString = s1Split.slice();
        tempString[left] = s1Split[right];
        tempString[right] = s1Split[left];
        if (tempString.join('') === s2) {
            return true;
        } else {
            tempString = s1Split.slice();
            if (right + 1 === s1Split.length) {
                left++;
                right = left + 1;
            } else {
                right++
            }
        }
    }
    let left2 = 0;
    let right2 = 0
     while (left2 < s2Split.length-1) {
        let tempString = s2Split.slice();
        tempString[left2] = s2Split[right2];
        tempString[right2] = s2Split[left2];
        if (tempString.join('') === s1) {
            return true;
        } else {
            tempString = s2Split.slice();
            if (right2 + 1 === s2Split.length) {
                left2++;
                right2 = left2 + 1;
            } else {
                right2++
            }
        }
    }
    return false;
};