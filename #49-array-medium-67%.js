// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

var groupAnagrams = function(strs) {
    if (strs.length === 1) {
        return [[strs[0]]]
    }
    let copyOfStrs = [...strs]
    for (let i in copyOfStrs) {
        copyOfStrs[i] = copyOfStrs[i].split("").sort().join("");
    }
    let hash = {}
    for (let i in copyOfStrs) {
        let string = copyOfStrs[i];
        if (!hash[string]) {
            hash[string] = [];
            hash[string].push(strs[i]);
        } else {
            hash[string].push(strs[i])
        }
    }
    return Object.keys(hash).map((key) => hash[key])
};