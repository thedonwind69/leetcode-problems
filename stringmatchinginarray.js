// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

 

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".

var stringMatching = function(words) {
    var matchingWords = [];
    for (let i = 0; i<words.length; i++) {
        let currentString = words[i];
        for (let j = 0; j<words.length; j++) {
            let currentStringToCompareTo = words[j];
            if (currentString !== currentStringToCompareTo) {
                if (currentStringToCompareTo.includes(currentString) && !matchingWords.includes(currentString)) {
                    matchingWords.push(currentString);
                }
            }
        }
    }
    return matchingWords;
};

const words = ["blue","green","bu"]
console.log(stringMatching(words));

