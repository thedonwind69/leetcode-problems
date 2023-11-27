// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// medium, string, 34% acceptance, this was HARDDDDDD but i got through it with only small hint :)



var lengthOfLongestSubstring = function(s) {

    if (!s.length) {return 0}
    if (s === " " || s.length === 1) return 1

    let substrings = [];
    let substring = new Set();


    const stringArray = s.split('');
    for (let i = 0 ; i<stringArray.length; i++) {
        let currentLetter = stringArray[i]
        substring.add(currentLetter)
        for (let j = i+1; j<stringArray.length; j++) {
            let nextLetter = stringArray[j]
            if (substring.has(nextLetter)) {
                substrings.push(substring);
                substring = new Set();
                break;
            } else {
                if (j === stringArray.length-1) {
                    substring.add(nextLetter);
                    substrings.push(substring);
                } else {
                     substring.add(nextLetter)
                }
            }
        }
    }
    substrings = substrings.map((set) => {
        return Array.from(set)
    })
    substrings = substrings.sort((a, b) => b.length - a.length)
    let lengthsOfSubstrings = substrings.map((s) => s.length)
    console.log(substrings)
    return Math.max(...lengthsOfSubstrings)
};
