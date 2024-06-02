# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.

 

# Example 1:

# Input: s = "A man, a plan, a canal: Panama"
# Output: true
# Explanation: "amanaplanacanalpanama" is a palindrome.
# Example 2:

# Input: s = "race a car"
# Output: false
# Explanation: "raceacar" is not a palindrome.
# Example 3:

# Input: s = " "
# Output: true
# Explanation: s is an empty string "" after removing non-alphanumeric characters.
# Since an empty string reads the same forward and backward, it is a palindrome.


class Solution(object):
    def isPalindrome(self, s):
        alphabet_set = set(string.ascii_lowercase)
        number_set = set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
        resultString = ""
        for i, letter in enumerate(s):
            lowerCase = letter.lower()
            if lowerCase in alphabet_set or lowerCase in number_set:
                resultString += lowerCase
        reversedString = resultString[::-1]
        if reversedString == resultString:
            return True
        else:
            return False
        