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

var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let start = 0;
    let end = 0;
    const set = new Set();
  
    while (end < s.length) {
      if (!set.has(s[end])) {
        set.add(s[end]);
        maxLen = Math.max(maxLen, set.size);
        end++;
      } else {
        set.delete(s[start]);
        start++;
      }
    }
  
    return maxLen;
  };