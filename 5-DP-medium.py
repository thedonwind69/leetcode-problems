# Given a string s, return the longest 
# palindromic
 
# substring
#  in s.

 

# Example 1:

# Input: s = "babad"
# Output: "bab"
# Explanation: "aba" is also a valid answer.
# Example 2:

# Input: s = "cbbd"
# Output: "bb"
 

# Constraints:

# 1 <= s.length <= 1000
# s consist of only digits and English letters.


class Solution:
    
    def isPalindrome(self, s: str) -> bool:
        reversedVersion = s[::-1]
        return s == reversedVersion

    def longestPalindrome(self, s: str) -> str:
        if not s or len(s) == 1:
            return s
        
        longest_palindrome = ""

        for i in range(len(s)):
            for j in range(i + 1, len(s) + 1):
                current_substring = s[i:j]
                
                # Check if the current substring is a palindrome
                if self.isPalindrome(current_substring):
                    # Update longest palindrome if this one is longer
                    if len(current_substring) > len(longest_palindrome):
                        longest_palindrome = current_substring
                        
        return longest_palindrome
