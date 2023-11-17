// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
 

// easy, hash, 76% acceptance

var areOccurrencesEqual = function(s) {
    const splitString = s.split('');
    let count = {}
    for (const letter of splitString) {
        count[letter] ? count[letter] ++ : count[letter] = 1;
    }
    const keys = Object.keys(count);
    const occurrence = count[keys[0]]
    if (keys.every((key) => count[key] === occurrence)) {
        return true;
    }
    return false;
};