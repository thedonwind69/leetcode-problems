# Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

# Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

# Example 1:

# Input: s = "abccccdd"
# Output: 7
# Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
# Example 2:

# Input: s = "a"
# Output: 1
# Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

 class Solution(object):
    def longestPalindrome(self, s):
        count = {}
        for i, letter in enumerate(s):
            if letter in count:
                count[letter] += 1
            else:
                count[letter] = 1
        lengthOfLongest = 0
        hasOdd = False
        for key in count:
            if count[key] % 2 == 0:
                lengthOfLongest += count[key]
            else:
                lengthOfLongest += count[key] - 1
                hasOdd = True
        if hasOdd:
            lengthOfLongest += 1
        
        return lengthOfLongest