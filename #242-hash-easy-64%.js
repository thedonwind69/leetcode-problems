// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

var isAnagram = function(s, t) {
    let countS = {};
    let countT = {};
    for (let i of s) {
        countS[i] ? countS[i]++ : countS[i] = 1;
    }
    for (let i of t) {
        countT[i] ? countT[i]++ : countT[i] = 1;
    }  
    for (let i of t) {
        if (countS[i]) {
            if (countS[i] !== countT[i]) {
                return false;
            }
        } else {
            return false
        }
    }
    for (let i of s) {
        if (countT[i]) {
            if (countT[i] !== countS[i]) {
                return false;
            }
        } else {
            return false
        }
    }
    return true;
};