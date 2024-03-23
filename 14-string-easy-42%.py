# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

 

# Example 1:

# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.

class Solution(object):
    def longestCommonPrefix(self, strs):
        if len(strs) == 0:
            return ""
        
        min_length = min(len(word) for word in strs)
        
        longestCommonPref = ""
        for i in range(min_length):
            char = strs[0][i]
            if all(word[i] == char for word in strs):
                longestCommonPref += char
            else:
                break
        
        return longestCommonPref
