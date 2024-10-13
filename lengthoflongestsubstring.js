// 3. Longest Substring Without Repeating Characters
// Medium
// 35.1K
// 1.6K
// Companies
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

const lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0;
    let right = 0;
    let letterSet = new Set();

    while (right < s.length) {
      rightLetter = s[right]
      leftLetter = s[left]
      if (!letterSet.has(rightLetter)) {
          letterSet.add(rightLetter)
          if ((right - left + 1) > maxLength) {
            maxLength = right - left + 1
          }
          right += 1
      } else {
        letterSet.delete(leftLetter)
        left += 1
      }
    }
    return maxLength
};

const test1 = lengthOfLongestSubstring("abcabcbb") 
// should be "3"

const test2 = lengthOfLongestSubstring("bbbbb")
// should be "1"

console.log(test1)
console.log(test2)