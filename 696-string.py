# Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

# Substrings that occur multiple times are counted the number of times they occur.

 

# Example 1:

# Input: s = "00110011"
# Output: 6
# Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
# Notice that some of these substrings repeat and are counted the number of times they occur.
# Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
# Example 2:

# Input: s = "10101"
# Output: 4
# Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
 
class Solution:
    def countBinarySubstrings(self, s: str) -> int:
        # List to store counts of consecutive 0's or 1's
        group_counts = []
        count = 1
        
        # Traverse the string and count consecutive characters
        for i in range(1, len(s)):
            if s[i] == s[i - 1]:
                count += 1
            else:
                group_counts.append(count)
                count = 1
        group_counts.append(count)  # Append the last group count
        
        # Calculate valid substrings based on consecutive group counts
        result = 0
        for i in range(1, len(group_counts)):
            result += min(group_counts[i], group_counts[i - 1])
        
        return result
