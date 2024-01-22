// You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

 

// Example 1:

// Input: s = "bab", t = "aba"
// Output: 1
// Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
// Example 2:

// Input: s = "leetcode", t = "practice"
// Output: 5
// Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
// Example 3:

// Input: s = "anagram", t = "mangaar"
// Output: 0
// Explanation: "anagram" and "mangaar" are anagrams. 

// was hard, needed help


var minSteps = function(s, t) {
    let countS = {};
    let countT = {};
    for (let i of s) {
        countS[i] ? countS[i]++ : countS[i] = 1;
    }
    for (let i of t) {
        countT[i] ? countT[i]++ : countT[i] = 1;
    }
    let counter = 0;
    for (let char in countS) {
        if (countT[char]) {
            counter += Math.max(0, countS[char] - countT[char]);
        } else {
            counter += countS[char];
        }
    }
    return counter
};